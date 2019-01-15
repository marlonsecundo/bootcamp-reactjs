import React, { Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

class App extends React.Component {
  state = {
    counter: 0,
  };

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
