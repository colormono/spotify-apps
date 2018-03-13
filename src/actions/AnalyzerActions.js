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
  UNAUTH_USER
} from './types';

export const analyzeUserProfile = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('token');
    dispatch(analyzerStart());

    // Instancia de Spotify Web API
    const s = new SpotifyWebApi();
    s.setAccessToken(token);

    // Analyzar usuario
    s
      .getMe()
      .then(response => dispatch(setUserInfo(response)))
      .then(() => dispatch(fetchUserRecentlyPlayed(s)))
      .then(() => dispatch(fetchUserTopArtists(s)))
      .then(response => dispatch(getGenreScore(response.payload)))
      .then(response => dispatch(setRecommendation(response.payload)))
      .then(() =>
        dispatch(
          setPlaylistMeta({
            title: 'SocialSnack',
            description: 'Una playlist que te hará vibrar.',
            cover: `${APP_ROOT}/images/cover-ballers.jpg`
          })
        )
      )
      .then(() => dispatch(analyzerSuccess()))
      .catch(() => dispatch({ type: UNAUTH_USER }));
  };
};

const analyzerStart = () => {
  return {
    type: ANALYZER_START
  };
};

const analyzerSuccess = () => {
  return {
    type: ANALYZER_SUCCESS
  };
};

// Guardar datos del usuario
const setUserInfo = user => {
  return {
    type: SET_USER_INFO,
    payload: user
  };
};

// Obtener últimos 20 temas escuchados
const fetchUserRecentlyPlayed = s => {
  return s.getMyRecentlyPlayedTracks().then(response => {
    return {
      type: SET_USER_RECENTLY_PLAYED,
      payload: response.items
    };
  });
};

// Obtener artistas preferidos
const fetchUserTopArtists = s => {
  return s.getMyTopArtists().then(response => {
    if (response.items <= 0) {
      console.log(
        'No escuchas suficiente música... Igual tenemos una playlisty ;p'
      );
      response.items = defaultTopArtists;
    }

    return {
      type: SET_USER_TOP_ARTISTS,
      payload: response.items
    };
  });
};

// Calcular generos más escuchados (requiere artistas)
const getGenreScore = artistas => {
  const state = store.getState();
  const generosMecanica = state.genres;
  let scores = [];

  // Generos de la mecánica
  generosMecanica.map(genre => {
    return scores.push({
      name: genre.name,
      score: 0,
      seeds: {
        seed_genres: genre.seed_genres,
        seed_artists: []
      }
    });
  });

  // Seeds Artistas
  generosMecanica.forEach((generoMecanica, index) => {
    artistas.forEach(artista => {
      artista.genres.forEach(genre => {
        if (generoMecanica.subgenres.includes(genre)) {
          const seeds = scores[index].seeds.seed_artists;
          if (!seeds.includes(artista.id)) {
            seeds.push(artista.id);
          }
        }
      });
    });
  });

  // Generos artistas
  let generosArtistas = [];
  artistas.forEach(artista => {
    return artista.genres.forEach(genre => {
      return generosArtistas.push(genre);
    });
  });

  // Para cada genero de los artistas
  // si existe como subgenero de los "generos de la mecanica"
  // incrementar score para el genero principal
  generosArtistas.forEach(generoArtista => {
    return generosMecanica.forEach((generoMecanica, index) => {
      return generoMecanica.subgenres.find(subgenero => {
        if (subgenero === generoArtista) {
          return (scores[index].score += 1);
        }
        return false;
      });
    });
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
  };
};

// MÁXIMO 5 semillas para recomendaciones (si hay más no funciona!)
// https://developer.spotify.com/web-api/get-recommendations/
const setRecommendation = scores => {
  const seedsArtists = scores.map(score => {
    return score.seeds.seed_artists[0];
  });

  const seeds = {
    seed_artists: seedsArtists
  };

  return {
    type: SET_RECOMMENDATIONS,
    payload: seeds
  };
};

const setPlaylistMeta = playlistMeta => {
  return {
    type: SET_PLAYLIST_META,
    payload: playlistMeta
  };
};

// Artistas por defecto
const defaultTopArtists = [
  {
    name: 'Patricio Rey y sus Redonditos de Ricota',
    id: '6byQKddO1b34lXC2ZEjehQ',
    genres: [
      'argentine rock',
      'latin alternative',
      'latin rock',
      'rock en espanol'
    ]
  },
  {
    name: 'La Vela Puerca',
    id: '6nVcjUJemqpJjc1WevwTvL',
    genres: [
      'argentine rock',
      'cumbia pop',
      'latin alternative',
      'latin rock',
      'rock en espanol'
    ]
  },
  {
    name: 'Ciro y los Persas',
    id: '2Eo4Yaukt9d6dnZrY5hQKi',
    genres: [
      'argentine rock',
      'cumbia pop',
      'latin alternative',
      'latin rock',
      'rock en espanol'
    ]
  },
  {
    name: 'Callejeros',
    id: '2osoVujXgV0PA8lhqDKYFw',
    genres: [
      'argentine rock',
      'cumbia pop',
      'cumbia villera',
      'latin alternative',
      'latin rock',
      'rock en espanol'
    ]
  },
  {
    name: 'No Te Va Gustar',
    id: '4ZDoy7AWNgQVmX7T0u0B1j',
    genres: [
      'argentine rock',
      'latin alternative',
      'latin rock',
      'rock en espanol'
    ]
  },
  {
    name: 'Jorge Drexler',
    id: '4ssUf5gLb1GBLxi1BhPrVt',
    genres: [
      'cantautor',
      'latin alternative',
      'latin rock',
      'nueva cancion',
      'rock en espanol'
    ]
  }
];
