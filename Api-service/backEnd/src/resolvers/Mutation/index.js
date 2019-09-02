const usuario = require('./Usuario');
const perfil = require('./Projeto');

module.exports = {
  ...usuario,
  ...perfil,
};
