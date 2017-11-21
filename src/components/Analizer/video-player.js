// Video Documentation: https://github.com/CookPete/react-player
// Video Example: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Duration from './duration';

const MULTIPLE_SOURCES = [
    { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4' },
    { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv', type: 'video/ogv' },
    { src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm', type: 'video/webm' }
]

export default class VideoPlayer extends Component {
    state = {
        //url: 'http://www.youtube.com/watch?v=xa8ax-zHoGo',
        url: MULTIPLE_SOURCES,
        playing: true,
        controls: false,
        played: 0,
        duration: 0,
        ended: false
    }

    onProgress = state => {
        this.setState(state);
    }
    
    render() {
        const { url, playing, controls, duration, played } = this.state;

        if(!this.ended) {
            return (
                <div>
                    <ReactPlayer 
                        url={url}
                        playing={playing} 
                        controls={controls}
                        onReady={() => console.log('onReady')}
                        onStart={() => console.log('onStart')}
                        onEnded={() => this.setState({ ended: true })}
                        onProgress={this.onProgress}
                        onDuration={duration => this.setState({ duration })}
                        style={{ margin: '0px auto' }}
                    />
                    {
                        // Skip video después de 10 segundos
                        (duration * played) < 10
                        ? <div>
                            <p><em>"Ajustando parámetros según tus preferencias musicales"</em></p>
                            <p>elapsed: <Duration seconds={duration * played} /></p>
                        </div>
                        : <Link to="/resultado"><button className="btn btn-primary">Skip video</button></Link>
                    }
                </div>
            )
        }
        return (
            <div>
                <Redirect to="/resultado"/>
            </div>
        );
    }
}