/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-07 17:38:44
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 17:46:52
 * @FilePath: \lol_battle_data\src\pojo\Rank.js
 */

const { Entity, PrimaryColumn, Column } = require("typeorm");
const Base = require("./Base");

@Entity("rank")
class Rank extends Base {
	@PrimaryColumn()
	id = undefined;

	@Column("int")
	rank = undefined;

	@Column("varcher")
	name = "";

	@Column("varcher")
	tier = "";

	@Column("int")
	lp = undefined;
}

module.exports = Rank;
