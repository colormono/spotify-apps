import setUserTopArtists from './setUserTopArtists';
import axios from 'axios';

export function fetchUserTopArtists() {
    
    return function(dispatch, getState) {
        
        let state = getState();
        
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/top/artists',
            headers: {
                'Authorization': 'Bearer ' + state.main.accessToken
            }
        }).then(response => dispatch(setUserTopArtists(response.data.items)));
    };
    
}