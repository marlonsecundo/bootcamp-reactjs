import React, { Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Button extends React.Component {
  static defaultProps = {
    children: 'Salvar',
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
  };

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
    alert('Botão Clicado');
  }

  render() {
    return (
      <Fragment>
        <h1>Hellou</h1>
        <Button onClick={() => {}} />
        <Button onClick={this.handleClick}>Enviaar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
