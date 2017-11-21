// Audio Features
// https://developer.spotify.com/web-api/get-audio-features/
import SpotifyWebApi from 'spotify-web-api-js';
import setAudioFeatures from './setAudioFeatures';

export default function getAudioFeatures() {
    
    return function(dispatch, getState) {
        
        // Solicitar autorización
        let state = getState();
        let s = new SpotifyWebApi();
        s.setAccessToken( state.mainReducer.accessToken );

        // Armar arreglo de ID de tracks
        let tracks = [];
        state.mainReducer.userTopTracks.map((track, index) => {
            return tracks.push(track.id);
        });

        // Solicitar Audio Features
        s.getAudioFeaturesForTracks(tracks).then(
            response => dispatch(setAudioFeatures(response.audio_features))
        );
    };
    
}