/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const db = require('../../config/db');

const { usuarioFind: obterUsuario } = require('../Query/Usuario');

module.exports = {
  async createProjeto(_, { dados }) {
    try {
      const idsUsuarios = [];
      if (dados.usuarios) {
        for (const filtro of dados.usuarios) {
          const usuario = await obterUsuario(_, {
            filtro,
          });
          if (usuario) idsUsuarios.push(usuario.id);
        }
      }

      delete dados.usuarios;
      const [id] = await db('projetos')
        .returning('id')
        .insert(dados);

      for (const usuario_id of idsUsuarios) {
        await db('usuarios_projetos').insert({ usuario_id, projeto_id: id });
      }
      return db('projetos')
        .where({ id })
        .first();
    } catch (error) {
      throw new Error(error);
    }
  },
};
