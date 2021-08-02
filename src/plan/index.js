/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 19:07:59
 * @LastEditors: lax
 * @LastEditTime: 2021-08-02 15:40:12
 * @FilePath: \lolBattleData\src\plan\index.js
 */

const PAGINATION = `ul[class="pagination"]`;
const CONTENT = `table`;
const COUNTRY_LIST = ["kr", "na"];
const COUNTRY_PATH = `https://lolchess.gg/leaderboards?mode=ranked&region=REGION`;
const HOME = `https://lolchess.gg/leaderboards`;
const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};

const readList = require("@/tools/list/index.js");

function getCountry(name = COUNTRY_LIST[0]) {
	return COUNTRY_PATH.replace("REGION", name);
}

module.exports = async browser => {
	console.log(`*** start plan ***`);

	const page = await browser.newPage();
	await page.goto(HOME, DEFAULT_PAGE_OPTION);

	page.on("error", () => {});

	await page.goto(getCountry(), DEFAULT_PAGE_OPTION);

	const table = await page.$eval(
		CONTENT,
		el => {
			const arr = el.querySelector("tbody");
			console.log(arr);
			arr.map(row => {
				console.log(row);
			});
		},
		readList
	);
};
