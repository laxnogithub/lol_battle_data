/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-09-21 18:15:39
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 18:30:18
 * @FilePath: \lol_battle_data\src\pojo\BattleInfo.js
 */
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
const Base = require("./Base");

@Entity("battleInfo")
class BattleInfo extends Base {
	@PrimaryGeneratedColumn("varchar")
	id = undefined;

	@Column("varchar")
	battle_id = undefined;

	@Column("varchar")
	lolchess_id = undefined;

	@Column("varchar")
	summoner = undefined;

	@Column("int")
	level = undefined;

	@Column("int")
	round1 = undefined;

	@Column("int")
	round2 = undefined;

	@Column("timestamp")
	alive = undefined;

	@Column("varchar")
	Traits = undefined;
}

module.exports = BattleInfo;
