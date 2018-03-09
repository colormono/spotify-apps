import _ from 'lodash';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { VideoPlayer } from './common';
import { analyzeUserProfile } from '../actions';

class Analyzer extends Component {
  state = {
    showButton: false
  }

  componentWillMount() {
    this.props.analyzeUserProfile();
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
        <Link to={`${process.env.PUBLIC_URL}/resultado`} onClick={this.onButtonPress.bind(this)}>
          <button className="btn btn-small btn-primary">CONTINUAR</button>
        </Link>
      );
    }

    return <p>ESTAMOS ANALIZANDO TU PERFIL</p>
  }

  render() {
    return (
      <section className="section-analyzer">
        <VideoPlayer />

        <div className="analyzer-info">
          {this.renderButton()}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(null, { analyzeUserProfile })(Analyzer));
