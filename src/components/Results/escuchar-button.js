import React from 'react';
import ReactGA from 'react-ga';

function trackEvent() {
    ReactGA.event({
        category: 'Clicks',
        action: 'Click',
        label: 'Escuchar en Spotify'
    });
}

const EscucharButton = (props) => {
    return(
        <div>
            <a href={"https://open.spotify.com/user/"+props.playlist_user+"/playlist/"+props.playlist_id} target="_blank" rel="noopener noreferrer" className="btn btn-small" onClick={ () => trackEvent() }>
                {props.children}
            </a>
        </div>
    );
}

export default EscucharButton;