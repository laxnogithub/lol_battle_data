/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 19:07:59
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 19:08:34
 * @FilePath: \lol_battle_data\src\plan\index.js
 */
const HOME = `https://lolchess.gg/leaderboards`;
const fs = require("fs");
const path = require("path");
const { getRankList, saveRank } = require("@/plan/rank/index.js");
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

	const rankList = await getRankList({ browser, page });

	fs.writeFileSync(
		path.resolve(__dirname, "/data.json"),
		JSON.stringify(rankList)
	);

	await saveRank(rankList);
};
