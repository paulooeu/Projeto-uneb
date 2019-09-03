import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default function Header() {
  return (
    <nav>
      <ul class="nav-list">
        <Link class="nav-links" to="/">
          Projetos
        </Link>
        <Link class="nav-links" to="/projeto">
          Cadastro
        </Link>
      </ul>
    </nav>
  );
}
