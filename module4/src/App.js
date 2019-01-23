import React, { Component, Fragment } from 'react';

import GlobalStyle from './styles/global';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <h1>Hello World</h1>
      </Fragment>
    );
  }
}

export default App;
