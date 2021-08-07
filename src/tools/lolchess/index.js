/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-03 10:42:25
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 18:42:22
 * @FilePath: \lol_battle_data\src\tools\lolchess\index.js
 */
const COUNTRY_LIST = ["kr", "na"];
const MAX_PAGE = 10;
class LolChess {
	constructor() {
		this.baseUrl = `https://lolchess.gg/leaderboards?mode=ranked&region=REGION&page=PAGE`;
		this.ct = COUNTRY_LIST[0];
		this.page = 1;
	}

	setCountry(ct = COUNTRY_LIST[0]) {
		this.ct = ct;
		return this.getUrl();
	}

	setPage(page = 1) {
		this.page = page;
		return this.getUrl();
	}

	nextPage() {
		if (this.page < MAX_PAGE) this.page = this.page++;
		return this.getUrl();
	}

	getUrl() {
		return this.baseUrl.replace("REGION", this.ct).replace("PAGE", this.page);
	}
}

module.exports = LolChess;
