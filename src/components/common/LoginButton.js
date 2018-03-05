import React, { Component } from 'react';
import ReactGA from 'react-ga';

class LoginButton extends Component {
  getAuthorization() {
    const { clientId, redirectUri, scopes } = this.props.config;

    // Track
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Spotify Login'
    });

    // Crear URL
    let url =
      'https://accounts.spotify.com/authorize?client_id=' + clientId
      + '&redirect_uri=' + encodeURIComponent(redirectUri)
      + '&scope=' + encodeURIComponent(scopes.join(' '))
      + '&response_type=token'
      + '&show_dialog=true';

    // Redirect
    window.location.href = url;
  }

  render() {
    return (
      <button onClick={this.getAuthorization.bind(this)} className="btn btn-primary">
        <i className='icon-spotify'></i> {this.props.title ? this.props.title : 'Entrar con Spotify'}
      </button>
    );
  }
}

export { LoginButton };
