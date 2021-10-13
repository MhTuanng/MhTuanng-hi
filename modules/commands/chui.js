module.exports.config = {
    name: "chui",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang ", //đi war
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "Nhóm",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    var name = (await Users.getData(mention)).name
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("em xin nói chuyện nhẹ nhàng đúng 80s trong nhóm này nha!");
setTimeout(() => {a({body: "Đ!t con mẹ mày" + " " + name, mentions: arraytag})} , 1000);
setTimeout(() => {a({body: "Mày ra đây tao bảoHiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 2000);
setTimeout(() => {a({body: "Hiện hồn nhanh con chó" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Hiện hồn bố mày hỏi tội" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "Mày trốn khi nào mới hiện hồn đây" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "Đ!t cụ mày nữa hiện hồn" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "Nhanh ra chửi nhau với tao" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "Con mẹ mày ra đây đi thằng lồn" + " " + name, mentions: arraytag})} , 10000);
setTimeout(() => {a({body: "Hiện hồn đi thằng mặt lồn" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name, mentions: arraytag})} , 12000);
setTimeout(() => {a({body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name, mentions: arraytag})} , 13000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 14000);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})} , 16000);

setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})} , 17000);
setTimeout(() => {a({body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name, mentions: arraytag})} , 18000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})} , 19000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})} , 21000);
setTimeout(() => {a({body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name, mentions: arraytag})} , 22000);
setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 23000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 25000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 26000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 27000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 29000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 30000);
setTimeout(() => {a({body: "Hoá ra cũng chỉ là con chó mang hình dáng người" + " " + name, mentions: arraytag})} , 31000);
setTimeout(() => {a({body: " Sống ở đời mà cứ như Hề trong rạp xiếc : ))" + " " + name, mentions: arraytag})} , 32000);

setTimeout(() => {a({body: "Mày đừng so sánh bọn tao với nó" + " " + name, mentions: arraytag})} , 33000);
setTimeout(() => {a({body: "vì nó là chó còn tao là người" + " " + name, mentions: arraytag})} , 34000);
setTimeout(() => {a({body: "Mày đừng bật cười khi nghe điều đó" + " " + name, mentions: arraytag})} , 35000);
setTimeout(() => {a({body: "vì cả mày và nó đều chó như nhau" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "Xã hội đổi màu" + " " + name, mentions: arraytag})} , 37000);
setTimeout(() => {a({body: "Làm người thì khó, làm chó thì dễ ..!!" + " " + name, mentions: arraytag})} , 38000);
setTimeout(() => {a({body: "Sống phải biết nghĩ" + " " + name, mentions: arraytag})} , 39000);
setTimeout(() => {a({body: "Cuộc sống phức tạp, xã hội bon chen !!" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: " Sống nghèo, sống khó chứ đừng sống CHÓ nha con" + " " + name, mentions: arraytag})} , 41000);
setTimeout(() => {a({body: "Cứ soi gương nhiều vào" + " " + name, mentions: arraytag})} , 42000);
setTimeout(() => {a({body: "Sống – Là phải biết điều" + " " + name, mentions: arraytag})} , 43000);
setTimeout(() => {a({body: " Đừng tỏ vẻ máu liều nhiều hơn máu não" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "Thích nổi và chơi trội tao sẽ cho mày lên ngôi…." + " " + name, mentions: arraytag})} , 45000);
setTimeout(() => {a({body: "Đú bẩn mà sấc mày thích thì cứ lên mâm trên mà ngồi!!!" + " " + name, mentions: arraytag})} , 46000);
setTimeout(() => {a({body: "Có điều mày lên nhớ rằng….." + " " + name, mentions: arraytag})} , 47000);
setTimeout(() => {a({body: "Giữa chó với người sẽ chẳng bao giờ có sự công bằng.," + " " + name, mentions: arraytag})} , 48000);

setTimeout(() => {a({body: "Dù có cố thể hiện hay là đang nguỵ biện thì ấn tượng mày chỉ là 1 tiếng ẳng !!" + " " + name, mentions: arraytag})} , 49000);
setTimeout(() => {a({body: "ĐỊT CON MẸ!!!" + " " + name, mentions: arraytag})} , 50000);
setTimeout(() => {a({body: "Đớp lời bọn tao như 1 con chó!!!" + " " + name, mentions: arraytag})} , 51000);
setTimeout(() => {a({body: "Con đéo nào cũng như con nào!!!" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "Hài!!!" + " " + name, mentions: arraytag})} , 53000);
setTimeout(() => {a({body: "Đụ má não cặc à" + " " + name, mentions: arraytag})} , 54000);
setTimeout(() => {a({body: "Lịch sự thì không có – Chỉ có cái máu chơi chó thì không ai sánh bằng" + " " + name, mentions: arraytag})} , 55000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 57000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 58000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 59000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 61000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 62000);
setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 63000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 64000);

setTimeout(() => {a({body: "thằng mặt cặc" + " " + name, mentions: arraytag})} , 65000);
setTimeout(() => {a({body: "thằng não lồn" + " " + name, mentions: arraytag})} , 66000);
setTimeout(() => {a({body: "Cái lồn" + " " + name, mentions: arraytag})} , 67000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name, mentions: arraytag})} , 68000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây đọc cho hết" + " " + name, mentions: arraytag})} , 69000);

setTimeout(() => {a({body: "Đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})} , 70000);
setTimeout(() => {a({body: "thằng óc cức" + " " + name, mentions: arraytag})} , 71000);
setTimeout(() => {a({body: "mẹ m đẻ m ra đau lồn chứ được con cặc gì" + " " + name, mentions: arraytag})} , 72000);
setTimeout(() => {a({body: "tinh trùng khuyết tật" + " " + name, mentions: arraytag})} , 73000);
setTimeout(() => {a({body: "hồi đó ba mày đéo dùng bao nên lòi ra thằng mặt cặc như mày đó" + " " + name, mentions: arraytag})} , 74000);
setTimeout(() => {a({body: "đụ đĩ mẹ mày" + " " + name, mentions: arraytag})} , 75000);
setTimeout(() => {a({body: "địt con mẹ mày" + " " + name, mentions: arraytag})} , 76000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 77000);
setTimeout(() => {a({body: "Địt mẹ m ra đọc nè" + " " + name, mentions: arraytag})} , 78000);
setTimeout(() => {a({body: "đĩ lồn" + " " + name, mentions: arraytag})} , 79000);
setTimeout(() => {a({body: "ĐỊT MẸEEEEEEEEE MÀY!!!" + " " + name, mentions: arraytag})} , 80000);
    }