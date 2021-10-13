 /**
* @author OreoZera
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "mông",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "OreoZera",
  description: "Random Ảnh Mông Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-img",
  usages: "mông",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/pKeyu4X.jpg",
"https://i.imgur.com/ZO166Og.jpg",
"https://i.imgur.com/wcLr01s.jpg",
"https://i.imgur.com/woJxed7.jpg",
"https://i.imgur.com/SJc7ZUa.jpg",
"https://i.imgur.com/aAspPIp.jpg",
"https://i.imgur.com/b5rrNWe.jpg",
"https://i.imgur.com/vgS8980.jpg",
"https://i.imgur.com/PyMRqjO.jpg",
"https://i.imgur.com/TrsfTXx.jpg",
"https://i.imgur.com/GsTHgKN.jpg",
"https://i.imgur.com/IYggqjD.jpg",
"https://i.imgur.com/24V5APZ.jpg",
"https://i.imgur.com/nfWKOFk.jpg",
 "https://i.imgur.com/EIAzjE5.jpg",
 "https://i.imgur.com/SpKu2ga.jpg",
 "https://i.imgur.com/W6PGVIW.jpg",
 "https://i.imgur.com/C18d9JF.jpg",
 "https://i.imgur.com/HZiR0hM.jpg",
 "https://i.imgur.com/hzCGqhz.jpg",
 "https://i.imgur.com/Mp76CBf.jpg",
 "https://i.imgur.com/nYJFGAS.jpg",
 "https://i.imgur.com/nvus52I.jpg",
 "https://i.imgur.com/GJ3qlyS.jpg",
 "https://i.imgur.com/FMxnZjQ.jpg",
 "https://i.imgur.com/wSmaoCM.jpg",
 "https://i.imgur.com/nCl64c2.jpg",
 "https://i.imgur.com/G9v53bw.jpg",
 "https://i.imgur.com/1bZPaxD.jpg",
 "https://i.imgur.com/IfhSVfi.jpg",
 "https://i.imgur.com/uf2HP7B.jpg",
 "https://i.imgur.com/Q5jgc1w.jpg",
 "https://i.imgur.com/1IFldvh.jpg",
 "https://i.imgur.com/yzhxm1c.jpg",
 "https://i.imgur.com/7QOdWUn.jpg",
 "https://i.imgur.com/xkHatPt.jpg",
 "https://i.imgur.com/dAZMpMb.jpg",
 "https://i.imgur.com/hfVa6ur.jpg",
 "https://i.imgur.com/d1El0ga.jpg",
 "https://i.imgur.com/5aTY1wP.jpg",
 "https://i.imgur.com/6o7lkzK.jpg",
 "https://i.imgur.com/VHgHKux.jpg",
 "https://i.imgur.com/PDD0c3b.jpg",
 "https://i.imgur.com/g8Dx5ro.jpg",
 "https://i.imgur.com/dsrWtA4.jpg",
 "https://i.imgur.com/FVkLWGP.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Bổ mắt nhé😼\n» Số dư: -100 đô «\n📩Facebook.com/MhTuanng203`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};