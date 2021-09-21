/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-02 13:39:46
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 17:26:08
 * @FilePath: \lol_battle_data\src\config\index.js
 */

const config = require("@root/config.json");
const browser = config.browser || {};
const db = config.database || {};
const { BROWSER, LOLCHESS } = require("@/config/default.js");
const { DATABASE } = require("@/config/database/index.js");

module.exports = {
	BROWSER_CONFIG: {
		executablePath: browser.chrome_path || BROWSER.CHROME_PATH,
		headless: browser.headless || BROWSER.HEADLESS,
		defaultViewport: browser.default_viewport || BROWSER.DEFAULT_VIEWPORT
	},
	LOLCHESS,
	DATABASE: Object.assign({}, DATABASE, db)
};
