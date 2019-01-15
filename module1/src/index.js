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
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Helloau</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={() => {}} />
        <Button onClick={this.handleClick}>Enviaar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
