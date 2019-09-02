const db = require('../../config/db');

module.exports = {
  projetos(usuario) {
    return db('projetos')
      .join('usuarios_projetos', 'projetos.id', 'usuarios_projetos.projeto_id')
      .where({ usuario_id: usuario.id });
  },
};
