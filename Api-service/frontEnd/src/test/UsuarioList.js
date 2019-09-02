import React, { Component,Fragment } from "react"
import {Query} from "react-apollo"
import gql from "graphql-tag"
import UsuarioItem from './UsuarioItem'
import {Link} from 'react-router-dom'



 export const findAllQuery=gql`
query usuarios{
  usuaioFindAll{
    id
    nome
    email
    projetos{
      nome
    }
  }
}
`;

export default class UsuarioList extends Component{
  render() {
    return(   
      <Fragment>
    <h1>Usuarios <Link to={`/usuario`} className="btn btn-secondary">Cadastro</Link></h1>

    

      <Query query={findAllQuery}>
        {
          ({loading,error,data})=>{
           if(loading)  return<h4>Carregando...</h4>
           if(error) console.log(error)
           
           return <Fragment>
             {
               data.usuaioFindAll.map(usuario=>(
                 <UsuarioItem key={usuario.id} usuario={usuario}/>
               ))
             }
           </Fragment>
          }
        }
      </Query>
      </Fragment>
    )
  }
}