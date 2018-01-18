// Video Documentation: https://github.com/CookPete/react-player
// Video Example: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ReactGA from 'react-ga';
//import Duration from './duration';

const MULTIPLE_SOURCES = [
    { src: process.env.PUBLIC_URL + '/media/video.mp4', type: 'video/mp4' },
    { src: process.env.PUBLIC_URL + '/media/video.webm', type: 'video/webm' },
    { src: process.env.PUBLIC_URL + '/media/video.mov', type: 'video/mov' },
    { src: process.env.PUBLIC_URL + '/media/video.ogg', type: 'video/ogg' }
]

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
    }

    onProgress = state => {
        this.setState(state);
    }
    
    onEnded = state => {
        console.log("termino el video");
        this.setState({ ended: true });

        ReactGA.event({
            category: 'Evento',
            action: 'Vio video completo',
            label: 'Advertising',
            nonInteraction: true
        });
    }

    trackEvent() {
        ReactGA.event({
            category: 'Clicks',
            action: 'Click',
            label: 'Skip video'
        });
    }
    
    render() {
        const { url, playing, controls, duration, played, ended } = this.state;

        if(!ended) {
            return (
                <section className="video">
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
                    <div className="info">
                    {
                        // Skip video después de 10 segundos
                        (duration * played) < 10
                        ? <p>
                            <span>ESTAMOS ANALIZANDO TU PERFIL</span>
                            { //<br>elapsed: <Duration seconds={duration * played} /></p> 
                            }
                        </p>
                        : <Link to={`${process.env.PUBLIC_URL}/resultado`}><button className="btn btn-small">Continuar</button></Link>
                    }
                    </div>
                </section>
            )
        }
        return (
            <div>
                <Redirect to={`${process.env.PUBLIC_URL}/resultado`} onClick={this.trackEvent()} />
            </div>
        );
    }
}

export default withRouter(VideoPlayer);