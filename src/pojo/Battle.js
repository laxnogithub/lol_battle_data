/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-09-21 18:06:40
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 18:17:30
 * @FilePath: \lol_battle_data\src\pojo\Battle.js
 */

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
const Base = require("./Base");

@Entity("battle")
class Battle extends Base {
	@PrimaryGeneratedColumn("varchar")
	id = undefined;

	@Column("varchar")
	lolchess_id = undefined;

	@Column("varchar")
	summoners = undefined;
}

module.exports = Battle;
