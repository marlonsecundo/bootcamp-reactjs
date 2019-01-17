import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

import api from '../../services/api';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response],
      });
    } catch (err) {}
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
