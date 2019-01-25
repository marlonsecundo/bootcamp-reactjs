import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'rc-slider/assets/index.css';

import GlobalStyle from './styles/global';
import Sidebar from './components/SideBar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  </BrowserRouter>
);

export default App;
