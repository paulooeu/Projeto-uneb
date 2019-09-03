import React from "react";
import ReactDOM from "react-dom";

import App from "./routes";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyled from "./styles/global";
import Header from "./components/Header";

ReactDOM.render(
  <Router>
    <Header />
    <GlobalStyled />
    <App />
  </Router>,
  document.getElementById("root")
);
