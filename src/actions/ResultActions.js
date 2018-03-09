// Docs: https://doxdox.org/jmperez/spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import { store } from '../index';

import {
  CREATE_CUSTOM_PLAYLIST,
  CREATE_CUSTOM_PLAYLIST_SUCCESS,
  SET_RECOMMENDATIONS_WITH_SEEDS,
  LOGOUT_USER
} from './types';

export const createCustomPlaylist = () => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_CUSTOM_PLAYLIST });
    dispatch(create());
  };
}

export const createCustomPlaylistWithSeeds = (seeds) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_RECOMMENDATIONS_WITH_SEEDS,
      payload: seeds
    });
    dispatch({ type: CREATE_CUSTOM_PLAYLIST });
    dispatch(create());
  }
}

// Create Playlist
const create = () => {
  const state = store.getState();
  const token = state.auth.accessToken;

  // Playlist data
  const recommendations = state.analyzer.recommendations;
  const userId = state.auth.user.id;
  const playlistMeta = state.result.playlist.meta;
  let playlistTracks = [];
  let playlistId = '';

  // Instancia de Spotify Web API
  const s = new SpotifyWebApi();
  s.setAccessToken(token);

  // Pedir recomendaciones
  return s.getRecommendations(recommendations)
    .then(response => {
      response.tracks.map((track, index) => playlistTracks.push("spotify:track:" + track.id));
      return playlistTracks;
    })
    .then(response => playlistTracks = response)
    .then(() => newPlaylist(s, userId, playlistMeta))
    .then(response => playlistId = response)
    .then(() => addTracks(s, userId, playlistId, playlistTracks))
    .then(() => addCover(token, userId, playlistId, playlistMeta.cover))
    .then(() => {
      const playlist = {
        user: userId,
        id: playlistId
      }
      return { type: CREATE_CUSTOM_PLAYLIST_SUCCESS, payload: playlist };
    })
    .catch(() => {
      return { type: LOGOUT_USER };
    });
}

// Nueva playlist
const newPlaylist = (s, userId, playlistMeta) => {
  return s.createPlaylist(userId, {
    name: playlistMeta.title,
    description: playlistMeta.description,
    public: false,
    collaborative: false
  })
    .then(data => data.id);
}

// Agregar tracks
const addTracks = (s, userId, playlistId, playlistTracks) => {
  return s.addTracksToPlaylist(userId, playlistId, playlistTracks);
}

// Agregar cover
// https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/
const addCover = (token, userId, playlistId, playlistCover) => {
  return toDataURL(playlistCover, function (dataUrl) {
    let encodedCover = dataUrl.replace('data:image/jpeg;base64,', '');

    return axios({
      method: 'put',
      url: `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/images`,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'image/jpeg'
      },
      data: encodedCover
    }).catch((error) => {
      console.log(error)
    });
  });
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
