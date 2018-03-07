import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { createCustomPlaylistWithSeeds } from '../actions';

class Replay extends Component {

  onButtonClick() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Nueva Playlist Click'
    });

    let seeds = {
      seed_genres: ["dance", "electro", "house"]
    }

    this.props.createCustomPlaylistWithSeeds(seeds);
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)} className="btn btn-primary">
          Crear otra playlist
        </button>
      </div>
    );
  }
}

export default connect(null, { createCustomPlaylistWithSeeds })(Replay);