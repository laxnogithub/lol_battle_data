/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-02 14:53:01
 * @LastEditors: lax
 * @LastEditTime: 2021-08-03 10:43:36
 * @FilePath: \lolBattleData\src\tools\list\index.js
 */
module.exports = el => {
	const arr = el.querySelector("tbody");
	console.log(arr);
	arr.map(row => {
		console.log(row);
	});
};
