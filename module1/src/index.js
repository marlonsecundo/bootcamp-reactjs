import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount = () => {};

  shouldComponentUpdate = (nextProps, nextState) => nextState.counter <= 10;

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
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
