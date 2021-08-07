/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-03 10:51:11
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 19:00:28
 * @FilePath: \lol_battle_data\src\plan\rank\index.js
 */
const getRankList = require("@/plan/rank/rankList.js");
const rankDao = require("@/dao/rankDao.js");
const sha256 = require("sha256");

function arrToObj(data) {
	return data.map(page => {
		const name = page[1] + "";
		const hash = sha256(name);
		const rankObj = {};
		rankObj.hash = hash;
		rankObj.rank = page[0];
		rankObj.name = page[1];
		rankObj.tier = page[2];
		rankObj.lp = page[3];
		rankObj.win_rate = page[4];
		rankObj.top4_rate = page[5];
		rankObj.played = page[6];
		rankObj.win = page[7];
		rankObj.top4 = page[8];
		return rankObj;
	});
}

async function saveRank(data) {
	const _data = arrToObj(data);
	console.log(_data);
	await rankDao.save(_data);
}

module.exports = { getRankList, saveRank };
