import React, { useState } from "react";
import home from "../../assets/images/home.svg";
import List from "../../components/List";

// import { Container } from './styles';

export default function Home() {
  const [projetos, setProjetos] = useState([
    {
      titulo: "Projeto 1",
      usuario: "Paulo Sergio",
      descricao: " " + "Esse projeto é para encher o saco"
    },
    {
      titulo: "Projeto 2",
      usuario: "Paulo Sergio",
      descricao: " " + "Esse projeto é para encher o saco"
    },
    {
      titulo: "Projeto 3",
      usuario: "Paulo Sergio",
      descricao: " " + "Esse projeto é para encher o saco"
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
