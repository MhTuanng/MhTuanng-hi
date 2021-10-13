/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/


module.exports.config = {
    name: "fbuser",
    version: "2.0.0",
    hasPermssion: 1,
    credits: "ProCoderMew",
    description: "L\u1ECDc ng\u01B0\u1EDDi d\xF9ng Facebook",
    commandCategory: "group",
    usages: "",
    cooldowns: 300
}
module.exports.run = async function({ api: a, event: b }) {
    var { userInfo: c, adminIDs: d } = await a.getThreadInfo(b.threadID), f = 0, e = 0, g = [];
    for (const d of c) void 0 == d.gender && g.push(d.id);
    return d = d.map((a) => a.id).some((b) => b == a.getCurrentUserID()), 0 == g.length ? a.sendMessage("Trong nh\xF3m b\u1EA1n kh\xF4ng t\u1ED3n t\u1EA1i 'Ng\u01B0\u1EDDi d\xF9ng Facebook'.", b.threadID) : a.sendMessage("Nh\xF3m b\u1EA1n hi\u1EC7n c\xF3 " + g.length + " 'Ng\u01B0\u1EDDi d\xF9ng Facebook'.", b.threadID, function() {
        return d ? a.sendMessage("B\u1EAFt \u0111\u1EA7u l\u1ECDc..", b.threadID, async function() {
            for (const c of g) try {
                await new Promise((a) => setTimeout(a, 1e3)),
                await a.removeUserFromGroup(parseInt(c), b.threadID),
                f++
            } catch (a) {
                e++
            }
            a.sendMessage("\u0110\xE3 l\u1ECDc th\xE0nh c\xF4ng " + f + " ng\u01B0\u1EDDi.", b.threadID, function() {
                if (0 != e) return a.sendMessage("L\u1ECDc th\u1EA5t b\u1EA1i " + e + " ng\u01B0\u1EDDi.", b.threadID)
            })
        }) : a.sendMessage("Nh\u01B0ng bot kh\xF4ng ph\u1EA3i l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn n\xEAn kh\xF4ng th\u1EC3 l\u1ECDc \u0111\u01B0\u1EE3c.", b.threadID)
    })
};