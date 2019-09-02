const db = require('../../config/db');

module.exports = {
  usuaioFindAll() {
    return db('usuarios');
  },
  usuarioFind(_, { filtro }) {
    if (!filtro) return null;
    const { id, email } = filtro;
    if (id) {
      return db('usuarios')
        .where({ id })
        .first();
    }
    if (email) {
      return db('usuarios')
        .where({ email })
        .first();
    }
    return null;
  },
};
