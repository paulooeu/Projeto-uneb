/* eslint-disable no-undef */
import React,{Component} from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {findAllQuery} from './UsuarioList'

export const CreateUsuarioMutation = gql`
mutation CreateUsuario($nome:String!,$email:String!,$senha:String!){
  createUsuario(dados:{nome:$nome,email:$email,senha:$senha}
  ){
    id
    nome 
    email
  }
}
`;
export default class UsuarioForm extends Component {
state={
  nome:'',
  email:'',
  senha:''
};
salvar=(e,CreateUsuario)=>{
  e.preventDefault()
  const {nome,email,senha}=this.state

  CreateUsuario({
    variables:{nome,email,senha},
    
    update: (proxy,{ data: { CreateUsuario }})=>{
      const data = proxy.readQuery({
        query: findAllQuery
      })

      data.usuaioFindAll.push(CreateUsuario)

    /*  proxy.witeQuery({
        query: findAllQuery,
        data
      })*/
    }
  })
  this.setState({nome:"",email:"",senha:""})
};

  handleChange =e =>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    const {nome,email,senha}= this.state
    return(
      <Mutation mutation={CreateUsuarioMutation}>
        {createUsuario=>(
          <form onSubmit={e=>this.salvar(e,createUsuario )}>
            <input name="nome" value={nome} onChange={this.handleChange}/>
            <input name="email" value={email} onChange={this.handleChange}/>
            <input name="senha" value={senha} onChange={this.handleChange}/>
            <button type="submit">Enviar</button>
          </form>
        )}
      </Mutation>
    )
  }
}
