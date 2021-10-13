module.exports.config = {
	name: "cony",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "⚡D-Jukie",
	description: "Tỉ lệ có Ny của bạn trong năm nay",
	commandCategory: "Giải trí", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/pTDybmxS/161543965-291703348963240-2822779011953092041-n.jpg"  ];
  var callback = () => api.sendMessage({body:`⚡Chúc mừng ${name}\n⚡Nếu bạn tỏ tình crush thì ${tle}% là bạn sẽ có người yêu :>`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };