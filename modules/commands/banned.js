module.exports.config = {
  name: "banned",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Mirai Team",
  description: "Xem danh sách ban của nhóm hoặc của người dùng",
  commandCategory: "Hệ thống admin-bot",
  usages: "[thread/user]",
  cooldowns: 5
};
module.exports.handleReply = async function({ api, args, Users, handleReply, event, Threads }) {

  const { threadID, messageID } = event;
  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;
  var myString = handleReply.listBanned[event.body - 1];
  var uidx = myString.replace(/\D/g, '');
  var uid = uidx.slice(1);

  switch (handleReply.type) {

    case "unbanthread":
      {
        const data = (await Threads.getData(uid)).data || {};
        data.banned = 0;
        await Threads.setData(uid, { data });
        global.data.threadBanned.delete(uid, 1);
        return api.sendMessage(`[${myString}] unbanSuccess!`, threadID);
        break;
      }

    case 'unbanuser':
      {
        const data = (await Users.getData(uid)).data || {};
        data.banned = false;
        data.reason = null;
        data.dateAdded = null;
        await Users.setData(uid, { data });
        global.data.userBanned.delete(uid);
        api.sendMessage(`${myString} unbanSuccess`, threadID);
        break;
      }
  }
};

module.exports.run = async function({ event, api, Users, args }) {
  const { threadID, messageID } = event;
  var listBanned = [],
    i = 1;

  switch (args[0]) {
    case "-t":
    case "t":
    case "thread":
      {
        const threadBanned = global.data.threadBanned.keys();
        for (const singleThread of threadBanned) listBanned.push(`${i++}/ ${singleThread}`);

        return api.sendMessage(listBanned.length != 0 ? api.sendMessage(`❎Hiện tại đang có ${listBanned.length} nhóm bị ban\n${listBanned.join("\n")}` +
          "\nReply tin nhắn này + số thứ tự để unban thread tương ứng",
          threadID, (error, info) => {
            client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              type: 'unbanthread',
              listBanned
            });
          },
          messageID
        ) : "Hiện tại không có nhóm nào bị ban!", threadID, messageID);
      }

    case "u":
    case "-u":
    case "user":
      {
        const userBanned = global.data.userBanned.keys();
        for (const singleUser of userBanned) {
          const name = global.data.userName.get(singleUser) || await Users.getNameUser(singleUser);
          listBanned.push(`${i++}/ ${name}: ${singleUser}`);
        }
        return api.sendMessage(listBanned.length != 0 ? api.sendMessage(`❎Hiện tại đang có ${listBanned.length} người dùng bị ban\n${listBanned.join("\n")}` +
          "\nReply tin nhắn này + số thứ tự để unban user tương ứng",
          threadID, (error, info) => {
            client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              type: 'unbanuser',
              listBanned
            });
          },
          messageID
        ) : "Hiện tại không có người dùng bị ban", threadID, messageID);
      }

    default:
      {
        return global.utils.throwError(this.config.name, threadID, messageID);
      }

  }
}