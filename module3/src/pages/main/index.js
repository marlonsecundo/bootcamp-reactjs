import React, { Fragment } from 'react';

export default class Main extends React.Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={(e) => {
              this.setState({ repositoryInput: e.target.value });
            }}
          />
          <button type="submit">Adicionar</button>
          <ul>
            <li>
              <p>
                <strong>facebook/react</strong> (descricao descricao descricao descricao descricao
                descricao descricao descricao descricao descricao descricao descricao descricao
                descricao)
              </p>
              <a href="http://github.com/facebook/react">Acessar</a>
            </li>
          </ul>
        </form>
      </Fragment>
    );
  }
}
