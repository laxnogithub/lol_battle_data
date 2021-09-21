/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-14 18:43:06
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 17:48:19
 * @FilePath: \lol_battle_data\src\plan\rank\getUserByName.js
 */
const LolChess = require("@/tools/lolchess/");
const { LOLCHESS } = require("@/config/index.js");
const { USERINFO } = LOLCHESS;

const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};

function __getIdByElementCollection(collection, data) {
	const rows = Array.from(collection.querySelectorAll(data.USERINFO_FLAG));
	return rows.map(el => {
		const detailBt = el.querySelector(data.DETAIL_BUTTON);
		const id = el.getAttribute(data.DATA_ID);
		detailBt.click();
		return id;
	});
}

function __getBattleInfoById(el) {
	const body = el.querySelector("tbody");
	const rows = Array.from(body.querySelectorAll("tr"));
	rows.map(row => {
		const name = row.querySelectorAll(".summoner a span")[1].innerText.trim();
		const level = row
			.querySelector(".summoner div.avatar span.level")
			.innerText.trim();
		const round = row.querySelector(".round").innerText.trim();
		const alive = row.querySelector(".time_eliminated").innerText.trim();
		const traits = Array.from(
			row.querySelectorAll(".traits div.tft-hexagon-image img")
		).map(img => {
			return img.getAttribute("alt");
		});
		const champions = Array.from(
			row.querySelectorAll(".champions div.champions__item")
		).map(_champions => {
			return {
				// use image name
				stars: (() => {
					// cdn.lolchess.gg / images / tft / stars / cost3_stars2.png;
					const char = _champions
						.querySelector("img")
						.getAttribute("src")
						.split(".png")[0];
					return char[char.length - 1];
				})(),
				// hero name
				name: _champions
					.querySelector(".champions__image img")
					.getAttribute("alt"),
				// hero weapons
				weapon: Array.from(
					_champions.querySelectorAll(".champions__items img")
				).map(wp => {
					const wpName = wp.getAttribute("data-original-title");
					return wpName;
				})
			};
		});
		console.log(`champions:${champions}`);
		const coin = row.querySelector(".gold_left").innerText.trim();

		console.log(name);

		const data = {
			name,
			level,
			round,
			alive,
			traits,
			champions,
			coin
		};
		return data;
	});
}

function getIdByUrl(url) {
	const arr = url.split("/");
	const id = arr[arr.length - 1];
	return id;
}

async function getUserByName({ browser, name }) {
	/**
	 * init
	 */
	const lol = new LolChess();
	lol.setName(name);
	let index = 1;

	const page = await browser.newPage();

	const getUserUrl = lol.getUserUrl(undefined, index, name);

	await page.goto(getUserUrl, DEFAULT_PAGE_OPTION);

	const ids = await page.$eval(
		USERINFO.CONTENT_CLASS_NAME,
		__getIdByElementCollection,
		USERINFO
	);

	page.on("response", async resp => {
		const url = resp.url();
		// 成功访问 lolchess.gg/profile/kr/matchDetail/
		if (url.indexOf("matchDetail") !== -1) {
			const id = getIdByUrl(url);
			if (ids.includes(id)) {
				const info = await page.$eval(
					USERINFO.USERINFO_DETAIL,
					__getBattleInfoById
				);
				console.log(info);
			}
		}
	});
}

module.exports = { getUserByName };
