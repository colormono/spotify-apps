import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VideoPlayer } from './common';
import {
  fetchUserInfo,
  fetchUserTopArtists,
  fetchUserTopTracks
} from '../actions';

class Analizer extends Component {
  componentWillMount() {
    this.props.fetchUserInfo();
    this.props.fetchUserTopArtists();
    this.props.fetchUserTopTracks();
  }

  render() {
    return (
      <VideoPlayer />
    );
  }
}

export default connect(null, {
  fetchUserInfo,
  fetchUserTopArtists,
  fetchUserTopTracks
})(Analizer);
