/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-05-24 10:10:05
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 18:26:26
 * @FilePath: \lol_battle_data\src\db\index.js
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
