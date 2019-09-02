exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuarios_projetos', table => {
    table.integer('usuario_id').unsigned();
    table.integer('projeto_id').unsigned();
    table.foreign('usuario_id').references('usuarios.id');
    table.foreign('projeto_id').references('projetos.id');
    table.primary(['usuario_id', 'projeto_id']);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usuarios_projetos');
};
