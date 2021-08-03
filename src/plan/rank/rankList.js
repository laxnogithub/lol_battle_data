/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-03 10:51:22
 * @LastEditors: lax
 * @LastEditTime: 2021-08-03 11:26:08
 * @FilePath: \lolBattleData\src\plan\rank\rankList.js
 */
const LolChess = require("@/tools/lolchess/");

const DEFAULT_PAGE_OPTION = {
	waitUntil: "domcontentloaded"
};

const CONTENT = `table`;

module.exports = async ({ browser }) => {
	// lolchess handler
	const lol = new LolChess();

	// rank list max 10
	const callbacks = Array(10)
		.fill({})
		.map(async (each, i) => {
			console.log(` *** select page: ${lol.setPage(i + 1)} ***`);
			const page = await browser.newPage();
			await page.goto(lol.setPage(i + 1), DEFAULT_PAGE_OPTION);

			// rank list
			const table = await page.$eval(CONTENT, (el, j) => {
				// rank list content
				const body = Array.from(el.querySelector("tbody").children);

				const contents = body.map(row => {
					return Array.from(row.children).map(_col => {
						const className = _col.classList[0];
						let value = _col.innerText.trim();
						if (className === "summoner") value = value.split("#1")[0].trim();
						if (className === "tier")
							value = _col
								.querySelector("span[class=tier-name-sm]")
								.innerText.trim();
						return value;
					});
				});

				if (j === 0) {
					// rank list title
					const head = Array.from(el.querySelector("thead").children);

					const titles = head.map(row => {
						return Array.from(row.children).map(col => {
							const title = col.innerText.trim();
							return title;
						});
					});
					return [].concat(titles, contents);
				}

				return contents;
			});

			return table;
		});

	const _rankList = await Promise.all(callbacks);

	return _rankList.reduce((acc, next) => {
		return acc.concat(next);
	}, []);
};
