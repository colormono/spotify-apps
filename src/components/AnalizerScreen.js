import _ from 'lodash';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { VideoPlayer } from './common';
import {
  fetchUserInfo,
  fetchUserTopArtists,
  fetchUserTopTracks
} from '../actions';

class Analizer extends Component {
  state = {
    showButton: false
  }

  componentWillMount() {
    this.props.fetchUserInfo();
    this.props.fetchUserTopArtists();
    this.props.fetchUserTopTracks();
  }

  componentDidMount() {
    _.delay(() => this.setState({ showButton: true }), 5000);
  }

  onButtonPress() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Skip video'
    });
  }

  renderButton() {
    if (this.state.showButton) {
      return (
        <Link to={`${process.env.PUBLIC_URL}/resultado`} onClick={this.onButtonPress()}>
          <button className="btn btn-small btn-primary">CONTINUAR</button>
        </Link>
      );
    }

    return <p>ESTAMOS ANALIZANDO TU PERFIL</p>
  }

  render() {
    return (
      <section className="section-analizer">
        <VideoPlayer />

        <div className="analizer-info">
          {this.renderButton()}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(null, {
  fetchUserInfo,
  fetchUserTopArtists,
  fetchUserTopTracks
})(Analizer));
