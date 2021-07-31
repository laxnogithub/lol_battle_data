/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 19:07:59
 * @LastEditors: lax
 * @LastEditTime: 2021-07-31 19:32:55
 * @FilePath: \lol_battle_data\src\plan\index.js
 */

const PAGINATION = `ul[class="pagination"]`;
const CONTENT = `table`;
const COUNTRY_LIST = ["kr", "na"];
const COUNTRY_PATH = `https://lolchess.gg/leaderboards?mode=ranked&region=REGION`;

function getCountry(name = COUNTRY_LIST[0]) {
	return COUNTRY_PATH.replace("REGION", name);
}

module.exports = async page => {
	console.log(`*** start plan ***`);

	page.on("error", () => {});

	await page.goto(getCountry(), {
		waitUntil: "domcontentloaded"
	});

	const table = await page.$eval(CONTENT, el => console.log(el));
	console.log(table);
};
