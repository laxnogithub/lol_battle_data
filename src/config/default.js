/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-02 13:41:46
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 17:27:50
 * @FilePath: \lol_battle_data\src\config\default.js
 */

module.exports = {
	BROWSER: {
		CHROME_PATH: `C:/Program Files (x86)/Google/Chrome/Application/chrome.exe`,
		HEADLESS: false,
		DEFAULT_VIEWPORT: {
			width: 1920,
			height: 1080
		}
	},
	LOLCHESS: {
		RANK_FLAG: `td[class=rank]`,
		NAME_FLAG: `td[class=summoner] a`,
		TIER_FLAG: `td[class=tier] span[class=tier-name-sm]`,
		LP_FLAG: `td[class=lp]`,
		USERINFO: {
			CONTENT_CLASS_NAME: `.profile__match-history-v2__items`,
			USERINFO_FLAG: `.profile__match-history-v2__item`,
			USERINFO_DETAIL: `.profile__match-history-v2__item__detail table`,
			DETAIL_BUTTON: `.toggle-detail`,
			DATA_ID: `data-game-id`
		}
	}
};
