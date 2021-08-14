/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 19:07:59
 * @LastEditors: lax
 * @LastEditTime: 2021-08-14 19:07:05
 * @FilePath: \lol_battle_data\src\plan\index.js
 */
const HOME = `https://lolchess.gg/leaderboards`;
const fs = require("fs");
const path = require("path");
const {
	getRankList,
	saveRank,
	getUserByName
} = require("@/plan/rank/index.js");
const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};
module.exports = async browser => {
	console.log(`*** start plan ***`);

	const page = await browser.newPage();
	await page.goto(HOME, DEFAULT_PAGE_OPTION);

	page.on("error", e => {
		console.log(e);
	});

	// const rankList = await getRankList({ browser, page });

	// await saveRank(rankList);

	await getUserByName({ browser, name: "퐈피는잘못없어" });
};
