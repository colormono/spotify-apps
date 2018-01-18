import React, { Component } from 'react';
import { connect } from 'react-redux';
import Background from './background';
import logo from '../../images/logo.png';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import Modal from '../Modal';

class Login extends Component {
  render() {
    return (
      <section className="login">
        <article>
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
          </h1>
          <h2>Descubre qué fan de ******* eres y participa por *******.</h2>
          {this.props.isLogin ? <LogoutButton /> : <LoginButton />}
        </article>
        <Modal>
          <h1>Hello world!</h1>
          <Background />
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.main.isLogin
  };
}

export default connect(mapStateToProps)(Login);