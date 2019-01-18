import React, { Component } from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

import api from '../../services/api';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.pushed_at = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository} withError={this.state.repositoryError}>
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
