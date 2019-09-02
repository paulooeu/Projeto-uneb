import React,{Component} from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import {Link} from 'react-router-dom'


// import { Container } from './styles';

const findQuery =gql`
query usuario($id:Int!){
  usuarioFind(
    filtro:{
      id:$id
    }
  ){
    id
    nome
    email
    projetos{
      id
      nome
    }
  }
}
`
export default class Usuario extends Component {

  render(){
    let{id}=this.props.match.params
    id = parseInt(id)
    return (
<>
<Query query={findQuery} variables={{id}}>
  {

({loading,error,data})=>{
  if(loading)  return<h4>Carregando...</h4>
  if(error) console.log(error)
  return <div>
    <h1 className="display-4 my-3">
      <span className="text-dark">
        id: {data.usuarioFind.id}<br/>
        nome: {data.usuarioFind.nome}<br/>
        email: {data.usuarioFind.email}<br/>
        {data.usuarioFind.projetos.map(projeto=>(
          <li key={projeto.id}>
            {projeto.nome}
          </li>
         
        ))}
        
      </span>
    </h1>
  </div>
  }}
</Query>
</>
    );
  }
  
}
