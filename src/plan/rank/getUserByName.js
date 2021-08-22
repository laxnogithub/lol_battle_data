/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-14 18:43:06
 * @LastEditors: lax
 * @LastEditTime: 2021-08-22 19:19:41
 * @FilePath: \lol_battle_data\src\plan\rank\getUserByName.js
 */
const LolChess = require("@/tools/lolchess/");

const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};

const CONTENT_CLASS_NAME = `.profile__match-history-v2__items`;
const USERINFO_DETAIL = `.profile__match-history-v2__item__detail table`;
const USERINFO_FLAG = `.profile__match-history-v2__item`;
const DETAIL_BUTTON = `.toggle-detail`;
const DATA_ID = `data-match-id`;

async function getUserByName({ browser, name }) {
	const lol = new LolChess();
	lol.setName(name);
	let index = 1;

	const page = await browser.newPage();
	await page.goto(lol.getUserUrl(undefined, index, name), DEFAULT_PAGE_OPTION);

	const ids = await page.$eval(
		CONTENT_CLASS_NAME,
		(el, data) => {
			const rows = Array.from(el.querySelectorAll(data.USERINFO_FLAG));
			return rows.map(el => {
				const detailBt = el.querySelector(data.DETAIL_BUTTON);
				const id = el.getAttribute(data.DATA_ID);
				detailBt.click();
				return id;
			});
		},
		{ USERINFO_FLAG, DETAIL_BUTTON, DATA_ID }
	);

	page.on("response", async resp => {
		const url = resp.url();
		// 成功访问 lolchess.gg/profile/kr/matchDetail/
		if (url.indexOf("matchDetail") !== -1) {
			const arr = url.split("/");
			const id = arr[arr.length - 1];
			if (ids.includes(id)) {
				await page.$eval(USERINFO_DETAIL, el => {
					const body = el.querySelector("tbody");
					const rows = Array.from(body.querySelectorAll("tr"));
					rows.map(row => {
						const data = {
							name: row
								.querySelectorAll(".summoner a span")[1]
								.innerText.trim(),
							level: row
								.querySelector(".summoner div.avatar span.level")
								.innerText.trim(),
							round: row.querySelector(".round").innerText.trim(),
							alive: row.querySelector(".time_eliminated").innerText.trim(),
							traits: Array.from(
								row.querySelectorAll(".traits div.tft-hexagon-image img")
							).map(img => {
								return img.getAttribute("alt");
							}),
							champions: Array.from(
								row.querySelectorAll(".champions div.champions__item")
							).map(champions => {
								return {
									// use image name
									stars: (() => {
										// cdn.lolchess.gg / images / tft / stars / cost3_stars2.png;
										const char = champions
											.querySelector("img")
											.getAttribute("src")
											.split(".png")[0];
										return char[char.length - 1];
									})(),
									// hero name
									name: champions
										.querySelector(".champions__image img")
										.getAttribute("alt"),
									// hero weapons
									weapon: Array.from(
										champions.querySelectorAll(".champions__items img")
									).map(wp => {
										const wpName = wp.getAttribute("data-original-title");
										return wpName;
									})
								};
							}),
							coin: row.querySelector(".gold_left").innerText.trim()
						};
						return data;
					});
				});
			}
		}
	});
}

module.exports = { getUserByName };
