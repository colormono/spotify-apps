/**
 * HTML5 Video player
 * Reproductor de video con cientos de opciones de personalización
 *
 * Documentation: https://github.com/CookPete/react-player
 * Example: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactGA from 'react-ga';

const MULTIPLE_SOURCES = [
  { src: process.env.PUBLIC_URL + '/media/video.mp4', type: 'video/mp4' },
  { src: process.env.PUBLIC_URL + '/media/video.webm', type: 'video/webm' },
  { src: process.env.PUBLIC_URL + '/media/video.mov', type: 'video/mov' },
  { src: process.env.PUBLIC_URL + '/media/video.ogg', type: 'video/ogg' }
];

class VideoPlayer extends Component {
  state = {
    //url: 'http://www.youtube.com/watch?v=xa8ax-zHoGo',
    url: MULTIPLE_SOURCES,
    playing: true,
    controls: true,
    preload: true,
    played: 0,
    duration: 0,
    ended: false
  };

  onProgress = state => {
    this.setState(state);
  };

  onEnded = state => {
    this.setState({ ended: true });

    ReactGA.event({
      category: 'Evento',
      action: 'Vio video completo',
      label: 'Advertising',
      nonInteraction: true
    });
  };

  render() {
    const { url, playing, controls, duration, played, ended } = this.state;

    if (!ended) {
      return (
        <article className="video-player">
          <ReactPlayer
            url={url}
            playing={playing}
            controls={controls}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onEnded={this.onEnded}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
            style={{ margin: '0px auto' }}
            className="player"
          />
          <div className="hidden">
            {
              duration * played > 5 ? (
                <p>Vió más de 5 segundos</p>
              ) : (
                  <p>Vio menos de 5 segundos</p>
                )
            }
          </div>
        </article>
      );
    }

    return <Redirect to={`${process.env.PUBLIC_URL}/resultado`} />
  }
}

export { VideoPlayer };
