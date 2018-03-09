import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_SCOPES
} from '../../config';

class LoginButton extends Component {
  getAuthorization() {

    // Track
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Spotify Login'
    });

    // Crear URL
    let url =
      'https://accounts.spotify.com/authorize?client_id=' + SPOTIFY_CLIENT_ID
      + '&redirect_uri=' + encodeURIComponent(SPOTIFY_REDIRECT_URI)
      + '&scope=' + encodeURIComponent(SPOTIFY_SCOPES.join(' '))
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
