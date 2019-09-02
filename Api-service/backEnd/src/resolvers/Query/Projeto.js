const db = require('../../config/db');

module.exports = {
  projetoFindAll() {
    return db('projetos');
  },
  projetoFind(_, { filtro }) {
    if (!filtro) return null;
    const { id, nome } = filtro;
    if (id) {
      return db('projetos')
        .where({ id })
        .first();
    }
    if (nome) {
      return db('projetos')
        .where({ nome })
        .first();
    }
    return null;
  },
};
