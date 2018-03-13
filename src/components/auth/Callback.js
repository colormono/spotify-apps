import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authUser } from '../../actions';

class Callback extends Component {
  state = {
    hasToken: false
  };

  componentWillMount() {
    // Obtener parametros de la url
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, '\\$&');
      var regex = new RegExp('[?|#|&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Token de sesión
    var token = getParameterByName('access_token');
    if (token) {
      this.setState({ hasToken: true });
      this.props.authUser({ token });
    } else {
      this.props.authUser(false);
    }
  }

  render() {
    const accessToken = localStorage.getItem('token');
    const { errors } = this.props;

    // Error de autorización
    if (!this.state.hasToken && errors !== '') {
      return <Redirect to="/" />;
    }

    // Autorizando
    if (!accessToken) {
      return <div>Autorizando...</div>;
    }

    // Autorización exitosa
    return <Redirect to={`${process.env.PUBLIC_URL}/analizando`} />;
  }
}

function mapStateToProps(state) {
  return {
    errors: state.auth.error
  };
}

export default connect(mapStateToProps, { authUser })(withRouter(Callback));
