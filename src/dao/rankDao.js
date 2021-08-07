/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-08-07 18:06:35
 * @LastEditors: lax
 * @LastEditTime: 2021-08-07 18:34:35
 * @FilePath: \lol_battle_data\src\dao\rankDao.js
 */

const { getRepository } = require("typeorm");
const Rank = require("@/pojo/Rank.js");

module.exports = {
	async save(data) {
		const rankRepository = getRepository(Rank);
		await rankRepository.save(data);
	}
};
