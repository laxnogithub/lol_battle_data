/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-09-21 18:34:50
 * @LastEditors: lax
 * @LastEditTime: 2021-09-21 19:11:30
 * @FilePath: \lol_battle_data\src\pojo\Hero.js
 */
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
const Base = require("./Base");

@Entity("hero")
class Hero extends Base {
	@PrimaryGeneratedColumn("varchar")
	id = undefined;

	@Column("varchar")
	name = undefined;
}

module.exports = Hero;
