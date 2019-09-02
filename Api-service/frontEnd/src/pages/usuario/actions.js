import gql from "graphql-tag"
  
  export const findAllUsuario=gql`
  query usuarios{
  usuaioFindAll{
    id
    nome
    email
    senha
  
  }
}
  `;
export const CreateUsuario = gql`
mutation CreateUsuario($nome:String!,$email:String!,$senha:String!){
  createUsuario(dados:{nome:$nome,email:$email,senha:$senha}
  ){
    id
    nome 
    email
    senha
  }
}
`;