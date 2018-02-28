import React, { Component } from 'react';
import logo from '../../images/logo-spotify-green.png';

class PoweredBy extends Component {
  render() {
    return (
      <div>
        <aside className="social-networks">
          <ul>
            <li>
              <a
                href="http://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="item item-facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="item item-instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="http://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="item item-youtube"
              >
                YouTube
              </a>
            </li>
          </ul>
        </aside>
        <footer className="footer">
          <small>POWERED BY</small>
          <span>
            <img src={logo} alt="Spotify" />
          </span>
        </footer>
      </div>
    );
  }
}

export { PoweredBy };
