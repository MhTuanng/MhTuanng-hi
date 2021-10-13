module.exports.config = {
	name: "coinflip", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "BerVer", // Công nhận module sở hữu là ai
	description: "Lật đồng xu", // Thông tin chi tiết về lệnh
	commandCategory: "General", // Thuộc vào nhóm nào
	usages: "coinflip", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	//Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key
	// example: Ví dụ ¯\_(ツ)_/¯ 
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
return (Math.random() > 0.5) ? api.sendMessage("Mặt úp", event.threadID, event.messageID) : api.sendMessage("Mặt ngửa", event.threadID, event.messageID);

}