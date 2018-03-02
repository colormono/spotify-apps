import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import MDSpinner from 'react-md-spinner';
import { createCustomPlaylist } from '../actions';
import { Header, SharingButtons, Playlist } from './common';

class ResultScreen extends Component {
  state = {
    createNewPlaylist: true
  }

  componentWillMount() {
    if (this.state.createNewPlaylist) {
      //this.props.createCustomPlaylist();
    }
  }

  renderPlaylist() {
    const { id, user, loading } = this.props.playlist;
    if (!loading) {
      return <Playlist user={user} id={id} />
    }

    return (
      <div className="spinner">
        <MDSpinner
          size={48}
          singleColor="rgb(223,37,140)"
        />
      </div>
    );
  }

  onCtaButtonPress() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'CTA Click'
    });
    window.open('https://www.nike.com/ar/es_la/c/innovation/react', '_blank');
  };

  render() {
    return (
      <div>
        <Header />

        <section className="section-resultado">

          <hgroup className="resultado-header">
            <h2>MARATÓN MUSICAL</h2>
            <p>Reprehenderit dignissimos ut. Qui qui magnam omnis dolorem occaecati architecto labore non repellendus. Aliquid labore nemo sit accusantium.</p>
            <button onClick={this.onCtaButtonPress.bind(this)} className="btn btn-primary">
              CONOCÉ NIKE REACT
            </button>
          </hgroup>

          <article className="resultado-playlist">
            {this.renderPlaylist()}
          </article>

          <aside className="resultado-share">
            <SharingButtons shareUrl={`${this.props.baseUri}/share.html`} />
          </aside>

        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    baseUri: state.config.baseUri,
    playlist: state.result.playlist
  }
}

export default withRouter(connect(mapStateToProps, {
  createCustomPlaylist
})(ResultScreen));
