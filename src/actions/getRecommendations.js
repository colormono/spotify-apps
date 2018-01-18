// Recomendaciones
// https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
import SpotifyWebApi from 'spotify-web-api-js';
import setRecommendations from './setRecommendations';

export default function getRecommendations() {
    
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
        tracks = tracks.slice(0,4);

        // Solicitar Recomendaciones
        s.getRecommendations({
            seed_tracks: tracks
        }).then(
            response => dispatch(setRecommendations(response.tracks))
        );
    };
    
}