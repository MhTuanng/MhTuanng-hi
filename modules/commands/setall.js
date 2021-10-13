module.exports.config = {
 name: "setall",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Khánh Milo",
 description: "Set biệt danh all tv",
 commandCategory: "other",
 usages: "[name]",
 cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(10)
 api.changeNickname(`${name}`, event.threadID, setname);
    }
}
