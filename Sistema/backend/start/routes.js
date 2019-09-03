"use strict";

const Route = use("Route");

Route.resource("projetos", "ProjetoController").apiOnly();
