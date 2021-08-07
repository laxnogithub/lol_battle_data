/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-07 17:44:28
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 17:44:29
 * @FilePath: \lol_battle_data\src\pojo\Base.js
 */
const { CreateDateColumn, UpdateDateColumn } = require("typeorm");

class Base {
	@CreateDateColumn({ comment: "创建时间" })
	create_date = undefined;

	@UpdateDateColumn({ comment: "更新时间" })
	update_date = undefined;
}

module.exports = Base;
