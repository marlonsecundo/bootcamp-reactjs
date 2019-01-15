import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { throws } from "assert";

class Button extends React.Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends React.Component {
  handleClick() {
    alert("Botão Clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Hellou</h1>
        <Button onClick={this.handleClick}>Enviaar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
