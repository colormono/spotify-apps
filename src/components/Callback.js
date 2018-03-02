import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Callback extends Component {
  componentWillMount() {

    // Obtener parametros de la url
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, "\\$&");
      var regex = new RegExp("[?|#|&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Control de errores
    var error = getParameterByName('error');
    if (error) {
      this.props.loginUser()
    }

    // Token de sesión
    var token = getParameterByName('access_token');
    if (token) {
      this.props.loginUser({ token })
    }
  }

  render() {
    const { accessToken } = this.props;

    // Autorizando
    if (!accessToken) {
      return (
        <div>Autorizando...</div>
      )
    }
    // Error de autorización
    else if (accessToken === 'ERROR') {
      return (
        <Redirect to="/" />
      )
    }
    // Autorización exitosa
    return (
      <Redirect to={`${process.env.PUBLIC_URL}/analizando`} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
}

export default connect(mapStateToProps, { loginUser })(withRouter(Callback));