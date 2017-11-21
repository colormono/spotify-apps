import setUserPlaylists from './setUserPlaylists';
import SpotifyWebApi from 'spotify-web-api-js';

export function fetchUserPlaylists() {
    return function(dispatch, getState) {
        
        // Get Authorization
        let state = getState();
        let s = new SpotifyWebApi();
        s.setAccessToken( state.mainReducer.accessToken );
        
        // Get Playlists
        s.getUserPlaylists({
            limit: 4
        }).then(
            response => dispatch(setUserPlaylists(response.items))
        );
  };
}
