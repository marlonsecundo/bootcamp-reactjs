import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends React.Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hellou</h1>
        <Button />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
