// Ideas para la mecánica? https://developer.spotify.com/web-api/get-recommendations/
// API Docs: https://doxdox.org/jmperez/spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
import { APP_ROOT } from '../config';
import { store } from '../index';

import {
  ANALYZER_START,
  ANALYZER_SUCCESS,
  SET_USER_INFO,
  SET_USER_RECENTLY_PLAYED,
  SET_USER_TOP_ARTISTS,
  SET_RECOMMENDATIONS,
  SET_USER_SCORE,
  SET_PLAYLIST_META,
  LOGOUT_USER
} from './types';

export const analyzeUserProfile = () => {
  return (dispatch, getState) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    dispatch(analyzerStart());

    // Instancia de Spotify Web API
    const s = new SpotifyWebApi();
    s.setAccessToken(token);

    // Analyzar usuario
    s.getMe()
      .then(response => dispatch(setUserInfo(response)))
      .then(() => dispatch(fetchUserRecentlyPlayed(s)))
      .then(() => dispatch(fetchUserTopArtists(s)))
      .then(response => dispatch(getGenreScore(response.payload)))
      .then(response => dispatch(setRecommendation(response.payload)))
      .then(() => dispatch(setPlaylistMeta()))
      .then(() => dispatch(analyzerSuccess()))
      .catch(() => dispatch({ type: LOGOUT_USER }));
  }
}

const analyzerStart = () => {
  return {
    type: ANALYZER_START
  }
}

const analyzerSuccess = () => {
  return {
    type: ANALYZER_SUCCESS
  }
}

// Guardar datos del usuario
const setUserInfo = (user) => {
  return {
    type: SET_USER_INFO,
    payload: user
  };
};

// Obtener últimos 20 temas escuchados
const fetchUserRecentlyPlayed = (s) => {
  return s.getMyRecentlyPlayedTracks()
    .then(response => {
      return {
        type: SET_USER_RECENTLY_PLAYED,
        payload: response.items
      }
    });
}

// Obtener artistas preferidos
const fetchUserTopArtists = (s) => {
  return s.getMyTopArtists()
    .then(response => {
      return {
        type: SET_USER_TOP_ARTISTS,
        payload: response.items
      }
    });
}

// Calcular generos más escuchados (requiere artistas)
const getGenreScore = (artistas) => {
  const state = store.getState();
  const generosMecanica = state.genres;
  let scores = [];

  // Generos de la mecánica
  generosMecanica.map((genre) => {
    return scores.push({
      name: genre.name,
      score: 0,
      seeds: {
        seed_genres: genre.seed_genres,
        seed_artists: [],
      }
    });
  });

  // Seeds Artistas
  generosMecanica.forEach((generoMecanica, index) => {
    artistas.forEach((artista) => {
      artista.genres.forEach((genre) => {
        if (generoMecanica.subgenres.includes(genre)) {
          const seeds = scores[index].seeds.seed_artists;
          if (!seeds.includes(artista.id)) {
            seeds.push(artista.id);
          }
        }
      });
    })
  });

  // Generos artistas
  let generosArtistas = [];
  artistas.forEach((artista) => {
    return artista.genres.forEach((genre) => {
      return generosArtistas.push(genre);
    })
  });

  // Para cada genero de los artistas
  // si existe como subgenero de los "generos de la mecanica"
  // incrementar score para el genero principal
  generosArtistas.forEach((generoArtista) => {
    return generosMecanica.forEach((generoMecanica, index) => {
      return generoMecanica.subgenres.find((subgenero) => {
        if (subgenero === generoArtista) {
          return scores[index].score += 1;
        };
        return false;
      })
    })
  });

  // Ordenar generos por score
  scores.sort((a, b) => {
    let keyA = new Date(a.score),
      keyB = new Date(b.score);
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  // Recortar los primeros 4 generos
  let maxScores = scores.slice(0, 4);

  // Sacar promedio
  const totalScore = maxScores.reduce((sum, genre) => sum + genre.score, 0);
  let restoScore = 100;
  for (let i = 0; i < 3; i++) {
    let average = Math.floor(maxScores[i].score * 100 / totalScore);
    restoScore -= average;
    maxScores[i].average = average;
  }
  maxScores[3].average = restoScore;

  // Disptach
  return {
    type: SET_USER_SCORE,
    payload: maxScores
  }
}

// MÁXIMO 5 semillas para recomendaciones (si hay más no funciona!)
// https://developer.spotify.com/web-api/get-recommendations/
const setRecommendation = (scores) => {
  const seedsArtists = scores.map((score) => {
    return score.seeds.seed_artists[0];
  });

  const seeds = {
    seed_artists: seedsArtists
  };

  return {
    type: SET_RECOMMENDATIONS,
    payload: seeds
  }
}

const setPlaylistMeta = () => {
  let playlistMeta = {
    title: 'SocialSnack',
    description: 'Una playlist que te hará vibrar.',
    cover: `${APP_ROOT}/images/cover-ballers.jpg`
  };

  return {
    type: SET_PLAYLIST_META,
    payload: playlistMeta
  }
}
