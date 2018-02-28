import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { createCustomPlaylist } from '../actions';
import { SharingButtons, Playlist } from './common';

class ResultScreen extends Component {
  state = {
    useCustomPlaylist: true,
    playlistLoading: true
  }

  componentWillMount() {
    if (this.state.useCustomPlaylist) {
      this.props.createCustomPlaylist();
    } else {

      const { id, user } = this.props.playlist;
      // this.props.loadPlaylist(user, id);
    }
  }

  componentDidMount() {
    this.setState({ playlistLoading: false });
  }

  renderPlaylist() {
    const { id, user } = this.props.playlist;

    if (id) {
      return <Playlist user={user} id={id} loading={this.state.playlistLoading} />
    }
  }

  onCtaButtonPress() {
    // Trackar evento
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Descargar App'
    });
    window.open('http://miseriehbo.com/adlink.php', '_blank');
  };

  render() {

    return (
      <section className="resultado">
        <div className="row">
          <article className="perfil">

            <hgroup>
              <h2>ERES <strong>{Math.round(12.5)}%</strong></h2>
              <button onClick={this.onCtaButtonPress.bind(this)}>Descarga la app de HBOGO y obtén 1 mes gratis</button>
            </hgroup>

          </article>

          <article className="playlist">
            {this.renderPlaylist()}
            <SharingButtons serie={this.state.serieNombre} shareUrl={'http://miseriehbo.com/share-id.html'} />
          </article>

        </div>

      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.result.playlist
  }
}

export default connect(mapStateToProps, {
  createCustomPlaylist
})(ResultScreen);
