/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-05-24 10:12:07
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 18:37:52
 * @FilePath: \lol_battle_data\src\config\database\index.js
 */
module.exports = {
	DATABASE: {
		type: "mysql",
		host: "localhost",
		port: 3306,
		username: "root",
		password: "daln123@A",
		database: "loldata",
		logging: false,
		synchronize: true
	}
};
