/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const db = require('../../config/db');

module.exports = {
  async createUsuario(_, { dados }) {
    try {
      const [id] = await db('usuarios')
        .returning('id')
        .insert(dados);

      return db('usuarios')
        .where({ id })
        .first();
    } catch (error) {
      throw new Error(error.sqlMessage);
    }
  },
};
