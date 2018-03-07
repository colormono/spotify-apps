import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Playlist extends Component {
  onButtonPress() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Escuchar en Spotify'
    });
    window.open(`https://open.spotify.com/embed/user/${this.props.user}/playlist/${this.props.id}`, '_blank');
  };

  render() {
    return (
      <div className="playlist-container">
        <iframe
          src={`https://open.spotify.com/embed/user/${this.props.user}/playlist/${this.props.id}`}
          width="300"
          height="280"
          frameBorder="0"
          title="SpotifyIframe"
        />
        <button onClick={() => this.onButtonPress()} className="btn btn-small btn-white">
          <i className='icon-spotify'></i> ESCUCHAR EN SPOTIFY
        </button>
      </div>
    );
  }
}

export { Playlist };
