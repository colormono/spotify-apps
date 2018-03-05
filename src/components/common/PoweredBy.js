import React, { Component } from 'react';
import logo from '../../images/logo-spotify-white.png';

class PoweredBy extends Component {
  render() {
    return (
      <footer className="footer">
        <small>POWERED BY</small>
        <span>
          <img src={logo} alt="Spotify" />
        </span>
      </footer>
    );
  }
}

export { PoweredBy };
