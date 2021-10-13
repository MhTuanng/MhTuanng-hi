module.exports.config = {
	name: "rankup",
	version: "1.2",
	hasPermssion: 1,
	credits: "D-Jukie",
	description: "Đếm kinh nghiệm cho việc check tương tác trong hệ thống dữ liệu bot/nhóm",
	commandCategory: "Cấu hình",
	cooldowns: 1
};

module.exports.handleEvent = async function({ api, event, Currencies, Users }) {
	var {threadID, senderID } = event;
	let exp = (await Currencies.getData(senderID)).exp;
	exp = exp += 1;
	if (isNaN(exp)) return;
	const lv1 = Math.floor((Math.sqrt(1 + (4 * exp / 3) + 1) / 2));
	const lv2 = Math.floor((Math.sqrt(1 + (4 * (exp + 1) / 3) + 1) / 2));
	if (lv2 > lv1 && lv2 != 1) {
		const name = await Users.getData(senderID).name;
		const namett = this.config.name;
	}
	await Currencies.setData(senderID, { exp });
	return;
}
module.exports.run = async function({ api, event, Threads }) {
var {threadID, messageID} = event;
return api.sendMessage(`Bản này sẽ không có thông báo rankup\nVẫn tính tương tác bình thường nhé`, threadID, messageID);
}