/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 18:45:10
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 18:22:38
 * @FilePath: \lol_battle_data\src\index.js
 */
const puppeteer = require("puppeteer");
const { BROWSER_CONFIG } = require("@/config/");
const plan = require("@/plan/index.js");
const db = require("@/db/index.js");

(async () => {
	await db();

	console.log(`database connected!`);

	const browser = await puppeteer.launch(BROWSER_CONFIG);
	await plan(browser);

	// await browser.close();
})();
