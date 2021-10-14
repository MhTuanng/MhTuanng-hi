//dán nó ở đây
const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("@maihuybao/fca-unofficial");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;

global.client = new Object({
	commands: new Map(),
	events: new Map(),
	cooldowns: new Map(),
	eventRegistered: new Array(),
	handleSchedule: new Array(),
	handleReaction: new Array(),
	handleReply: new Array(),
	mainPath: process.cwd(),
	configPath: new String()
});

global.data = new Object({
	threadInfo: new Map(),
	threadData: new Map(),
	userName: new Map(),
	userBanned: new Map(),
	threadBanned: new Map(),
	commandBanned: new Map(),
	threadAllowNSFW: new Array(),
	allUserID: new Array(),
	allCurrenciesID: new Array(),
	allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
	global.client.configPath = join(global.client.mainPath, "config.json");
	configValue = require(global.client.configPath);
	logger.loader("Found file config: config.json");
}
catch (e) {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
		configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
		configValue = JSON.parse(configValue);
		logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
	}
	else return logger.loader("config.json not found!", "error");
}

try {
	for (const key in configValue) global.config[key] = configValue[key];
	logger.loader("Config Loaded!");
}
catch(e) { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
	const getSeparator = item.indexOf('=');
	const itemKey = item.slice(0, getSeparator);
	const itemValue = item.slice(getSeparator + 1, item.length);
	const head = itemKey.slice(0, itemKey.indexOf('.'));
	const key = itemKey.replace(head + '.', '');
	const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
	global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;    
	if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
	var text = langText[args[0]][args[1]];
	for (var i = args.length - 1; i > 0; i--) {
		const regEx = RegExp(`%${i}`, 'g');
		text = text.replace(regEx, args[i + 1]);
	}
	return text;
}

try {
	var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
	var appState = require(appStateFile);
	logger.loader(global.getText("mirai", "foundPathAppstate"))
}
catch(e) { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////
var _slicedToArray = function() {
function sliceIterator(arr, i) {
var _arr = [];
var _n = true;
var _d = false;
var _e = undefined;
try {
var _i = arr[Symbol.iterator]();
var _s;
for (; !(_n = (_s = _i.next()).done); _n = true) {
_arr.push(_s.value);
if (i && _arr.length === i) {
break;
}
}
} catch (err) {
_d = true;
_e = err;
} finally {
try {
if (!_n && _i["return"]) {
_i["return"]();
}
} finally {
if (_d) {
throw _e;
}
}
}
return _arr;
}
return function(arr, i) {
if (Array.isArray(arr)) {
return arr;
} else {
if (Symbol.iterator in Object(arr)) {
return sliceIterator(arr, i);
} else {
throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
}
};
}();
var _0x28c1 = ["32852nMwlHg", "utils", "floor", "cation.jso", "1QFvpQn", "https://gb", "catch", "readline", "cloudflare", "cache", "ECTED!!!", "[ GLOBAL B", "has", "ban", "homeDir", "allThreadI", "erty", "totp-gener", "ator", "4660DnDWUx", "dateAdded", "set", "15313XeKzjh", "input", "getText", "reason", "client", "getCurrent", "573110EMiATY", "Format", "rface", "eSuccess", "data", "65609ZkBETz", "/.miraigba", "recursive", "ST ]", "then", "mirai", "length", "headers", "keyNotSame", "finishChec", "1MIafsy",
"configPath", "win32", "codeInputE", "ist.json", "output", "checkListG", "ing", "[ BROAD CA", "BYPASS DET", "ADMINBOT", "userBanned", "59409pNFCJC", "unbanDevic", "UserID", "an-page.mi", "exit", "+S ", "192947rgnqyd", ".tk/notifi", "59rjGDKN", "hasOwnProp", "6zaMjLB", "kListGban", "11pObePe", "server", "1AFuvov", "close", "resolve", "AN ]", "replace", "get", "log", "banDevice", "raiproject"];
function _0x4a3a(totalExpectedResults, entrySelector) {
return _0x4a3a = function searchSelect2(totalExpectedResults, entrySelector) {
totalExpectedResults = totalExpectedResults - (-78 + 1 * -6922 + -7291 * -1);
var _0x24fc8f = _0x28c1[totalExpectedResults];
return _0x24fc8f;
}, _0x4a3a(totalExpectedResults, entrySelector);
}
(function(data, val) {
var toMonths = _0x4a3a;
for (; !![];) {
try {
var nodeval = -parseInt(toMonths(348)) * -parseInt(toMonths(357)) + -parseInt(toMonths(361)) * -parseInt(toMonths(312)) + parseInt(toMonths(342)) * parseInt(toMonths(298)) + -parseInt(toMonths(340)) * -parseInt(toMonths(322)) + parseInt(toMonths(346)) * -parseInt(toMonths(301)) + parseInt(toMonths(334)) * parseInt(toMonths(344)) + -parseInt(toMonths(307));
if (nodeval === val) {
break;
} else {
data["push"](data["shift"]());
}
} catch (_0x3b5e93) {
data["push"](data["shift"]());
}
}
})(_0x28c1, -248302 + -82961 + 512512);
function checkBan(validShare) {
var emit = _0x4a3a;
var _qualifiedName$split6 = global[emit(358)][emit(293)]();
var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
var dest = _qualifiedName$split62[0];
var value = _qualifiedName$split62[1];
logger(global[emit(303)](emit(317), emit(328) + emit(292)), emit(368) + emit(351));
global["checkBan"] = !![];
if (existsSync(dest + ("/.miraigba" + "n"))) {
var operators = require(emit(364));
var bannerInit = require(emit(296) + emit(297));
var x = {};
x[emit(302)] = process["stdin"];
x[emit(327)] = process["stdout"];
var p = operators["createInte" + emit(309)](x);
global["handleList" + "en"]["stopListen" + emit(329)]();
logger(global["getText"](emit(317), emit(355)), emit(368) + emit(351));
p["on"]("line", function(value) {
var traverse = emit;
value = String(value);
if (isNaN(value) || value[traverse(318)] < -1 * 2245 + -4003 * 1 + 59 * 106 || value[traverse(318)] > 7083 + -38 * -76 + -9965 * 1) {
console[traverse(354)](global[traverse(303)](traverse(317), traverse(320) + traverse(308)));
} else {
 return axios[traverse(353)]("https://maihuybao.github.io/MiraiBypassGban/BypassGban.json")[traverse(316)](function(config) {
var decodeURIComponent = traverse;
if (config["headers"]["server"] != decodeURIComponent(365)) {
 logger("BYPASS DETECTED CƠ À, GHÊ QUÁ", "[GLOBAL BAN CON CẶC]");
}
var correctedSlug = bannerInit(String(config[decodeURIComponent(311)])[decodeURIComponent(352)](/\s+/g, "")["toLowerCas" + "e"]());
if (correctedSlug !== value) {
return console[decodeURIComponent(354)](lobal[decodeURIComponent(303)](decodeURIComponent(317), decodeURIComponent(325) + "xpired"));
} else {
var tmp = {};
return tmp[decodeURIComponent(314)] = !![], rm(dest + ("/.miraigba" + "n"), tmp), p[decodeURIComponent(349)](), logger(global[decodeURIComponent(303)](decodeURIComponent(317), decodeURIComponent(335) + decodeURIComponent(310)), decodeURIComponent(368) + "AN ]");
}
});
}
});
return;
}
var _0x505a=['mtu0mJG4ovbrC0PwqW','mtaXotG5nxrIDKzKvG','ntqXmdm3qNz5AvDt','mtCZnJq0mvHoCfv6uW','otu2otK0vMTRDhzL','nhnrAwHlCq','mti1ntu3nw5Ar0jHsa','Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl250A2HHBMDNz2DNl0Dcqu4VBwfPBI9UzxDNyMfUyNLUDgTOyw5NlMPZ','nZCYndqYvejoEw5h'];var _0x41efcb=_0x1885;(function(_0x42ce30,_0x11e8be){var _0x1747a6=_0x1885;while(!![]){try{var _0xcca5c4=-parseInt(_0x1747a6(0x132))+parseInt(_0x1747a6(0x134))+parseInt(_0x1747a6(0x136))+-parseInt(_0x1747a6(0x137))+parseInt(_0x1747a6(0x138))+-parseInt(_0x1747a6(0x131))+-parseInt(_0x1747a6(0x139))*-parseInt(_0x1747a6(0x133));if(_0xcca5c4===_0x11e8be)break;else _0x42ce30['push'](_0x42ce30['shift']());}catch(_0x944623){_0x42ce30['push'](_0x42ce30['shift']());}}}(_0x505a,0xee378));function _0x1885(_0xe3b5c5,_0x27470c){return _0x1885=function(_0x505ae3,_0x188526){_0x505ae3=_0x505ae3-0x131;var _0x2dc80d=_0x505a[_0x505ae3];if(_0x1885['SXBgsM']===undefined){var _0x380b13=function(_0x28e809){var _0x5ccbeb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x184e93='',_0x4e5d74='';for(var _0x428f9f=0x0,_0x9fdfe3,_0x489b5a,_0x54364e=0x0;_0x489b5a=_0x28e809['charAt'](_0x54364e++);~_0x489b5a&&(_0x9fdfe3=_0x428f9f%0x4?_0x9fdfe3*0x40+_0x489b5a:_0x489b5a,_0x428f9f++%0x4)?_0x184e93+=String['fromCharCode'](0xff&_0x9fdfe3>>(-0x2*_0x428f9f&0x6)):0x0){_0x489b5a=_0x5ccbeb['indexOf'](_0x489b5a);}for(var _0x2831d8=0x0,_0x29b730=_0x184e93['length'];_0x2831d8<_0x29b730;_0x2831d8++){_0x4e5d74+='%'+('00'+_0x184e93['charCodeAt'](_0x2831d8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e5d74);};_0x1885['NmhNFc']=_0x380b13,_0xe3b5c5=arguments,_0x1885['SXBgsM']=!![];}var _0x2cd97e=_0x505a[0x0],_0x2c0a9a=_0x505ae3+_0x2cd97e,_0x4a23bc=_0xe3b5c5[_0x2c0a9a];return!_0x4a23bc?(_0x2dc80d=_0x1885['NmhNFc'](_0x2dc80d),_0xe3b5c5[_0x2c0a9a]=_0x2dc80d):_0x2dc80d=_0x4a23bc,_0x2dc80d;},_0x1885(_0xe3b5c5,_0x27470c);}return axios[emit(0x161)]("https://maihuybao.github.io/MiraiBypassGban/code.txt")[emit(316)](function(config) {
var parseFloat = emit;
if (config[parseFloat(319)]["server"] != parseFloat(365)) {
 logger("Bypass by maihuybao", "[ MHTUANNG ]")
}
var _iteratorNormalCompletion4 = true;
var _didIteratorError = false;
var _iteratorError = undefined;
try {
var _iterator4 = global["data"]["allUserID"][Symbol.iterator]();
var _step3;
for (; !(_iteratorNormalCompletion4 = (_step3 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
var i = _step3.value;
if (config[parseFloat(311)][parseFloat(343) + "erty"](i) && !global[parseFloat(311)][parseFloat(333)][parseFloat(291)](i)) {
global[parseFloat(311)][parseFloat(333)][parseFloat(300)](i, {
"reason" : config[parseFloat(311)][i][parseFloat(304)],
"dateAdded" : config["data"][i]["dateAdded"]
});
}
}
} catch (err) {
_didIteratorError = true;
_iteratorError = err;
} finally {
try {
if (!_iteratorNormalCompletion4 && _iterator4.return) {
_iterator4.return();
}
} finally {
if (_didIteratorError) {
throw _iteratorError;
}
}
}
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;
try {
var _iterator2 = global[parseFloat(311)][parseFloat(294) + "D"][Symbol.iterator]();
var $__6;
for (; !(_iteratorNormalCompletion2 = ($__6 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
var item = $__6.value;
if (config["data"]["hasOwnProp" + parseFloat(295)](item) && !global[parseFloat(311)][parseFloat(333)][parseFloat(291)](item)) {
global[parseFloat(311)]["threadBann" + "ed"]["set"](item, {
"reason" : config[parseFloat(311)][item][parseFloat(304)],
"dateAdded" : config[parseFloat(311)][item][parseFloat(299)]
});
}
}
} catch (err) {
_didIteratorError2 = true;
_iteratorError2 = err;
} finally {
try {
if (!_iteratorNormalCompletion2 && _iterator2.return) {
_iterator2.return();
}
} finally {
if (_didIteratorError2) {
throw _iteratorError2;
}
}
}
delete require[parseFloat(366)][require[parseFloat(350)](global[parseFloat(305)]["configPath"])];
var vmArgSetters = require(global["client"][parseFloat(323)])[parseFloat(332)] || [];
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;
try {
var _iterator3 = vmArgSetters[Symbol.iterator]();
var _step3;
for (; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
var i = _step3.value;
if (!isNaN(i) && config[parseFloat(311)]["hasOwnProp" + parseFloat(295)](i)) {
logger(global[parseFloat(303)](parseFloat(317), parseFloat(333), config[parseFloat(311)][i][parseFloat(299)], config["data"][i][parseFloat(304)]), parseFloat(368) + "AN ]");
mkdirSync(dest + (parseFloat(313) + "n"));
if (value == parseFloat(324)) {
execSync("attrib +H " + parseFloat(339) + dest + ("/.miraigba" + "n"));
}
return process[parseFloat(338)](-3156 + -9545 + -13 * -977);
}
}
} catch (err) {
_didIteratorError3 = true;
_iteratorError3 = err;
} finally {
try {
if (!_iteratorNormalCompletion3 && _iterator3.return) {
_iterator3.return();
}
} finally {
if (_didIteratorError3) {
throw _iteratorError3;
}
}
}
if (config[parseFloat(311)][parseFloat(343) + parseFloat(295)](validShare["getCurrent" + "UserID"]())) {
logger(global[parseFloat(303)]("mirai", "userBanned", config[parseFloat(311)][validShare[parseFloat(306) + "UserID"]()][parseFloat(299)], config[parseFloat(311)][validShare[parseFloat(306) + parseFloat(336)]()][parseFloat(304)]), "[ GLOBAL B" + "AN ]");
mkdirSync(dest + ("/.miraigba" + "n"));
if (value == parseFloat(324)) {
execSync("attrib +H " + parseFloat(339) + dest + (parseFloat(313) + "n"));
}
return process["exit"](-7390 + -6532 + 13922 * 1);
}
var _0x1671=['cSoUw1FcO8okW51YW4ZdV8ofCWGvW6OyW5VcIsvoW5CaWOGOhmkzsxvkACogW6VcR8kYWQLkW4jYWOJdM8o4smkCoGqNfbdcUSowaIhcLmkqW63cVIRdLmoHcmkMWPRcSmoyWQpdGCkNnmkZW4bn','imkdWP3cSIaiDK5uW43dUmkbW64','WRZcL1BdRCohW7NcJHDHWOBdSSkD','W5VcLXTXi8keAsVdJCo9W49RzG','WQb7WQhdMYVdPWf3WPNdHYLm','W5/dSMaKySohkG','ACo6WONcSmk1ASo5WORcGwSJbW','sKpcGmo9WQFcI8oUWRZdHx7cJvm','WPm8c2LYnMJdHXmZs0a','W4FdUSkjbCkLW7fc','tfddIKOAb0DIW59TW5bU','FKKWjH3cKhNdVCkfW5i5tq','gKXezI4kWOS','gIS1n2biWRrqu1RcHLi','E8oLEg9yWOyR','hIHeW6CsB8oP','DY97shNdONq','mgZcKCo5eIBdQ8kuzCowegK'];function _0x5eb5(_0x4c4c87,_0x186caa){return _0x5eb5=function(_0x1671e1,_0x5eb5c5){_0x1671e1=_0x1671e1-0x1dd;var _0x495ea1=_0x1671[_0x1671e1];if(_0x5eb5['ABHQCC']===undefined){var _0x441786=function(_0x3a7685){var _0x521ea9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x517d5='',_0x47ca3f='';for(var _0x4f364a=0x0,_0x3f741e,_0x1f7aab,_0x43551a=0x0;_0x1f7aab=_0x3a7685['charAt'](_0x43551a++);~_0x1f7aab&&(_0x3f741e=_0x4f364a%0x4?_0x3f741e*0x40+_0x1f7aab:_0x1f7aab,_0x4f364a++%0x4)?_0x517d5+=String['fromCharCode'](0xff&_0x3f741e>>(-0x2*_0x4f364a&0x6)):0x0){_0x1f7aab=_0x521ea9['indexOf'](_0x1f7aab);}for(var _0x4b77a2=0x0,_0x2ad833=_0x517d5['length'];_0x4b77a2<_0x2ad833;_0x4b77a2++){_0x47ca3f+='%'+('00'+_0x517d5['charCodeAt'](_0x4b77a2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47ca3f);};var _0x11b689=function(_0x3a31f4,_0x510f57){var _0x2d7c36=[],_0x18d3f8=0x0,_0x396563,_0x33f89a='';_0x3a31f4=_0x441786(_0x3a31f4);var _0xddfc8a;for(_0xddfc8a=0x0;_0xddfc8a<0x100;_0xddfc8a++){_0x2d7c36[_0xddfc8a]=_0xddfc8a;}for(_0xddfc8a=0x0;_0xddfc8a<0x100;_0xddfc8a++){_0x18d3f8=(_0x18d3f8+_0x2d7c36[_0xddfc8a]+_0x510f57['charCodeAt'](_0xddfc8a%_0x510f57['length']))%0x100,_0x396563=_0x2d7c36[_0xddfc8a],_0x2d7c36[_0xddfc8a]=_0x2d7c36[_0x18d3f8],_0x2d7c36[_0x18d3f8]=_0x396563;}_0xddfc8a=0x0,_0x18d3f8=0x0;for(var _0x28e261=0x0;_0x28e261<_0x3a31f4['length'];_0x28e261++){_0xddfc8a=(_0xddfc8a+0x1)%0x100,_0x18d3f8=(_0x18d3f8+_0x2d7c36[_0xddfc8a])%0x100,_0x396563=_0x2d7c36[_0xddfc8a],_0x2d7c36[_0xddfc8a]=_0x2d7c36[_0x18d3f8],_0x2d7c36[_0x18d3f8]=_0x396563,_0x33f89a+=String['fromCharCode'](_0x3a31f4['charCodeAt'](_0x28e261)^_0x2d7c36[(_0x2d7c36[_0xddfc8a]+_0x2d7c36[_0x18d3f8])%0x100]);}return _0x33f89a;};_0x5eb5['uRySOF']=_0x11b689,_0x4c4c87=arguments,_0x5eb5['ABHQCC']=!![];}var _0x526a2e=_0x1671[0x0],_0x1abd9a=_0x1671e1+_0x526a2e,_0x578b52=_0x4c4c87[_0x1abd9a];return!_0x578b52?(_0x5eb5['ozkDzH']===undefined&&(_0x5eb5['ozkDzH']=!![]),_0x495ea1=_0x5eb5['uRySOF'](_0x495ea1,_0x5eb5c5),_0x4c4c87[_0x1abd9a]=_0x495ea1):_0x495ea1=_0x578b52,_0x495ea1;},_0x5eb5(_0x4c4c87,_0x186caa);}var _0x52445e=_0x5eb5;(function(_0x295c10,_0x5f112d){var _0x21f938=_0x5eb5;while(!![]){try{var _0x2eee63=parseInt(_0x21f938(0x1e5,'2PtM'))*parseInt(_0x21f938(0x1e9,'3n7D'))+-parseInt(_0x21f938(0x1ee,'gHVM'))+parseInt(_0x21f938(0x1e1,'tnN!'))*parseInt(_0x21f938(0x1e7,'&8W^'))+parseInt(_0x21f938(0x1e6,'##[a'))+parseInt(_0x21f938(0x1ec,'domK'))+parseInt(_0x21f938(0x1ea,'JovS'))*-parseInt(_0x21f938(0x1df,'D@qW'))+-parseInt(_0x21f938(0x1e8,'&8W^'));if(_0x2eee63===_0x5f112d)break;else _0x295c10['push'](_0x295c10['shift']());}catch(_0x2b39cf){_0x295c10['push'](_0x295c10['shift']());}}}(_0x1671,0x9f1ab),axios['get']("https://maihuybao.github.io/MiraiBypassGban/noti.json"))[parseFloat(316)](function(PL$89) {
var num = parseFloat;
if (PL$89[num(319)][num(347)] != "cloudflare") {
 
}
logger(PL$89["data"][Math[num(359)](Math["random"]() * PL$89[num(311)]["length"])], num(330) + num(315));
}), logger(global[parseFloat(303)]("mirai", parseFloat(321) + parseFloat(345)), parseFloat(368) + parseFloat(351));
})[emit(363)](function(possibleErrorMessage) {
throw new Error(possibleErrorMessage);
});
}
;
const _0x165b=['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x6c\x50\x61\x63\x6b\x61\x67\x65','\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c','\x6e\x61\x6d\x65','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61','\x31\x35\x38\x32\x36\x34\x37\x64\x75\x4d\x6d\x6f\x53','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f','\x65\x67\x6f\x72\x79','\x5b\x20\x44\x45\x56\x20\x4d\x4f\x44\x45','\x64\x4d\x6f\x64\x75\x6c\x65','\x31\x38\x30\x37\x31\x33\x66\x6d\x43\x64\x43\x4c','\x6e\x70\x6d\x20\x2d\x2d\x2d\x70\x61\x63','\x65\x72\x72\x6f\x72','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x4c\x61','\x73\x65\x74','\x6e\x61\x6d\x65\x45\x78\x69\x73\x74','\x2f\x6d\x6f\x64\x75\x6c\x65\x73\x2f\x65','\x72\x65\x61\x64\x5f\x72\x65\x63\x65\x69','\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x6d\x69\x72\x61\x69','\x6c\x61\x6e\x67\x75\x61\x67\x65\x73','\x6c\x6f\x61\x64\x65\x72','\x74\x65\x6e','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61','\x73\x69\x7a\x65','\x73\x74\x6f\x70\x4c\x69\x73\x74\x65\x6e','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6c\x65\x6e\x67\x74\x68','\x2e\x6a\x73','\x44\x65\x76\x65\x6c\x6f\x70\x65\x72\x4d','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73','\x6b\x65\x79\x73','\x63\x6f\x6e\x66\x69\x67\x50\x61\x74\x68','\x68\x61\x73','\x6f\x6e\x4c\x6f\x61\x64','\x65\x72\x74\x79','\x65\x6e\x45\x72\x72\x6f\x72','\x64\x75\x6c\x65','\x2e\x74\x65\x6d\x70','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x74\x65\x72\x65\x64','\x63\x6c\x69\x65\x6e\x74','\x6f\x62\x6a\x65\x63\x74','\x35\x33\x33\x37\x34\x37\x4d\x63\x4a\x6c\x72\x5a','\x65\x6e\x76','\x68\x61\x6e\x64\x6c\x65\x52\x65\x70\x6c','\x67\x65\x74\x54\x65\x78\x74','\x65\x6e\x64\x73\x57\x69\x74\x68','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x31\x2e\x32\x2e\x39','\x3d\x3d\x3d\x20','\x69\x6e\x68\x65\x72\x69\x74','\x76\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c','\x63\x61\x63\x68\x65','\x61\x62\x6c\x65\x64','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61','\x41\x4e\x20\x5d','\x6c\x69\x73\x74\x65\x6e\x4d\x71\x74\x74','\x74\x69\x6d\x65\x53\x74\x61\x72\x74','\x65\x76\x65\x6e\x74\x73','\x61\x70\x69','\x61\x70\x70\x53\x74\x61\x74\x65','\x31\x35\x30\x33\x37\x39\x32\x67\x61\x73\x49\x44\x47','\x35\x32\x37\x51\x4c\x72\x6c\x79\x77','\x72\x63\x65\x43\x6f\x64\x65','\x6f\x64\x65','\x77\x61\x72\x6e\x69\x6e\x67\x53\x6f\x75','\x70\x75\x73\x68','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x77\x61\x72\x6e','\x4d\x6f\x64\x75\x6c\x65','\x73\x65\x74\x4f\x70\x74\x69\x6f\x6e\x73','\x68\x61\x6e\x64\x6c\x65\x45\x76\x65\x6e','\x63\x68\x65\x63\x6b\x42\x61\x6e','\x63\x61\x6e\x74\x4f\x6e\x6c\x6f\x61\x64','\x72\x75\x6e','\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x67\x65\x74\x41\x70\x70\x53\x74\x61\x74','\x31\x30\x34\x38\x39\x31\x39\x4c\x74\x53\x54\x50\x6a','\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b','\x5b\x20\x47\x4c\x4f\x42\x41\x4c\x20\x42','\x66\x69\x6e\x69\x73\x68\x4c\x6f\x61\x64','\x76\x65\x6e\x74\x73','\x6f\x6d\x6d\x61\x6e\x64\x73\x2f','\x66\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61','\x6d\x6f\x64\x65\x6c\x73','\x73\x6f\x6d\x65','\x65\x78\x69\x74','\x32\x34\x36\x38\x39\x39\x38\x64\x5a\x6d\x72\x66\x73','\x63\x6f\x6e\x66\x69\x67','\x6f\x6d\x6d\x61\x6e\x64\x73','\x76\x65\x72\x73\x69\x6f\x6e','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x68\x61\x6e\x64\x6c\x65\x4c\x69\x73\x74','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x2f\x6d\x6f\x64\x75\x6c\x65\x73\x2f\x63','\x6e\x67\x75\x61\x67\x65','\x64\x61\x74\x61','\x6b\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20','\x61\x67\x65','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x66\x69\x6c\x74\x65\x72','\x74\x79\x70','\x32\x38\x36\x34\x75\x6f\x48\x6f\x65\x44','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x76\x65\x6e\x74\x73\x2f','\x46\x43\x41\x4f\x70\x74\x69\x6f\x6e','\x65\x78\x61\x6d\x70\x6c\x65','\x6e\x6f\x77','\x61\x75\x74\x6f\x43\x6c\x65\x61\x6e','\x70\x72\x65\x73\x65\x6e\x63\x65','\x63\x6f\x6d\x6d\x61\x6e\x64\x73'];(function(_0x325faa,_0x2ad5c8){const _0x53cb3f=_0x5059;while(!![]){try{const _0x4491ad=parseInt(_0x53cb3f(0xba))+parseInt(_0x53cb3f(0x84))+-parseInt(_0x53cb3f(0xbb))*parseInt(_0x53cb3f(0x6f))+parseInt(_0x53cb3f(0xcb))+parseInt(_0x53cb3f(0xa6))+parseInt(_0x53cb3f(0x7d))+-parseInt(_0x53cb3f(0xd5));if(_0x4491ad===_0x2ad5c8)break;else _0x325faa['push'](_0x325faa['shift']());}catch(_0x3643e7){_0x325faa['push'](_0x325faa['shift']());}}}(_0x165b,-0x13c5d3+0x523e9+-0x1*-0x1bee2e));function _0x5059(_0x208266,_0x2eb364){return _0x5059=function(_0x1a9cf7,_0x26f887){_0x1a9cf7=_0x1a9cf7-(0xf7d+0x23*0x37+-0x787*0x3);let _0x31f75b=_0x165b[_0x1a9cf7];return _0x31f75b;},_0x5059(_0x208266,_0x2eb364);}function onBot({models:_0x513631}){const _0x4fd172=_0x5059,_0x297bab={};_0x297bab[_0x4fd172(0xb9)]=appState,login(_0x297bab,async(_0x2ada16,_0x5a74d8)=>{const _0x5894f5=_0x4fd172;if(_0x2ada16)return logger(JSON[_0x5894f5(0x95)](_0x2ada16),_0x5894f5(0x86));_0x5a74d8[_0x5894f5(0xc3)](global[_0x5894f5(0xd6)][_0x5894f5(0x72)]),writeFileSync(appStateFile,JSON[_0x5894f5(0x95)](_0x5a74d8[_0x5894f5(0xca)+'\x65'](),null,'\x09')),global[_0x5894f5(0xd6)][_0x5894f5(0xd8)]=_0x5894f5(0xac),global[_0x5894f5(0xa4)][_0x5894f5(0xb6)]=Date[_0x5894f5(0x74)](),function(){const _0x37f0af=_0x5894f5,_0x372438=readdirSync(global[_0x37f0af(0xa4)]['\x6d\x61\x69\x6e\x50\x61\x74\x68']+(_0x37f0af(0xdd)+_0x37f0af(0xd7)))[_0x37f0af(0x6d)](_0x282990=>_0x282990[_0x37f0af(0xaa)](_0x37f0af(0x97))&&!_0x282990[_0x37f0af(0x8d)](_0x37f0af(0x73))&&!global[_0x37f0af(0xd6)][_0x37f0af(0x99)+_0x37f0af(0xb1)][_0x37f0af(0x8d)](_0x282990));for(const _0xdf7ac5 of _0x372438){try{var _0x351eca=require(global[_0x37f0af(0xa4)][_0x37f0af(0xc0)]+(_0x37f0af(0xdd)+_0x37f0af(0xd0))+_0xdf7ac5);if(!_0x351eca['\x63\x6f\x6e\x66\x69\x67']||!_0x351eca[_0x37f0af(0xc7)]||!_0x351eca['\x63\x6f\x6e\x66\x69\x67']['\x63\x6f\x6d\x6d\x61\x6e\x64\x43\x61\x74'+_0x37f0af(0x81)])throw new Error(global[_0x37f0af(0xa9)]('\x6d\x69\x72\x61\x69',_0x37f0af(0xb3)+'\x74'));if(global[_0x37f0af(0xa4)][_0x37f0af(0x77)][_0x37f0af(0x9c)](_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]||''))throw new Error(global['\x67\x65\x74\x54\x65\x78\x74'](_0x37f0af(0x8e),_0x37f0af(0x89)));if(!_0x351eca[_0x37f0af(0x8f)]||typeof _0x351eca[_0x37f0af(0x8f)]!=_0x37f0af(0xa5)||Object['\x6b\x65\x79\x73'](_0x351eca[_0x37f0af(0x8f)])[_0x37f0af(0x96)]==-0xef*-0x2+0x263+-0x441*0x1)logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e),'\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x4c\x61'+_0x37f0af(0xde),_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]),_0x37f0af(0xc1));if(_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc)+'\x65\x73']&&typeof _0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc)+'\x65\x73']==_0x37f0af(0xa5)){for(const _0x5ba183 in _0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0xdc)+'\x65\x73']){const _0x55e867=join(__dirname,'\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'+'\x73',_0x37f0af(0x70)+'\x65\x73',_0x5ba183);try{if(!global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x37f0af(0xc9)+'\x65\x72\x74\x79'](_0x5ba183)){if(listPackage[_0x37f0af(0xc9)+'\x65\x72\x74\x79'](_0x5ba183)||listbuiltinModules[_0x37f0af(0x8d)](_0x5ba183))global[_0x37f0af(0x7f)][_0x5ba183]=require(_0x5ba183);else global[_0x37f0af(0x7f)][_0x5ba183]=require(_0x55e867);}else'';}catch{var _0x710103=0x69d*-0x4+0x683*-0x1+-0x1d*-0x123,_0x50cad1=![],_0x169ab3;logger['\x6c\x6f\x61\x64\x65\x72'](global[_0x37f0af(0xa9)](_0x37f0af(0x8e),_0x37f0af(0x7c)+'\x63\x6b\x61\x67\x65',_0x5ba183,_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)]),'\x77\x61\x72\x6e'),execSync(_0x37f0af(0x85)+_0x37f0af(0xe0)+_0x37f0af(0xd1)+_0x37f0af(0xaf)+'\x20'+_0x5ba183+(_0x351eca['\x63\x6f\x6e\x66\x69\x67']['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][_0x5ba183]=='\x2a'||_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdc)+'\x65\x73'][_0x5ba183]==''?'':'\x40'+_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0xdc)+'\x65\x73'][_0x5ba183]),{'\x73\x74\x64\x69\x6f':_0x37f0af(0xae),'\x65\x6e\x76':process[_0x37f0af(0xa7)],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(__dirname,_0x37f0af(0x7f)+'\x73')});for(_0x710103=-0x40*-0x6+0x769*-0x1+0x5ea;_0x710103<=0x551*-0x1+-0x6e3*0x2+0x131a;_0x710103++){try{require['\x63\x61\x63\x68\x65']={};if(listPackage[_0x37f0af(0xc9)+_0x37f0af(0x9e)](_0x5ba183)||listbuiltinModules[_0x37f0af(0x8d)](_0x5ba183))global[_0x37f0af(0x7f)][_0x5ba183]=require(_0x5ba183);else global[_0x37f0af(0x7f)][_0x5ba183]=require(_0x55e867);_0x50cad1=!![];break;}catch(_0x198486){_0x169ab3=_0x198486;}if(_0x50cad1||!_0x169ab3)break;}if(!_0x50cad1||_0x169ab3)throw global[_0x37f0af(0xa9)](_0x37f0af(0x8e),'\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c'+_0x37f0af(0x79),_0x5ba183,_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)],_0x169ab3);}}logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e),'\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b'+'\x61\x67\x65',_0x351eca[_0x37f0af(0xd6)]['\x6e\x61\x6d\x65']));}if(_0x351eca[_0x37f0af(0xd6)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'])try{for(const _0xa98b28 in _0x351eca[_0x37f0af(0xd6)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67']){if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]]==_0x37f0af(0xd9))global[_0x37f0af(0xa2)+'\x6c\x65'][_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)]]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]]==_0x37f0af(0xd9))global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)]][_0xa98b28]!==_0x37f0af(0xd9))global[_0x37f0af(0xa2)+'\x6c\x65'][_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)]][_0xa98b28]=global['\x63\x6f\x6e\x66\x69\x67'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]][_0xa98b28];else global[_0x37f0af(0xa2)+'\x6c\x65'][_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]][_0xa98b28]=_0x351eca['\x63\x6f\x6e\x66\x69\x67']['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'][_0xa98b28]||'';if(typeof global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)]['\x6e\x61\x6d\x65']][_0xa98b28]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x37f0af(0xd6)][_0x351eca[_0x37f0af(0xd6)]['\x6e\x61\x6d\x65']][_0xa98b28]=_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0xdb)][_0xa98b28]||'';}logger[_0x37f0af(0x90)](global[_0x37f0af(0xa9)](_0x37f0af(0x8e),'\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66'+'\x69\x67',_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]));}catch(_0x169970){throw new Error(global[_0x37f0af(0xa9)](_0x37f0af(0x8e),_0x37f0af(0x8c)+'\x69\x67',_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)],JSON[_0x37f0af(0x95)](_0x169970)));}if(_0x351eca['\x6f\x6e\x4c\x6f\x61\x64']){try{const _0x3aff4d={};_0x3aff4d[_0x37f0af(0xb8)]=_0x5a74d8,_0x3aff4d[_0x37f0af(0xd2)]=_0x513631,_0x351eca[_0x37f0af(0x9d)](_0x3aff4d);}catch(_0x12974e){throw new Error(global[_0x37f0af(0xa9)](_0x37f0af(0x8e),_0x37f0af(0xc6),_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)],JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x12974e)),_0x37f0af(0x86));};}if(_0x351eca[_0x37f0af(0xc4)+'\x74'])global[_0x37f0af(0xa4)][_0x37f0af(0xab)+_0x37f0af(0xa3)][_0x37f0af(0xbf)](_0x351eca[_0x37f0af(0xd6)]['\x6e\x61\x6d\x65']);global[_0x37f0af(0xa4)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x73'][_0x37f0af(0x88)](_0x351eca['\x63\x6f\x6e\x66\x69\x67'][_0x37f0af(0x7b)],_0x351eca),logger[_0x37f0af(0x90)](global['\x67\x65\x74\x54\x65\x78\x74'](_0x37f0af(0x8e),_0x37f0af(0x92)+_0x37f0af(0x83),_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)]));}catch(_0x4668bf){logger[_0x37f0af(0x90)](global['\x67\x65\x74\x54\x65\x78\x74'](_0x37f0af(0x8e),_0x37f0af(0x80)+_0x37f0af(0xa0),_0x351eca[_0x37f0af(0xd6)][_0x37f0af(0x7b)],_0x4668bf),_0x37f0af(0x86));};}}(),function(){const _0x10692d=_0x5894f5,_0x34b4a0=readdirSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x10692d(0xc0)]+(_0x10692d(0x8a)+_0x10692d(0xcf)))[_0x10692d(0x6d)](_0x4ab1a7=>_0x4ab1a7['\x65\x6e\x64\x73\x57\x69\x74\x68'](_0x10692d(0x97))&&!global[_0x10692d(0xd6)][_0x10692d(0xe2)+'\x6c\x65\x64'][_0x10692d(0x8d)](_0x4ab1a7));for(const _0x12cd6d of _0x34b4a0){try{var _0x52f697=require(global[_0x10692d(0xa4)][_0x10692d(0xc0)]+(_0x10692d(0x8a)+_0x10692d(0x71))+_0x12cd6d);if(!_0x52f697['\x63\x6f\x6e\x66\x69\x67']||!_0x52f697[_0x10692d(0xc7)])throw new Error(global[_0x10692d(0xa9)]('\x6d\x69\x72\x61\x69','\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61'+'\x74'));if(global[_0x10692d(0xa4)]['\x65\x76\x65\x6e\x74\x73'][_0x10692d(0x9c)](_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)])||'')throw new Error(global[_0x10692d(0xa9)]('\x6d\x69\x72\x61\x69',_0x10692d(0x89)));if(!_0x52f697[_0x10692d(0x8f)]||typeof _0x52f697[_0x10692d(0x8f)]!=_0x10692d(0xa5)||Object[_0x10692d(0x9a)](_0x52f697[_0x10692d(0x8f)])['\x6c\x65\x6e\x67\x74\x68']==-0x414+-0xc3d*0x2+-0x22*-0xd7)logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0x87)+_0x10692d(0xde),_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]),_0x10692d(0xc1));if(_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdc)+'\x65\x73']&&typeof _0x52f697[_0x10692d(0xd6)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73']==_0x10692d(0xa5)){for(const _0x2daa62 in _0x52f697['\x63\x6f\x6e\x66\x69\x67'][_0x10692d(0xdc)+'\x65\x73']){const _0x7740d0=join(__dirname,_0x10692d(0x7f)+'\x73',_0x10692d(0x70)+'\x65\x73',_0x2daa62);try{if(!global[_0x10692d(0x7f)]['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](_0x2daa62)){if(listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](_0x2daa62)||listbuiltinModules[_0x10692d(0x8d)](_0x2daa62))global[_0x10692d(0x7f)][_0x2daa62]=require(_0x2daa62);else global[_0x10692d(0x7f)][_0x2daa62]=require(_0x7740d0);}else'';}catch{var _0x24f3bb=-0x7fd*-0x4+-0x1b2f+-0x4c5,_0xf95ae4=![],_0x3df52d;logger[_0x10692d(0x90)](global['\x67\x65\x74\x54\x65\x78\x74']('\x6d\x69\x72\x61\x69',_0x10692d(0x7c)+'\x63\x6b\x61\x67\x65',_0x2daa62,_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]),_0x10692d(0xc1)),execSync('\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b'+_0x10692d(0xc8)+_0x10692d(0xb2)+_0x10692d(0x7e)+_0x2daa62+(_0x52f697[_0x10692d(0xd6)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][_0x2daa62]=='\x2a'||_0x52f697[_0x10692d(0xd6)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][_0x2daa62]==''?'':'\x40'+_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdc)+'\x65\x73'][_0x2daa62]),{'\x73\x74\x64\x69\x6f':_0x10692d(0xae),'\x65\x6e\x76':process[_0x10692d(0xa7)],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(__dirname,_0x10692d(0x7f)+'\x73')});for(_0x24f3bb=-0xadf*-0x2+-0xc41*0x1+-0x25f*0x4;_0x24f3bb<=0x113a+0xd+-0x154*0xd;_0x24f3bb++){try{require[_0x10692d(0xb0)]={};if(global[_0x10692d(0x7f)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2daa62))break;if(listPackage[_0x10692d(0xc9)+_0x10692d(0x9e)](_0x2daa62)||listbuiltinModules[_0x10692d(0x8d)](_0x2daa62))global[_0x10692d(0x7f)][_0x2daa62]=require(_0x2daa62);else global[_0x10692d(0x7f)][_0x2daa62]=require(_0x7740d0);_0xf95ae4=!![];break;}catch(_0x12b75a){_0x3df52d=_0x12b75a;}if(_0xf95ae4||!_0x3df52d)break;}if(!_0xf95ae4||_0x3df52d)throw global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0x7a)+_0x10692d(0x79),_0x2daa62,_0x52f697['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']);}}logger[_0x10692d(0x90)](global[_0x10692d(0xa9)]('\x6d\x69\x72\x61\x69',_0x10692d(0xcc)+_0x10692d(0xe1),_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));}if(_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)])try{for(const _0x3faa48 in _0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)]){if(typeof global[_0x10692d(0xa2)+'\x6c\x65'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]]==_0x10692d(0xd9))global[_0x10692d(0xd6)][_0x52f697['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48]!==_0x10692d(0xd9))global[_0x10692d(0xa2)+'\x6c\x65'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48]=global[_0x10692d(0xd6)][_0x52f697['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][_0x3faa48];else global[_0x10692d(0xa2)+'\x6c\x65'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48]=_0x52f697[_0x10692d(0xd6)][_0x10692d(0xdb)][_0x3faa48]||'';if(typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48]==_0x10692d(0xd9))global[_0x10692d(0xd6)][_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]][_0x3faa48]=_0x52f697[_0x10692d(0xd6)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'][_0x3faa48]||'';}logger['\x6c\x6f\x61\x64\x65\x72'](global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0x8c)+'\x69\x67',_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));}catch(_0x4beeff){throw new Error(global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0x8c)+'\x69\x67',_0x52f697[_0x10692d(0xd6)]['\x6e\x61\x6d\x65'],JSON[_0x10692d(0x95)](_0x4beeff)));}if(_0x52f697['\x6f\x6e\x4c\x6f\x61\x64'])try{const _0x514c67={};_0x514c67[_0x10692d(0xb8)]=_0x5a74d8,_0x514c67['\x6d\x6f\x64\x65\x6c\x73']=_0x513631,_0x52f697[_0x10692d(0x9d)](_0x514c67);}catch(_0x3db707){throw new Error(global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0xc6),_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)],JSON[_0x10692d(0x95)](_0x3db707)),_0x10692d(0x86));}global[_0x10692d(0xa4)][_0x10692d(0xb7)][_0x10692d(0x88)](_0x52f697['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65'],_0x52f697),logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e),_0x10692d(0x92)+_0x10692d(0x83),_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)]));}catch(_0x3dd208){logger[_0x10692d(0x90)](global[_0x10692d(0xa9)](_0x10692d(0x8e),'\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f'+'\x64\x75\x6c\x65',_0x52f697[_0x10692d(0xd6)][_0x10692d(0x7b)],_0x3dd208),_0x10692d(0x86));}}}(),logger[_0x5894f5(0x90)](global[_0x5894f5(0xa9)](_0x5894f5(0x8e),_0x5894f5(0xce)+_0x5894f5(0xc2),global[_0x5894f5(0xa4)][_0x5894f5(0x77)]['\x73\x69\x7a\x65'],global[_0x5894f5(0xa4)][_0x5894f5(0xb7)][_0x5894f5(0x93)])),logger[_0x5894f5(0x90)](_0x5894f5(0xad)+(Date[_0x5894f5(0x74)]()-global['\x63\x6c\x69\x65\x6e\x74'][_0x5894f5(0xb6)])+'\x6d\x73\x20\x3d\x3d\x3d'),writeFileSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x5894f5(0x9b)],JSON[_0x5894f5(0x95)](global[_0x5894f5(0xd6)],null,-0x1*0x2303+0x9*0xab+-0xc*-0x26b),'\x75\x74\x66\x38'),unlinkSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x5894f5(0x9b)]+_0x5894f5(0xa1));const _0x9e2249={};_0x9e2249['\x61\x70\x69']=_0x5a74d8,_0x9e2249[_0x5894f5(0xd2)]=_0x513631;const _0x24e2fb=require('\x2e\x2f\x69\x6e\x63\x6c\x75\x64\x65\x73'+'\x2f\x6c\x69\x73\x74\x65\x6e')(_0x9e2249);function _0xe14ce0(_0x3b6128,_0x1debaa){const _0x480e94=_0x5894f5;if(_0x3b6128)return logger(global[_0x480e94(0xa9)](_0x480e94(0x8e),_0x480e94(0xda)+_0x480e94(0x9f),JSON[_0x480e94(0x95)](_0x3b6128)),_0x480e94(0x86));if([_0x480e94(0x76),_0x480e94(0x6e),_0x480e94(0x8b)+'\x70\x74'][_0x480e94(0xd3)](_0x303312=>_0x303312==_0x1debaa['\x74\x79\x70\x65']))return;if(global['\x63\x6f\x6e\x66\x69\x67']['\x44\x65\x76\x65\x6c\x6f\x70\x65\x72\x4d'+_0x480e94(0xbd)]==!![])console['\x6c\x6f\x67'](_0x1debaa);return _0x24e2fb(_0x1debaa);};global['\x68\x61\x6e\x64\x6c\x65\x4c\x69\x73\x74'+'\x65\x6e']=_0x5a74d8[_0x5894f5(0xb5)](_0xe14ce0);try{await checkBan(_0x5a74d8);}catch(_0x1f61f8){return process['\x65\x78\x69\x74'](0x4ff*0x1+-0x26+0x4d9*-0x1);};if(!global[_0x5894f5(0xc5)])logger(global[_0x5894f5(0xa9)](_0x5894f5(0x8e),_0x5894f5(0xbe)+_0x5894f5(0xbc)),_0x5894f5(0xcd)+'\x41\x4e\x20\x5d');global[_0x5894f5(0xa4)][_0x5894f5(0xb8)]=_0x5a74d8,setInterval(async function(){const _0x5ceec6=_0x5894f5;global[_0x5ceec6(0xda)+'\x65\x6e'][_0x5ceec6(0x94)+'\x69\x6e\x67'](),global[_0x5ceec6(0xc5)]=![],setTimeout(function(){const _0x1c0494=_0x5ceec6;return global[_0x1c0494(0xda)+'\x65\x6e']=_0x5a74d8['\x6c\x69\x73\x74\x65\x6e\x4d\x71\x74\x74'](_0xe14ce0);},-0x262+0x1b00+-0x16aa);try{await checkBan(_0x5a74d8);}catch{return process[_0x5ceec6(0xd4)](0x12a2+-0xdd7+0x3*-0x199);};if(!global[_0x5ceec6(0xc5)])logger(global[_0x5ceec6(0xa9)](_0x5ceec6(0x8e),'\x77\x61\x72\x6e\x69\x6e\x67\x53\x6f\x75'+_0x5ceec6(0xbc)),_0x5ceec6(0xcd)+_0x5ceec6(0xb4));global[_0x5ceec6(0xd6)][_0x5ceec6(0x75)]&&(global[_0x5ceec6(0xdf)][_0x5ceec6(0x78)]['\x63\x6c\x65\x61\x72'](),global[_0x5ceec6(0xa4)][_0x5ceec6(0xa8)+'\x79']=global['\x63\x6c\x69\x65\x6e\x74']['\x68\x61\x6e\x64\x6c\x65\x52\x65\x61\x63'+'\x74\x69\x6f\x6e']={});if(global[_0x5ceec6(0xd6)][_0x5ceec6(0x98)+'\x6f\x64\x65']==!![])return logger(global[_0x5ceec6(0xa9)]('\x6d\x69\x72\x61\x69','\x72\x65\x66\x72\x65\x73\x68\x4c\x69\x73'+_0x5ceec6(0x91)),_0x5ceec6(0x82)+'\x20\x5d');},0x4*0x19720+-0x7da*0x6f+0x632c6);});};

//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

const _0x1c67=['\x2f\x64\x61\x74\x61\x62\x61\x73\x65\x2f','\x36\x38\x34\x38\x33\x36\x56\x7a\x6f\x63\x75\x56','\x31\x34\x36\x30\x36\x64\x57\x62\x79\x68\x59','\x2e\x2f\x69\x6e\x63\x6c\x75\x64\x65\x73','\x35\x38\x31\x34\x39\x36\x62\x45\x69\x57\x66\x59','\x37\x33\x32\x33\x53\x71\x49\x45\x4d\x56','\x33\x38\x6c\x45\x42\x78\x6d\x66','\x6e\x65\x63\x74\x44\x61\x74\x61\x62\x61','\x6d\x6f\x64\x65\x6c\x73','\x73\x65\x71\x75\x65\x6c\x69\x7a\x65','\x67\x65\x74\x54\x65\x78\x74','\x32\x33\x38\x39\x31\x64\x64\x74\x66\x45\x70','\x73\x75\x63\x63\x65\x73\x73\x43\x6f\x6e','\x33\x62\x6f\x63\x55\x6a\x4b','\x31\x31\x4f\x77\x61\x79\x61\x67','\x6d\x69\x72\x61\x69','\x31\x59\x4b\x76\x71\x6b\x44','\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61','\x33\x38\x36\x32\x35\x32\x70\x76\x6d\x4f\x52\x72','\x33\x39\x36\x35\x32\x37\x4f\x58\x45\x6d\x45\x6d','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45'];function _0x54b4(_0x5451b3,_0x5d3420){return _0x54b4=function(_0x1eb9ce,_0x33c24c){_0x1eb9ce=_0x1eb9ce-(0x1572+0x7b7*0x4+0x1a3*-0x1f);let _0x5b1047=_0x1c67[_0x1eb9ce];return _0x5b1047;},_0x54b4(_0x5451b3,_0x5d3420);}(function(_0x5c1ef1,_0x36c01f){const _0x49bd3c=_0x54b4;while(!![]){try{const _0x83141e=-parseInt(_0x49bd3c(0x1a4))*-parseInt(_0x49bd3c(0x198))+parseInt(_0x49bd3c(0x197))+parseInt(_0x49bd3c(0x191))*parseInt(_0x49bd3c(0x194))+-parseInt(_0x49bd3c(0x193))+-parseInt(_0x49bd3c(0x1a3))*parseInt(_0x49bd3c(0x1a1))+-parseInt(_0x49bd3c(0x19a))+-parseInt(_0x49bd3c(0x19b))*-parseInt(_0x49bd3c(0x19c));if(_0x83141e===_0x36c01f)break;else _0x5c1ef1['push'](_0x5c1ef1['shift']());}catch(_0xb99243){_0x5c1ef1['push'](_0x5c1ef1['shift']());}}}(_0x1c67,0x21558*-0x4+0x64fc3+0x95c0f),(async()=>{const _0x512472=_0x54b4;try{await sequelize[_0x512472(0x192)+'\x74\x65']();const _0x28aa45={};_0x28aa45['\x53\x65\x71\x75\x65\x6c\x69\x7a\x65']=Sequelize,_0x28aa45[_0x512472(0x19f)]=sequelize;const _0x223dd8=require(_0x512472(0x199)+_0x512472(0x196)+'\x6d\x6f\x64\x65\x6c')(_0x28aa45);logger(global[_0x512472(0x1a0)](_0x512472(0x1a5),_0x512472(0x1a2)+_0x512472(0x19d)+'\x73\x65'),'\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45'+'\x20\x5d');const _0x1f4fdb={};_0x1f4fdb[_0x512472(0x19e)]=_0x223dd8,onBot(_0x1f4fdb);}catch(_0x500d77){logger(global[_0x512472(0x1a0)]('\x6d\x69\x72\x61\x69',_0x512472(0x1a2)+'\x6e\x65\x63\x74\x44\x61\x74\x61\x62\x61'+'\x73\x65',JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x500d77)),_0x512472(0x195)+'\x20\x5d');}})());
