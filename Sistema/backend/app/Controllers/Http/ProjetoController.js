"use strict";
const Projeto = use("App/Models/Projeto");
class ProjetoController {
  async index({ request, response, view }) {
    const projetos = await Projeto.all();
    return projetos;
  }

  async create({ request, response, view }) {}

  async store({ request, response }) {
 
    const data = request.only(["titulo", "descricao", "email"]);
    const projeto = await Projeto.create(data);
    return projeto;
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProjetoController;
