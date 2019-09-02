/* eslint-disable no-undef */
import React,{useState} from 'react'
import {Query} from "react-apollo"
import Tabela from '../../components/tabela/index'
import {findAllUsuario} from './actions'


export default function Index() {

  const[state, setState]=useState({
    columns:['id','nome','email'],
    data:[]
  });
  


  return(
    <>
    <Query query={findAllUsuario}>
      {
         ({loading,error,data})=>{
          if(loading)  return<h4>Carregando...</h4>
          if(error) console.log(error)
          
          return(
            <>     
            <Tabela titulo={"Lista de Usuario"} columns={state.columns} data={data.usuaioFindAll}/>
            </>
          )
        }    
    }
    </Query>
     </>
  ) 
  }