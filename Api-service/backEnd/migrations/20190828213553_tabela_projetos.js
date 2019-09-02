exports.up = function(knex) {
  return knex.schema.createTable('projetos', table => {
    table.increments('id').primary();
    table
      .string('nome')
      .notNull()
      .unique();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable('projetos');
};
