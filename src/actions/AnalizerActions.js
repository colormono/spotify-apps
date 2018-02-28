// Docs: https://doxdox.org/jmperez/spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
import { store } from '../index';

import {
  FETCH_USER_TOP_TRACKS,
  FETCH_USER_TOP_ARTISTS,
  SET_RECOMMENDATIONS_SEEDS,
  SET_USER_SCORE,
  SET_PLAYLIST_META,
  LOGOUT_USER
} from './types';

export const fetchUserTopArtists = () => {
  return (dispatch, getState) => {
    const state = getState();
    const s = new SpotifyWebApi();
    s.setAccessToken(state.auth.accessToken);
    s.getMyTopArtists({ limit: 10 })
      .then(
        response => dispatch({
          type: FETCH_USER_TOP_ARTISTS,
          payload: response.items
        })
      );
  };
}

export const fetchUserTopTracks = () => {
  return (dispatch, getState) => {
    const state = getState();
    const s = new SpotifyWebApi();
    s.setAccessToken(state.auth.accessToken);
    s.getMyTopTracks({ limit: 10 })
      .then(
        response => dispatch({
          type: FETCH_USER_TOP_TRACKS,
          payload: response.items
        })
      )
      .then(() => { calculateUserScore(dispatch) })
      .catch(() => {
        dispatch({ type: LOGOUT_USER })
      });
  };
}

// MECANICA
// Ideas? https://developer.spotify.com/web-api/get-recommendations/

const calculateUserScore = (dispatch) => {
  const state = store.getState().analizer;
  console.log(state);

  // Lógica del score
  let score = {
    energia: 100,
    generos: ['rock', 'pop', 'reggae']
  };
  setUserScore(dispatch, score);

  // Lógica de las 5 semillas para recomendaciones
  // Por defecto, pasar IDs de tracks
  let seeds = [
    '0uuEqOyKlABOB7hzWKcEeG',
    '0IHC4QGz0I4EdOGpGMRICA',
    '3pMo77B4r1NwwIK78lO4xf',
    '08QTzlvatmG99BuahclsPj',
    '7LDUiraavMZ6mb8hK3mXkj'
  ];
  setRecommendationSeeds(dispatch, seeds);

  // Meta para la playlist
  let playlistMeta = {
    title: 'SocialSnack',
    description: 'Una playlist que te hará vibrar.',
    cover: 'http://miseriehbo.com/images/cover-ballers.jpg'
  };
  setPlaylistMeta(dispatch, playlistMeta);
}

const setUserScore = (dispatch, score) => {
  dispatch({
    type: SET_USER_SCORE,
    payload: score
  });
}

const setRecommendationSeeds = (dispatch, seeds) => {
  dispatch({
    type: SET_RECOMMENDATIONS_SEEDS,
    payload: seeds
  });
}

const setPlaylistMeta = (dispatch, playlistMeta) => {
  dispatch({
    type: SET_PLAYLIST_META,
    payload: playlistMeta
  });
}
