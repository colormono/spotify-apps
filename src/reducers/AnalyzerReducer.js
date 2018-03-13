import {
  ANALYZER_START,
  ANALYZER_SUCCESS,
  SET_USER_RECENTLY_PLAYED,
  SET_USER_TOP_TRACKS,
  SET_USER_TOP_ARTISTS,
  SET_USER_SCORE,
  SET_RECOMMENDATIONS,
  SET_RECOMMENDATIONS_WITH_SEEDS
} from '../actions/types';

const INITIAL_STATE = {
  analyzed: false,
  topArtists: null,
  topTracks: null,
  recentlyPlayed: null,
  recommendations: {},
  score: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANALYZER_START:
      return { ...state, analyzed: false };

    case ANALYZER_SUCCESS:
      return { ...state, analyzed: true };

    case SET_USER_TOP_ARTISTS:
      return { ...state, topArtists: action.payload };

    case SET_USER_TOP_TRACKS:
      return { ...state, topTracks: action.payload };

    case SET_USER_RECENTLY_PLAYED:
      return { ...state, recentlyPlayed: action.payload };

    case SET_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload };

    case SET_RECOMMENDATIONS_WITH_SEEDS:
      return { ...state, recommendations: action.payload };

    case SET_USER_SCORE:
      return { ...state, score: action.payload };

    default:
      return state;
  }
};
