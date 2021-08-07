/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-07 17:38:44
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 19:23:45
 * @FilePath: \lol_battle_data\src\pojo\Rank.js
 */

const {
	Entity,
	PrimaryGeneratedColumn,
	PrimaryColumn,
	Index,
	Column
} = require("typeorm");
const Base = require("./Base");

@Entity("rank")
class Rank extends Base {
	@PrimaryGeneratedColumn()
	id = undefined;

	@Index()
	@Column("varchar")
	hash = undefined;

	@Column({ default: 0, type: "int" })
	rank = undefined;

	@Column("text")
	name = "";

	@Column("text")
	tier = "";

	@Column({ default: 0, type: "int" })
	lp = undefined;

	@Column({ default: 0, type: "int" })
	win_rate = undefined;

	@Column({ default: 0, type: "int" })
	top4_rate = undefined;

	@Column({ default: 0, type: "int" })
	played = undefined;

	@Column({ default: 0, type: "int" })
	win = undefined;

	@Column({ default: 0, type: "int" })
	top4 = undefined;
}

module.exports = Rank;
