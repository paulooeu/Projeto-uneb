const usuario = require('./Usuario');
const projeto = require('./Projeto');

module.exports = {
  ...usuario,
  ...projeto,
};
