import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import store from './store';

import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
