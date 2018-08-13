import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { APP_ROOT } from '../config';
import { createCustomPlaylist } from '../actions';
import { Button, SharingButtons, Playlist } from './common';
import Poster from './Poster';
import UserScore from './UserScore';

class ResultScreen extends Component {
  componentWillMount() {
    this.props.createCustomPlaylist();
  }

  render() {
    const { id, user, loading } = this.props.playlist;

    return (
      <section className="section-resultado">
        <hgroup className="resultado-header">
          <Button
            ga="CTA Click"
            url="https://www.nike.com/ar/es_la/c/innovation/react"
          >
            <h2>TITULO CTA</h2>
            <p>
              Reprehenderit dignissimos ut. Qui qui magnam omnis dolorem
              occaecati architecto labore non repellendus. Aliquid labore nemo
              sit accusantium.
            </p>
            <span className="btn btn-primary">BOTÓN CTA</span>
          </Button>
        </hgroup>

        <article className="resultado-playlist">
          <Playlist user={user} id={id} loading={loading} />
        </article>

        <aside className="resultado-share">
          <SharingButtons
            shareUrl={`${APP_ROOT}/share.html`}
            tweet="Ya tengo mi playlist de XXX!"
            hashtags={['brand', 'playlist', 'music']}
          />
        </aside>

        <aside className="resultado-score">
          <UserScore />
          <Poster genre="rock" name={user} />
        </aside>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.result.playlist
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { createCustomPlaylist }
  )(ResultScreen)
);
