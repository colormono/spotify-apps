import {
  FETCH_USER_TOP_TRACKS,
  FETCH_USER_TOP_ARTISTS,
  SET_USER_SCORE,
  SET_RECOMMENDATIONS,
  SET_RECOMMENDATIONS_WITH_SEEDS
} from '../actions/types';

const INITIAL_STATE = {
  topArtists: null,
  topTracks: null,
  recommendations: {},
  score: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_USER_TOP_ARTISTS:
      return { ...state, topArtists: action.payload };

    case FETCH_USER_TOP_TRACKS:
      return { ...state, topTracks: action.payload };

    case SET_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload }

    case SET_RECOMMENDATIONS_WITH_SEEDS:
      return { ...state, recommendations: action.payload }

    case SET_USER_SCORE:
      return { ...state, score: action.payload }

    default:
      return state;
  }
}
