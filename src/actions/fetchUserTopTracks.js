import setUserTopTracks from './setUserTopTracks';
import getAudioFeatures from './getAudioFeatures';
import axios from 'axios';

export function fetchUserTopTracks() {
    
    return function(dispatch, getState) {
        
        let state = getState();
        
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/top/tracks',
            headers: {
                'Authorization': 'Bearer ' + state.main.accessToken
            }
        }).then(response => {
            // Cargar los tracks en el store
            dispatch(setUserTopTracks(response.data.items));
            // Solicitar los features
            dispatch(getAudioFeatures(response.data.items));
        });
    };
    
}