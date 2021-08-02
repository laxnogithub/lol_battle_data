/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-02 13:39:46
 * @LastEditors: lax
 * @LastEditTime: 2021-08-02 13:54:31
 * @FilePath: \lolBattleData\src\config\index.js
 */

const config = require("@root/config.json");
const browser = config.browser || {};
const { BROWSER } = require("@/config/default.js");

module.exports = {
	BROWSER_CONFIG: {
		executablePath: browser.chrome_path || BROWSER.CHROME_PATH,
		headless: browser.headless || BROWSER.HEADLESS,
		defaultViewport: browser.default_viewport || BROWSER.DEFAULT_VIEWPORT
	}
};
