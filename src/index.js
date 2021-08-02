/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 18:45:10
 * @LastEditors: lax
 * @LastEditTime: 2021-08-02 15:04:17
 * @FilePath: \lolBattleData\src\index.js
 */
const puppeteer = require("puppeteer");
const { BROWSER_CONFIG } = require("@/config/");
const plan = require("@/plan/index.js");

(async () => {
	const browser = await puppeteer.launch(BROWSER_CONFIG);
	await plan(browser);

	// await browser.close();
})();
