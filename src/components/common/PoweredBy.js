import React, { Component } from 'react';
import logo from '../../images/logo-spotify-white.png';

class PoweredBy extends Component {
  render() {
    return (
      <div className='poweredBy'>
        <small>POWERED BY</small>
        <span>
          <img src={logo} alt='Spotify' />
        </span>
      </div>
    );
  }
}

export { PoweredBy };
