import _ from 'lodash';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { VideoPlayer, Spinner } from './common';
import { analyzeUserProfile } from '../actions';

class Analyzer extends Component {
  state = {
    redirect: false,
    canContinue: false
  }

  componentWillMount() {
    this.props.analyzeUserProfile();
  }

  componentDidMount() {
    if (this.props.analyzed) {
      _.delay(() => this.setState({ canContinue: true }), 5000);
    }
  }

  onButtonPress() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Skip ad'
    });
  }

  renderContent() {
    const { canContinue, redirect } = this.state;

    if (canContinue && redirect) {
      return <Redirect to={`${process.env.PUBLIC_URL}/resultado`} />
    }

    else if (canContinue && !redirect) {
      return (
        <Link to={`${process.env.PUBLIC_URL}/resultado`} onClick={this.onButtonPress.bind(this)}>
          <button className="btn btn-small btn-primary">CONTINUAR</button>
        </Link>
      );
    }

    return (
      <div>
        <Spinner size={24} singleColor="rgb(66,66,66)" />
        <small>ESTAMOS ANALIZANDO TU PERFIL</small>
      </div>
    )
  }

  render() {
    return (
      <section className="section-analyzer">
        <VideoPlayer />
        <div className="analyzer-info">
          {this.renderContent()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    analyzed: state.analyzer.analyzed
  }
}

export default withRouter(connect(mapStateToProps, { analyzeUserProfile })(Analyzer));
