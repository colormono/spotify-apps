// Recomendaciones: https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
// Create Playlist: https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.createplaylist
// Add Tracks: https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.addtrackstoplaylist
// Remove Tracks: https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.removetracksfromplaylist
import SpotifyWebApi from 'spotify-web-api-js';
import setRecommendations from './setRecommendations';
import setCustomPlaylist from './setCustomPlaylist';

export function createCustomPlaylist() {
    return function(dispatch, getState) {

        // Estado
        //var self = this;
        let state = getState();
        let userId = state.mainReducer.user.id;

        // Solicitar autorización
        let s = new SpotifyWebApi();
        s.setAccessToken( state.mainReducer.accessToken );

        // Semillas para obtener recomendaciones
        let seeds = [];
        state.mainReducer.userTopTracks.map((track, index) => {
            return seeds.push(track.id);
        });
        seeds = seeds.slice(0,4);

        // Solicitar Recomendaciones
        s.getRecommendations({
            seed_tracks: seeds
        }).then(function(data){

            // Actualizar estado
            dispatch(setRecommendations(data.tracks));

            // Crear playlist
            s.createPlaylist( userId, {
                // Personalizar desde config.js
                name: state.config.customPlaylistTitle,
                description: state.config.customPlaylistDescription,
                public: false,
                collaborative: false
            }).then( function(data){
                agregarCanciones(data);
            });
        });

        // Agregar canciones
        function agregarCanciones(data) {
            let playlistId = data.id;
            let tracks = [];
            state.mainReducer.recommendations.map((track, index) => {
                return tracks.push("spotify:track:"+track.id);
            });
            s.addTracksToPlaylist(userId, playlistId, tracks ).then(
                function(data) {
                    let customPlaylist = {
                        id: playlistId,
                        user: userId,
                        tracks: tracks
                    };
                    dispatch(setCustomPlaylist(customPlaylist));
                }
            );
        }

    };
}