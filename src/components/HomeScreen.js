import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginButton } from './common';

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
          <LoginButton title="Entrar con Spotify" config={this.props.config} />
        </hgroup>

      </section>
    );
  };
};

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

export default withRouter(connect(mapStateToProps)(HomeScreen));