import React, { Component } from 'react';
import ReactGA from 'react-ga';
import MDSpinner from 'react-md-spinner';

class Playlist extends Component {
  trackEvent() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Escuchar en Spotify'
    });
  }

  renderContent() {
    if (this.props.loading || !this.props.id) {
      return <MDSpinner
        className="spinner"
        size={48}
        singleColor="rgb(0,185,244)"
      />
    } else {
      return <iframe
        src={`https://open.spotify.com/embed/user/${this.props.user}/playlist/${this.props.id}`}
        width="300"
        height="300"
        frameBorder="0"
        title="SpotifyIframe"
      />
    }
  }

  render() {
    return (
      <div className="playlist">
        {this.renderContent()}
      </div>
    );
  }
}

export { Playlist };
