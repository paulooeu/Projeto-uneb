import React from 'react';
import {Link} from 'react-router-dom'

// import { Container } from './styles';

export default function UsuarioItem({usuario:{id,nome,email,projetos}}) {
  console.log(nome)
  return (
    <div className="card card-body mb-3">
      <div className="col-md-9">
        <h4>Nome: {nome}</h4>
        <h5>Email: {email}</h5>
        {projetos.map(projeto=>(
          <p>Projeto: {projeto.nome} </p>
        ))}
      </div>
      <div className="col-md-3">
      <Link to={`/usuario/${id}`} className="btn btn-secondary">Projeto</Link>
      </div>
    </div>
    
  );
}
