import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import  {ContainerFrom,ButtonDiv} from './style';
import {CreateUsuario,findAllUsuario} from './actions'
import {Mutation} from 'react-apollo'



export default class Form extends Component {
  state={nome:'',email:'',senha:''};
  
  salvar=(e,CreateUsuario)=>{
    e.preventDefault()
    const {nome,email,senha}=this.state
  
    CreateUsuario({
      variables:{nome,email,senha},
      
      update: (proxy,{ data: { CreateUsuario }})=>{
        const data = proxy.readQuery({
          query: findAllUsuario
        })
  
        data.usuaioFindAll.push(CreateUsuario)
  
     
      }
    })
    this.setState({nome:"",email:"",senha:""})
  };

   handleChange =e =>{
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const {nome,email,senha}= this.state
    
  return (
    <ContainerFrom>      
          
<h1>Cadastro de Usúario</h1>

    <Mutation mutation={CreateUsuario}>
    {createUsuario=>(         
        <form onSubmit={e=>this.salvar(e,createUsuario )}>
            <input name="nome" value={nome} placeholder="Nome Completo" onChange={this.handleChange}/>
            <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange}/>
            <input type="password" name="senha" value={senha} placeholder="Senha" onChange={this.handleChange}/>
                 
          <ButtonDiv>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
                      >
            Salvar
          </Button>
          </ButtonDiv>

          <Grid container justify="flex-end">
          
          </Grid>
        </form>
   
      


    )}
    </Mutation>
    </ContainerFrom>
  )}
}
