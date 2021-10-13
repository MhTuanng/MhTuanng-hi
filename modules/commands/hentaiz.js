module.exports.config = {
    name: "hentaiz",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung",
    description: "NSFW",
    commandCategory: "nsfw",
    usages: "hentai [args]",
    cooldowns: 5
};

module.exports.run = ({ event, api, args }) => {
    const { readFileSync, createReadStream, createWriteStream, unlinkSync } = require("fs-extra");
    const request = require("request");

    let animeData = JSON.parse(readFileSync(__dirname + "/cache/hentai.json"));
    if (!animeData.hasOwnProperty(args[0])) {
        let list = [];
        Object.keys(animeData).forEach(endpoint => list.push(endpoint));
        return api.sendMessage(`==== Tag Hentai ====\n${list.join(", ")}`, event.threadID, event.messageID);
    }
    else return request(animeData[args[0]], (error, response, body) => {
        let picData = JSON.parse(body);
        let URL = "";
        (!picData.data) ? URL = picData.url : URL = picData.data.response.url;
        let ext = URL.substring(URL.lastIndexOf(".") + 1);
        request(URL)
        .pipe(createWriteStream(__dirname + `/cache/hentai.${ext}`))
        .on("close", () => api.sendMessage({ attachment: createReadStream(__dirname + `/cache/hentai.${ext}`) }, event.threadID, () => unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID));
    })
}