module.exports.config = {
	name: "baicao",
	version: "2.6.1",
	hasPermssion: 0,
	credits: "Mirai Team and lzhoang2601",
	description: "Game bài cào dành cho nhóm có đặt cược",
	commandCategory: "Game",
	usages: "[create/join/start/info/leave]=>chia bài/ đổi bài/ ready",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users, Currencies }) => {
	const { senderID, threadID, body, messageID } = event;

	if (typeof body == "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var data = global.moduleData.baicao.get(threadID);
	if (data.start != 1) return;

	if (body.indexOf("chia bài") == 0) {
		if (data.chiabai == 1) return;
		for(const key in data.player) {
			const card1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			var tong = (card1 + card2 + card3);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			data.player[key].card1 = card1;
			data.player[key].card2 = card2;
			data.player[key].card3 = card3;
			data.player[key].tong = tong;
            nameUser = await Users.getNameUser(data.player[key].id)
			api.sendMessage(`Bài của bạn: ${card1} | ${card2} | ${card3} \n\nTổng bài của bạn: ${tong}`, data.player[key].id, (error, info) => {
				if (error) api.sendMessage(`Không thể chia bài cho người dùng: ${nameUser}`, threadID)
			});
				
		}
		data.chiabai = 1;
		global.moduleData.baicao.set(threadID, data);
		return api.sendMessage("» Đã chia bài rồi đó «\n\n📌Kiểm tra tn chờ, spam\n🙏Mỗi ng có 2 lần đổi bài\nNếu bài nhỏ, nhập 'đổi bài'\n👉Để dằn bài, nhập 'ready'", threadID);
	}

	if (body.indexOf("đổi bài") == 0) {
		if (data.chiabai != 1) return;
		var player = data.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("Bạn đã sử dụng toàn bộ lượt đổi bài", threadID, messageID);
		if (player.ready == true) return api.sendMessage("Bạn đã ready, bạn không thể đổi bài!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		player.tong = (player.card1 + player.card2 + player.card3);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(data);
        nameUser = await Users.getNameUser(player.id)
		return api.sendMessage(`Bài của bạn sau khi được đổi: ${player.card1} | ${player.card2} | ${player.card3} \n\nTổng bài của bạn: ${player.tong}`, player.id, (error, info) => {
			if (error) api.sendMessage(`Không thể đổi bài cho người dùng: ${nameUser}`, threadID)
		});
	}

	if (body.indexOf("ready") == 0) {
		if (data.chiabai != 1) return;
		var player = data.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = await Users.getNameUser(player.id);
		data.ready += 1;
		player.ready = true;
		if (data.player.length == data.ready) {
			const player = data.player;
			player.sort(function (a, b) { return b.tong - a.tong });
      winPlayer = await Users.getNameUser(player[0].id);

			var ranking = [], num = 1;

			for (const info of player) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} với ${info.card1} | ${info.card2} | ${info.card3} => ${info.tong} nút\n`);
			}

      money = data.dCoin * player.length;
      await Currencies.increaseMoney(player[0].id, money);
		  ranking.push(` ${winPlayer} với ${player[0].tong} nút nhận được ${money}$\n`);

			global.moduleData.baicao.delete(threadID);
			return api.sendMessage(`Kết quả:\n\n ${ranking.join("\n")}`, threadID);
		}
		else return api.sendMessage(`👤 ${name} Đã sẵn sàng lật bài\n\nCòn lại: ${data.player.length - data.ready} condi chưa dám lật bài`, event.threadID);
	}
	
	if (body.indexOf("nonready") == 0) {
		const data = data.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Những người chơi chưa ready bao gồm: " + msg.join(", "), threadID);
		else return;
	}
}

module.exports.run = async ({ api, event, Currencies, args, Users }) => {
	var { senderID, threadID, messageID } = event;

	threadID = String(threadID);
	senderID = String(senderID);

	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var data = global.moduleData.baicao.get(threadID) || {};

	switch (args[0]) {
        case "join":
	    case "-j": {
            if ( data.start == 1 ) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
			senderCoin = (await Currencies.getData(senderID)).money
            if ( typeof data.player == "undefined" ) { 
                if ( typeof senderCoin == "undefined" || senderCoin < 1e3 ) return api.sendMessage("Bạn quá nghèo để khởi tạo bàn bài cào!", threadID, messageID);
                global.moduleData.baicao.set( event.threadID, { "author": senderID, "maxCoin": senderCoin, "dCoin": 0, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "money": senderCoin,  "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ]} );
				return api.sendMessage("Hãy tham gia bàn bài cào nào mọi người.\n\n Tham gia, nhập >baicao join\n Cược số tiền, nhập >baicao create <coins>", threadID, messageID);
            }
            if ( data.player.find(item => item.id == senderID) ) return api.sendMessage("Bạn đã tham gia vào bàn bài cào này!", threadID, messageID);
            if ( typeof senderCoin == "undefined" || senderCoin < 1e3 ) return api.sendMessage("Bạn quá nghèo để tham gia vào bàn bài cào này!", threadID, messageID);
            data.player.push({ "id": senderID, "money": senderCoin,  "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false });
            if ( senderCoin < data.maxCoin ) data.maxCoin = senderCoin
            global.moduleData.baicao.set(threadID, data);
            return api.sendMessage(`${await Users.getNameUser(senderID)} đã tham gia bàn bài cào này!\n Số tiền cao nhất được phép cược hiện tại là ${data.maxCoin}$`, threadID, messageID); 
		}

        case "leave":
		case "-l": {
            if ( data.start == 1 ) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
			if ( !data.player.some(item => item.id == senderID) ) return api.sendMessage("Bạn chưa tham gia vào bàn bài cào trong nhóm này!", threadID, messageID);
			if ( data.author == senderID ) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("Chủ đã huỷ cuộc hẹn, đồng nghĩa với việc bàn sẽ bị giải tán!", threadID, messageID);
			}
			else {
				data.player.splice(data.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("Bạn đã rời khỏi bàn bài cào này!", threadID, messageID);
                global.moduleData.baicao.set(threadID, data);
			}
			return;
		}

		case "create":
		case "-c": {
            if ( senderID != data.author ) return api.sendMessage("Bạn không phải người tạo cuộc hẹn để thực hiện việc đặt cược", threadID, messageID);
            if ( typeof data.player == "undefined" ) return api.sendMessage("Hiện tại chưa có bàn bài cào nào hay một cuộc hẹn được diễn ra, gõ >help baicao để tìm hiểu thêm", threadID, messageID);
            if ( data.player.length < 2 ) return api.sendMessage("Bạn chưa thể bắt đầu vì số người chơi chưa đạt tối thiểu", threadID, messageID);
            if ( typeof args[1] == "undefined" || parseInt(args[1]) < 1000 ) return api.sendMessage("Số tiền cược không hợp lệ, vui lòng đặt cược lại", threadID, messageID);
            if ( data.maxCoin < parseInt(args[1]) ) return api.sendMessage(`Số tiền cược đã vượt quá số tiền tối thiểu là ${data.maxCoin}$, vui lòng đặt cược lại`, threadID, messageID);
            data.start = 1;
            data.dCoin = parseInt(args[1])
            for ( user of data.player ) {
                await Currencies.decreaseMoney(user.id, data.dCoin);
            }
			return api.sendMessage(`\n» Đặt cược ${args[1]}$ thành công! «\n\n👉Để bắt đầu cuộc chơi, nhập \"chia bài\"`, threadID, messageID);
  	    }

        case "cancel":
        case "-x": {
            if ( typeof data.player == "undefined" ) return api.sendMessage("Hiện tại chưa có bàn bài cào nào hay một cuộc hẹn được diễn ra, gõ >help baicao để tìm hiểu thêm", threadID, messageID);
            global.moduleData.baicao.delete(threadID);
            return api.sendMessage("Đã huỷ bàn bài cào!", threadID, messageID);
        }

		case "info":
		case "-i": {
			if ( typeof data.player == "undefined" ) return api.sendMessage("Hiện tại chưa có bàn bài cào nào hay một cuộc hẹn được diễn ra, gõ >help baicao để tìm hiểu thêm", threadID, messageID);
			return api.sendMessage(
				"=== Bàn Bài Cào ===" +
				"\n- Author Bàn: " + data.author +
				"\n- Tổng số người chơi: " + data.player.length + " Người" +
                "\n- Số tiền cược tối đa: " + data.maxCoin + "$"
			, threadID, messageID);
		}
    
		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
}