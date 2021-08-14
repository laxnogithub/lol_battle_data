/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-14 18:43:06
 * @LastEditors: lax
 * @LastEditTime: 2021-08-14 19:14:01
 * @FilePath: \lol_battle_data\src\plan\rank\getUserByName.js
 */
const LolChess = require("@/tools/lolchess/");

const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};

const CONTENT_CLASS_NAME = `profile__match-history-v2__items`;
const USERINFO_FLAG = `.profile__match-history-v2__item placement-2`;

async function getUserByName({ browser, name }) {
	const lol = new LolChess();
	lol.setName(name);
	let index = 1;

	const page = await browser.newPage();
	await page.goto(lol.getUserUrl(undefined, index, name), DEFAULT_PAGE_OPTION);

	await page.$eval(CONTENT_CLASS_NAME, el => {
		console.log("231");
		const rows = el.querySelector(USERINFO_FLAG);
		console.log(rows);
	});
}

module.exports = { getUserByName };
