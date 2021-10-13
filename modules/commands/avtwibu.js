module.exports.config = {
    name: "avtwibu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jukie",
    description: "Tạo ảnh avt",
    commandCategory: "Tạo ảnh",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    if(!args[0]) {

        //api.sendMessage(`✅Vui lòng nhập theo định dạng:\n${prefix}${this.config.name} ID/Namenv + Chữ nền + Chữ ký + Mã màu/color`,event.threadID,event.messageID)
            let getAvatar = (await axios.get(`https://www.htlvietnam.com/images/bai-viet/code-mau/bang-ma-mau-02.jpg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `✅Vui lòng nhập theo định dạng:\n${prefix}${this.config.name} ID/Namenv + Chữ nền + Chữ ký + Mã màu/color\n✨Hãy dùng lệnh ${global.config.PREFIX} listid để lấy danh sách ID`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
    }
    else{
    const id = args[0]; //ID nhân vật
    if(!args[1]) {


            api.sendMessage(`✨Thiếu chữ nền\n✨Đinh dạng: ${prefix}${this.config.name} ID/Namenv + Chữ nền + Chữ ký + Mã màu/color `, event.threadID);
    } 
    else {     
    const namebg = args[1]; //chữ nền
    if(!args[2]) {


            api.sendMessage(`✨Thiếu chữ ký\n✨Đinh dạng: ${prefix}${this.config.name} ID/Namenv + Chữ nền + Chữ ký + Mã màu/color `, event.threadID);
    } 
    else {    
    const chuky = args[2]; //chữ ký

    var rdcolor = ['pink', 'blue', 'red', 'green', 'yellow ', 'brown', 'orange', 'gray'];
    var colorr = rdcolor[Math.floor(Math.random() * rdcolor.length)];   //random màu



   /* function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color1 = '#';
    for (var i = 0; i < 6; i++) {
     color1 += letters[Math.floor(Math.random() * 16)];
  }
    return color1;
  }
    var colorr = generateRandomColor();*/// random mã màu
    
    //var colorr = '#'+Math.floor(Math.random()*16777215).toString(16); //random mã màu 2

    const color = args[3] || colorr;


            let getAvatar = (await axios.get(`https://taoanhdep.kaysil.dev/v1/wibu/create?id_nhanvat=${id}&chu_nen=${namebg}&chu_ky=${chuky}&mau_nen=${color}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avttt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `✨Avata Wibu của bạn đây`,
                  attachment: fs.createReadStream(__dirname + `/cache/avttt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avttt.png`), event.messageID);
}
}
}
}