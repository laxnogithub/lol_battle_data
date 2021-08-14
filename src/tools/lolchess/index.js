/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-03 10:42:25
 * @LastEditors: lax
 * @LastEditTime: 2021-08-14 18:55:26
 * @FilePath: \lol_battle_data\src\tools\lolchess\index.js
 */
const COUNTRY_LIST = ["kr", "na"];
const MAX_PAGE = 10;
class LolChess {
	constructor() {
		this.rankUrl = `https://lolchess.gg/leaderboards?mode=ranked&region=REGION&page=PAGE`;
		this.userUrl = `https://lolchess.gg/profile/REGION/USERNAME/s5.5/matches/ranked/PAGE`;
		this.ct = COUNTRY_LIST[0];
		this.page = 1;
		this.name = "";
	}

	setCountry(ct = COUNTRY_LIST[0]) {
		this.ct = ct;
	}

	setPage(page = 1) {
		this.page = page;
	}

	setName(name) {
		this.name = name;
	}

	nextPage() {
		if (this.page < MAX_PAGE) this.page = this.page++;
	}

	getRankUrl(region = this.ct, page = this.page) {
		return this.rankUrl.replace("REGION", region).replace("PAGE", page);
	}

	getUserUrl(region = this.ct, page = this.page, username) {
		return this.userUrl
			.replace("REGION", region)
			.replace("PAGE", page)
			.replace("USERNAME", username);
	}
}

module.exports = LolChess;
