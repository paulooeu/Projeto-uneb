import React from 'react';
import {ApolloProvider} from "react-apollo"
import client from "./services/apollo"

import Home from './pages/usuario/index'
import {BrowserRouter as Rota, Route} from 'react-router-dom'


function App() {
  return (
    <ApolloProvider client={client}> 
      <Rota>  
        <div className="container">
        <Route exact path="/" component={Home}/>  
     
        </div> 
    </Rota>
    </ApolloProvider>
  );
  
}

export default App;
