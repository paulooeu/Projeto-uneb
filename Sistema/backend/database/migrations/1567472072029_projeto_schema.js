"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjetoSchema extends Schema {
  up() {
    this.create("projetos", table => {
      table.increments();
      table.string("titulo").notNullable();
      table.string("descricao").notNullable();
      table.string("usuario_id").notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("projetos");
  }
}

module.exports = ProjetoSchema;
