const db = require('../../config/db');

module.exports = {
  usuarios(projeto) {
    return db('usuarios')
      .join('usuarios_projetos', 'usuarios.id', 'usuarios_projetos.usuario_id')
      .where({ projeto_id: projeto.id });
  },
};
