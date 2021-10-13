module.exports.config = {
	name: "canhbao",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Cảnh báo người dùng!",
	commandCategory: "system",
	usages: "[lý do/all]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "listwarning.json");

	if (!existsSync(path)) writeFileSync(path, JSON.stringify({}), 'utf-8');
	return;
}

module.exports.run = async function ({ event, api, args, permssion, Users }) {
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, mentions, senderID } = event;
    const mention = Object.keys(mentions);

    const path = resolve(__dirname, "cache", "listwarning.json");
    const dataFile = readFileSync(path, "utf-8");
    var warningData = JSON.parse(dataFile);

    switch (args[0]) {
        case "all": {
            if (permssion != 2) return api.sendMessage(`Bạn không đủ quyền hạn để có thể sử dụng lệnh này!`, threadID, messageID);
            var listUser = "";

            for (const IDUser in warningData) {
                const name = global.data.userName.get(IDUser) || await Users.getNameUser(IDUser);
                listUser += `- ${name}: còn ${warningData[IDUser].warningLeft} lần cảnh báo\n`;
            }
            if (listUser.length == 0) listUser = "Hiện tại chưa có người dùng nào bị cảnh cáo";
            return api.sendMessage(listUser, threadID, messageID);
        }
        case "reset": {
            writeFileSync(path, JSON.stringify({}), 'utf-8');
            return api.sendMessage("Đã reset lại toàn bộ list warn!", threadID, messageID);
        }
        default: {
            if (permssion != 2) {
                const data = warningData[args[0] || mention[0] || senderID];
                console.log(data);
                const name = global.data.userName.get(args[0] || mention[0] || senderID) || await Users.getNameUser(args[0] || mention[0] || senderID);
                if (!data) return api.sendMessage(`Hiện tại ${name} không có bất cứ lời cảnh báo nào!`, threadID, messageID);
                else {
                    var reason = "";
                    for (const n of data.warningReason) reason += `- ${n}\n`;
                    return api.sendMessage(`Hiện tại ${name} còn lại ${data.warningLeft} lần cảnh cáo:\n\n${reason}`, threadID, messageID);
                }
            }
            else {
                try {
                    if (event.type != "message_reply") return api.sendMessage("Bạn chưa reply tin nhắn cần cảnh báo.", threadID, messageID);
                    if (event.messageReply.senderID == api.getCurrentUserID()) return api.sendMessage('Không thể cảnh báo tới tài khoản bot.', threadID, messageID);
                    if (args.length == 0) return api.sendMessage("Bạn chưa nhập lý do cảnh báo!", threadID, messageID);
                    var data = warningData[event.messageReply.senderID] || { "warningLeft": 3, "warningReason": [], "banned": false };
                    if (data.banned) return api.sendMessage("Tài khoản trên đã bị ban do đã bị cảnh cáo 3 lần!", threadID, messageID);
                    const name = global.data.userName.get(event.messageReply.senderID) || await Users.getNameUser(event.messageReply.senderID);
                    data.warningLeft -= 1;
                    data.warningReason.push(args.join(" "));
                    if (data.warningLeft == 0) data.banned = true;
                    warningData[event.messageReply.senderID] = data;
                    writeFileSync(path, JSON.stringify(warningData, null, 4), "utf-8");
                    if (data.banned) {
                        const data = (await Users.getData(event.messageReply.senderID)).data || {};
                        data.banned = 1;
                        await Users.setData(event.messageReply.senderID, { data });
                        global.data.userBanned.set(parseInt(event.messageReply.senderID), 1);
                    }
                    return api.sendMessage(`Đã cảnh báo ${name} với lý do: ${args.join(" ")}, ${(data.banned) ? `bởi vì đã bị cảnh báo 3 lần nên tài khoản trên đã bị ban` : `tài khoản trên còn ${data.warningLeft} lượt cảnh báo!`}`, threadID, messageID);
                } catch (e) { return console.log(e) };
            }
        }
    }
}