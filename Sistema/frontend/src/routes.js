import React, { Component } from "react";

import Home from "./pages/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import Projeto from "./pages/Projeto";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./styles/slideTransition.scss";

class routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="routes">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? "left"
                : "right"
            }
          >
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/projeto" exact component={Projeto} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(routes);
