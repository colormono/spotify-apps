// Audio Features
// https://developer.spotify.com/web-api/get-audio-features/
import SpotifyWebApi from 'spotify-web-api-js';
import setAudioFeatures from './setAudioFeatures';
import calcUserScore from './calcUserScore';

export default function getAudioFeatures() {
    
    return function(dispatch, getState) {
        
        // Solicitar autorización
        let state = getState();
        let s = new SpotifyWebApi();
        s.setAccessToken( state.main.accessToken );

        // Armar arreglo de ID de tracks
        let tracks = [];
        state.main.userTopTracks.map((track, index) => {
            return tracks.push(track.id);
        });

        // Solicitar Audio Features
        s.getAudioFeaturesForTracks(tracks).then(response => {
            // Cargar features en el store
            dispatch(setAudioFeatures(response.audio_features))
            
            // Analizar gustos según reglas de la mecanica
            dispatch(calcUserScore(response.audio_features));
        });
    };
    
}