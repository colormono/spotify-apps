import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './Profile/user-profile';
import UserTopArtists from './Profile/user-top-artists';
import UserTopTracks from './Profile/user-top-tracks';
//import AudioFeatures from './Profile/audio-features';

class Game extends Component {
  render() {
    return (
      <div>
        <UserProfile user={this.props.user} />
        <UserTopArtists artists={this.props.artists} />
        <UserTopTracks tracks={this.props.tracks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    artists: state.analizer.topArtists,
    tracks: state.analizer.topTracks,
  }
}

export default connect(mapStateToProps)(Game);