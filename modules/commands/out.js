module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhIT",
  description: "Out Thread",
  commandCategory: "Hệ thống admin-bot",
  usages: "out [ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function({ api, Users, Threads, event, args }) {

  if (!args[0]) return api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID);
  var idbox = args[0];
  var reason = args.slice(1);

  api.sendMessage("Đã nhận lệnh out nhóm từ admin, lý do: " + reason.join(" "), idbox, () =>

    api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
    api.sendMessage("Đã out box có id: " + idbox + " với lý do: " + reason.join(" "), event.threadID)))

}