/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-05-24 10:10:05
 * @LastEditors: lax
 * @LastEditTime: 2021-08-06 10:34:51
 * @FilePath: \lolBattleData\src\db\index.js
 */
const { createConnection } = require("typeorm");
const { DATABASE } = require("@/config/index");
const path = require("path");
DATABASE.entities = [path.join(__dirname, "./../pojo/**/*.js")];

function db() {
	const callback = createConnection(DATABASE);
	return callback;
}

module.exports = db;
