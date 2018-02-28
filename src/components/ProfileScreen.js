import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './Profile/user-profile';
import UserPlaylists from './Profile/user-playlists';
import UserTopArtists from './Profile/user-top-artists';
import UserTopTracks from './Profile/user-top-tracks';
import AudioFeatures from './Profile/audio-features';

class Game extends Component {
  render() {
    return (
      <div>
        <UserProfile user={this.props.user} />
        <AudioFeatures tracks={this.props.analisis} />
        <UserPlaylists playlists={this.props.playlists} />
        <UserTopArtists artists={this.props.artists} />
        <UserTopTracks tracks={this.props.tracks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.main.user,
    playlists: state.main.userPlaylists,
    artists: state.main.userTopArtists,
    tracks: state.main.userTopTracks,
    analisis: state.main.audioFeatures
  }
}

export default connect(mapStateToProps)(Game);