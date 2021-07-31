/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-07-31 18:45:10
 * @LastEditors: lax
 * @LastEditTime: 2021-07-31 19:26:49
 * @FilePath: \lol_battle_data\src\index.js
 */
const puppeteer = require("puppeteer");
const plan = require("@/plan/index.js");

const CHROME_PATH = `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`;

(async () => {
	const browser = await puppeteer.launch({
		executablePath: CHROME_PATH,
		headless: false,
		defaultViewport: {
			width: 1920,
			height: 1080
		}
	});
	const page = await browser.newPage();
	await page.goto("https://lolchess.gg/leaderboards", {
		waitUntil: "domcontentloaded"
	});
	plan(page);

	// await browser.close();
})();
