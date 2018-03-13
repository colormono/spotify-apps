import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ConnectButton from './auth/ConnectButton';

import logo from '../images/logo.png';

class HomeScreen extends Component {
  render() {
    return (
      <section className="section-home">
        <figure>
          <img src={logo} className="home-logo" alt="logo" />
        </figure>

        <hgroup>
          <h2>Descubre qué fan de ******* eres y participa por *******.</h2>
          <ConnectButton title="Entrar con Spotify" />
        </hgroup>
      </section>
    );
  }
}

export default withRouter(HomeScreen);
