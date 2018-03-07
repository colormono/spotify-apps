import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Callback extends Component {
  state = {
    anyToken: false
  };

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

    // Token de sesión
    var token = getParameterByName('access_token');
    if (token) {
      this.setState({ anyToken: true });
      this.props.loginUser({ token })
    } else {
      this.props.loginUser(false)
    }

  }

  render() {
    const { accessToken, errors } = this.props;
    console.log(errors);

    // Error de autorización
    if (!this.state.anyToken && errors !== '') {
      return (
        <Redirect to="/" />
      )
    }

    // Autorizando
    if (!accessToken) {
      return <div>Autorizando...</div>
    }

    // Autorización exitosa
    return (
      <Redirect to={`${process.env.PUBLIC_URL}/analizando`} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken,
    errors: state.auth.error
  };
}

export default connect(mapStateToProps, { loginUser })(withRouter(Callback));