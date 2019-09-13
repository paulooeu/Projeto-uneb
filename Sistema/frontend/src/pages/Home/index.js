import React, { useState } from "react";
import home from "../../assets/images/home.svg";
import List from "../../components/List";

// import { Container } from './styles';

export default function Home() {
  const [projetos, setProjetos] = useState([
    {
      titulo: "Projeto pedir aumento ao chefe",
      usuario: "Paulo",
      descricao: " " + "Esse projeto serve para pedir aumento ao chefe"
    },
    {
      titulo: "Projeto pedir aumento para Paulo",
      usuario: "Iury",
      descricao: " " + "Esse projeto serve para pedir aumento a ZCR para Paulo"
    },
    {
      titulo: "Projeto negar aumento a Paulo",
      usuario: "ZRC",
      descricao: " " + "Esse projeto serve para negar o aumento para Paulo, porque ele é um merda"
    }
  ]);
  return (
    <div className="page-container page">
      <main data-router-wrapper>
        <section data-router-view="home" class="home">
          <div class="home-content">
            <List projetos={projetos} />

            <img src={home} alt="home" />
          </div>
        </section>
      </main>
    </div>
  );
}
