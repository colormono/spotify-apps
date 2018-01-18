// Create Playlist: https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.createplaylist
// Recomendaciones: https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
// Add Tracks: https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.addtrackstoplaylist
import SpotifyWebApi from 'spotify-web-api-js';
import setCustomPlaylist from './setCustomPlaylist';
import axios from 'axios';

export function createCustomPlaylist(newScores) {
    return function(dispatch, getState) {

        // Obtener state
        //var self = this;
        let state = getState();
        let userId = state.main.user.id;
        let seeds = [];
        let scores = [];
        
        // Recomendaciones por canciones
        /*
        state.main.userTopTracks.map((track, index) => {
            return seeds.push(track.id);
        });
        seeds = seeds.slice(0,4);
        */

        // Recomendaciones por generos
        if(newScores){ 
            // Reordenar scores
            newScores.sort(function(a,b){ return a[1] - b[1]; });
            newScores.reverse();

            // Convertirlo en objero
            for(let i=0; i<newScores.length; i++){
                scores.push({
                    id: newScores[i][0],
                    percent: newScores[i][1]
                });
            }
        } else { 
            scores = state.main.userScore;
        }
        console.log(scores);

        // Buscar por ID
        function findById(source, id) {
            for (var i = 0; i < source.length; i++) { if (source[i].id === id) { return source[i]; } }
            return null;
        }
        
        // Como Spotify acepta sólo 5 semillas, se reparten así
        let seedsCount = [3,1,1,0];
        for(let i=0; i<scores.length; i++){

            // Traer generos semillas de la serie según la mecánica
            let serie = findById(state.mecanica, scores[i].id);
            //console.log(serie);

            // Plantar generos
            for(let j=0; j<seedsCount[i]; j++){
                // random dentro de la serie
                let g = Math.floor(Math.random()*serie.genresSeeds.length);
                seeds.push(serie.genresSeeds[g]);
            }
        }
        seeds = seeds.slice(0,5);
        console.log(seeds);

        // Solicitar autorización
        let s = new SpotifyWebApi();
        s.setAccessToken( state.main.accessToken );

        // Solicitar Recomendaciones
        s.getRecommendations({
            seed_genres: seeds
        }).then(function(data){
            //console.log(data);

            // Obtener tracks recomendados
            //dispatch(setRecommendations(data.tracks));
            let tracks = [];
            data.tracks.map((track, index) => {
                return tracks.push("spotify:track:"+track.id);
            });

            // Crear playlist
            s.createPlaylist( userId, {
                // Personalizar desde config.js
                name: state.config.customPlaylistTitle,
                description: state.config.customPlaylistDescription,
                public: false,
                collaborative: false
            })
            .then( function(data){
                let playlistId = data.id;

                // Agregar canciones a la playlist
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

                // Convertir portada a Base64 encoded JPEG
                // Importante: las imagenes deben medir 320x320px y no pesar mas de 100k
                // https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
                function toDataURL(url, callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        var reader = new FileReader();
                        reader.onloadend = function() {
                            callback(reader.result);
                        }
                        reader.readAsDataURL(xhr.response);
                    };
                    xhr.open('GET', url);
                    xhr.responseType = 'blob';
                    xhr.send();
                }

                // Seleccionar imagen ganadora
                let serieGanadora = findById(state.mecanica, scores[0].id);
                let portadaUrl = serieGanadora.portada;
                  
                toDataURL(portadaUrl, function(dataUrl) {
                    var portada = dataUrl.replace('data:image/jpeg;base64,','');
                    //console.log('RESULT:', portada)

                    // Agregar portada a la playlist
                    // https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/
                    axios({
                        method: 'put',
                        url: 'https://api.spotify.com/v1/users/'+userId+'/playlists/'+playlistId+'/images',
                        headers: {
                            'Authorization': 'Bearer ' + state.main.accessToken,
                            'Content-Type': 'image/jpeg'
                        },
                        data: portada
                    }).then(
                        response => { console.log(response.data); }
                    ).catch( (error) => { 
                        console.log(error) 
                    });
                    
                });

            });

        });
   };
}