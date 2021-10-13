module.exports.config = {
	name: "tid",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "DũngUwU",
	description: "Lấy id box", 
	commandCategory: "group",
	usages: "",
	cooldowns: 5, 
};

module.exports.run = function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
