import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginButton } from './common';

import logo from '../images/logo.png';

class HomeScreen extends Component {
  renderLoginButton() {
    return <LoginButton title="Entrar con Spotify" config={this.props.config} />
  }

  render() {
    return (
      <section className="login">

        <hgroup>
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
          </h1>
          <h2>Descubre qué fan de ******* eres y participa por *******.</h2>
        </hgroup>

        {this.renderLoginButton()}
        <Link to="/trivia">
          <button className="btn">Entrar como invitado</button>
        </Link>
      </section>
    );
  };
};

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

export default connect(mapStateToProps)(HomeScreen);