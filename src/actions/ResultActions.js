// Docs: https://doxdox.org/jmperez/spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import { store } from '../index';

import {
  LOGOUT_USER,
  FETCH_RECOMMENDATIONS,
  CREATE_CUSTOM_PLAYLIST
} from './types';

export const createCustomPlaylist = () => {
  return (dispatch) => {
    const state = store.getState();
    const userId = state.auth.user.id;
    const { title, description, cover } = state.result.playlist.meta;
    const s = new SpotifyWebApi();
    s.setAccessToken(state.auth.accessToken);

    // Recomendaciones según semillas (por defecto: tracks)
    // https://developer.spotify.com/web-api/get-recommendations/
    let seeds = state.analizer.seeds.slice(0, 4);

    s.getRecommendations({ seed_tracks: seeds })
      .then(
        response => {
          dispatch({
            type: FETCH_RECOMMENDATIONS,
            payload: response.tracks
          })
        }
      )
      .then(() => {

        // Preparar tracks
        let tracks = [];
        state.result.recommendations.map((track, index) => {
          return tracks.push("spotify:track:" + track.id);
        });

        // Crear playlist
        s.createPlaylist(userId, {
          name: title,
          description: description,
          public: false,
          collaborative: false
        })
          .then((data) => {

            // Agregar tracks
            const playlistId = data.id;
            s.addTracksToPlaylist(userId, playlistId, tracks).then(
              (data) => {
                const playlist = {
                  id: playlistId,
                  user: userId
                };

                dispatch({
                  type: CREATE_CUSTOM_PLAYLIST,
                  payload: playlist
                });
              }
            );

            // Agregar cover
            // https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/
            toDataURL(cover, function (dataUrl) {
              let encodedCover = dataUrl.replace('data:image/jpeg;base64,', '');
              axios({
                method: 'put',
                url: `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/images`,
                headers: {
                  'Authorization': 'Bearer ' + state.auth.accessToken,
                  'Content-Type': 'image/jpeg'
                },
                data: encodedCover
              }).catch((error) => {
                console.log(error)
              });
            });
          });

      })
      .catch(() => {
        //dispatch({ type: LOGOUT_USER })
      });
  };
}

// Convertir imagenes de portada a Base64 encoded JPEG
// Importante: las imagenes deben medir 320x320px y no pesar mas de 100k
const toDataURL = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

