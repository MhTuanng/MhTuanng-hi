/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "adduser",
	version: "2.4.1",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Thêm người dùng vào nhóm bằng link hoặc id",
	commandCategory: "group",
	usages: "[args]",
	cooldowns: 5
};

async function getUID(url, api) {
	const _0x1255 = ['\x68\x74\x74\x70\x47\x65\x74', '\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f', '\x68\x74\x74\x70\x3a\x2f\x2f', '\x20\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e', '\x6e\x61\x6d\x65', '\x4e\x68\u1ead\x70\x20\x31\x20\x55\x52\x4c', '\x32\x31\x37\x30\x35\x36\x5a\x75\x42\x64\x6e\x48', '\x35\x33\x6d\x69\x71\x53\x75\x72', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x31\x32\x39\x39\x33\x4f\x68\x5a\x70\x58\x6a', '\x74\x61\x62\x6c\x65', '\x69\x6e\x64\x65\x78\x4f\x66', '\x22\x72\x65\x64\x69\x72\x65\x63\x74\x22', '\x66\x62\x2e\x63\x6f\x6d', '\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75', '\x31\x62\x4b\x6d\x78\x56\x54', '\x69\x6e\x66\x6f', '\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75', '\x66\x6f\x72\x20\x28\x3b\x3b\x29\x3b\x7b', '\x7b\x22\x6e\x61\x6d\x65\x22\x3a\x20\x22', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x31\x5a\x67\x51\x66\x6c\x44', '\x6d\x61\x74\x63\x68', '\x31\x6d\x49\x6c\x5a\x4f\x66', '\x31\x63\x70\x73\x61\x57\x51', '\x72\x65\x70\x6c\x61\x63\x65', '\x38\x37\x30\x30\x34\x76\x52\x6d\x74\x76\x4e', '\x31\x37\x33\x34\x32\x32\x65\x6e\x4c\x76\x75\x44', '\x65\x78\x63\x65\x70\x74\x69\x6f\x6e', '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75', '\x65\x78\x65\x63', '\x31\x33\x37\x36\x37\x33\x75\x72\x41\x64\x76\x76', '\x63\x6f\x6e\x73\x6f\x6c\x65', '\x77\x61\x72\x6e', '\x61\x70\x70\x6c\x79', '\x73\x6c\x69\x63\x65', '\x34\x30\x34\x36\x31\x34\x49\x69\x4e\x44\x50\x53', '\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f', '\x65\x72\x72\x6f\x72', '\x31\x31\x37\x34\x37\x4c\x57\x56\x6a\x61\x71', '\x70\x61\x72\x73\x65', '\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f', '\x62\x69\x6e\x64']; (function (_0x363f9d, _0x179379) { function _0x2df602(_0x2cf281, _0x2ded75) { return _0x3c3b(_0x2cf281 - -0x1b, _0x2ded75); } while (!![]) { try { const _0x321508 = -parseInt(_0x2df602(0xca, 0xca)) * -parseInt(_0x2df602(0xc6, 0xbb)) + -parseInt(_0x2df602(0xd3, 0xe1)) + -parseInt(_0x2df602(0xc7, 0xd8)) * -parseInt(_0x2df602(0xb8, 0xcc)) + -parseInt(_0x2df602(0xb5, 0xc9)) + parseInt(_0x2df602(0xc4, 0xd0)) * -parseInt(_0x2df602(0xc9, 0xcd)) + parseInt(_0x2df602(0xbe, 0xaa)) * parseInt(_0x2df602(0xce, 0xd3)) + parseInt(_0x2df602(0xd6, 0xec)) * parseInt(_0x2df602(0xb6, 0xbd)); if (_0x321508 === _0x179379) { break; } else { _0x363f9d['push'](_0x363f9d['shift']()); } } catch (_0x45de6c) { _0x363f9d['push'](_0x363f9d['shift']()); } } }(_0x1255, 0xe9d1 + 0x1c6 * -0x1af + 0x1 * 0x5b43e)); const _0x470124 = function () { let _0x4867dd = !![]; return function (_0x58d00d, _0x2e7ded) { const _0x53dcfc = _0x4867dd ? function () { function _0x1b8043(_0x2cf237, _0x49decb) { return _0x3c3b(_0x49decb - 0x127, _0x2cf237); } if (_0x2e7ded) { const _0x5c1372 = _0x2e7ded[_0x1b8043(0x215, 0x213)](_0x58d00d, arguments); _0x2e7ded = null; return _0x5c1372; } } : function () { }; _0x4867dd = ![]; return _0x53dcfc; }; }(); function _0x794d4f(_0x196b7f, _0x4ffbdc) { return _0x3c3b(_0x196b7f - -0xbb, _0x4ffbdc); } const _0x3aed39 = _0x470124(this, function () { function _0x5e9726(_0x209ce1, _0x44b70b) { return _0x3c3b(_0x44b70b - -0x4e, _0x209ce1); } const _0x2af5ae = function () { function _0x532370(_0x527e59, _0x4428e5) { return _0x3c3b(_0x4428e5 - -0xf, _0x527e59); } let _0x591008; try { _0x591008 = Function(_0x532370(0xd8, 0xcc) + '\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20' + (_0x532370(0xe5, 0xd8) + _0x532370(0xc6, 0xc9) + '\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28' + '\x20\x29') + '\x29\x3b')(); } catch (_0x5cca5b) { _0x591008 = window; } return _0x591008; }; const _0x4c20e5 = _0x2af5ae(); const _0x48f58e = _0x4c20e5[_0x5e9726(0x97, 0x9c)] = _0x4c20e5['\x63\x6f\x6e\x73\x6f\x6c\x65'] || {}; const _0xf500cc = ['\x6c\x6f\x67', _0x5e9726(0xb3, 0x9d), _0x5e9726(0x88, 0x8c), _0x5e9726(0xa2, 0xa2), _0x5e9726(0xa4, 0x98), _0x5e9726(0x80, 0x86), '\x74\x72\x61\x63\x65']; for (let _0x391299 = 0x8d * -0x32 + -0xd * -0x12a + -0x2 * -0x634; _0x391299 < _0xf500cc['\x6c\x65\x6e\x67\x74\x68']; _0x391299++) { const _0xbd68d5 = _0x470124[_0x5e9726(0x8d, 0x7d) + '\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x5e9726(0xb9, 0xa7)](_0x470124); const _0x210f79 = _0xf500cc[_0x391299]; const _0x44482f = _0x48f58e[_0x210f79] || _0xbd68d5; _0xbd68d5[_0x5e9726(0xae, 0xa1)] = _0x470124[_0x5e9726(0xb1, 0xa7)](_0x470124); _0xbd68d5[_0x5e9726(0x8a, 0x90)] = _0x44482f[_0x5e9726(0x8e, 0x90)][_0x5e9726(0xab, 0xa7)](_0x44482f); _0x48f58e[_0x210f79] = _0xbd68d5; } }); _0x3aed39(); const regexName = new RegExp(/"title":"(.*?)"/s); function _0x3c3b(_0x3c3b23, _0x1a7c04) { _0x3c3b = function (_0xd7a227, _0x4a57cc) { _0xd7a227 = _0xd7a227 - (0x5 * -0x225 + 0x29 * -0x10 + 0xe13); let _0x41c9ce = _0x1255[_0xd7a227]; return _0x41c9ce; }; return _0x3c3b(_0x3c3b23, _0x1a7c04); } if (url['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x794d4f(0x38, 0x38) + '\x6f\x6d') || url[_0x794d4f(0x17, 0xc)](_0x794d4f(0x1c, 0x26))) { try { if (url[_0x794d4f(0x1a, 0x2a)](_0x794d4f(0x11, 0x1b)) === -(-0x207c + -0xda3 * 0x2 + -0x3bc3 * -0x1) && url[_0x794d4f(0x1a, 0x17)](_0x794d4f(0x39, 0x3b)) === -(0x22 + -0x5 * 0x224 + 0xa93 * 0x1)) url = _0x794d4f(0x39, 0x38) + url; let data = await api['\x68\x74\x74\x70\x47\x65\x74'](url); let regex = /for \(;;\);{"redirect":"(.*?)"}/[_0x794d4f(0x2d, 0x2b)](data); if (data[_0x794d4f(0x17, 0xe)](_0x794d4f(0x21, 0x2b) + _0x794d4f(0x1b, 0x7) + '\x3a\x22')) data = await api[_0x794d4f(0xf, 0x22)](regex[-0x18c7 + -0xfeb + -0x28b3 * -0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/\\/g, '')[_0x794d4f(0x28, 0x21)](/(?<=\?\s*)(.*)/, '')[_0x794d4f(0x32, 0x37)](0x1f * 0x92 + -0xfc4 + -0x7 * 0x46, -(-0x51 * -0x5d + 0x1 * 0x117a + -0x2ee6))); let regexid = /"userID":"(\d+)"/[_0x794d4f(0x2d, 0x41)](data); let name = JSON[_0x794d4f(0x37, 0x2e)](_0x794d4f(0x22, 0x27) + data[_0x794d4f(0x25, 0x3b)](regexName)[-0x3 * 0x8f3 + -0xe7 * 0x1d + -0x31 * -0x115] + '\x22\x7d')[_0x794d4f(0x13, 0xa)] || null; return [+regexid[-0x2 * 0xc1f + -0x592 + 0x1dd1], name, ![]]; } catch { return [null, null, !![]]; } } else { return [_0x794d4f(0x14, 0x23) + _0x794d4f(0x12, 0xc), null, !![]]; }
}

module.exports.run = async function ({ api, event, args, Threads, Users }) {
	const join = require("../events/joinNoti").run;
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));

	if (!args[0]) return out("Vui lòng nhập 1 id/link profile user cần add.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var [id, name, fail] = await getUID(args[0], api);
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("Không tìm thấy ID người dùng.")
			else {
				await adduser(id, name || "người dùng Facebook");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		var form = {
			type: 'event',
			threadID: threadID,
			logMessageType: 'log:subscribe',
			logMessageData: { addedParticipants: [{ userFbId: id, fullName: name || "người dùng Facebook" }] },
			author: api.getCurrentUserID()
		};
		if (participantIDs.includes(id)) return out(`${name ? name : "Thành viên"} đã có mặt trong nhóm.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`Không thể thêm ${name ? name : "người dùng"} vào nhóm.`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`Đã thêm ${name ? name : "thành viên"} vào danh sách phê duyệt !`);
			else return join({ api, event: form, Threads, Users });
		}
	}
}