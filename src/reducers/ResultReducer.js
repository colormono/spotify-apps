import {
  FETCH_RECOMMENDATIONS,
  SET_PLAYLIST_META,
  CREATE_CUSTOM_PLAYLIST
} from '../actions/types';

const INITIAL_STATE = {
  recommendations: {},
  playlist: {
    user: 'spotify',
    id: '37i9dQZF1DWU8yQ1nTMCfh',
    meta: {
      title: 'SocialSnack',
      description: 'Una playlist que te hará vibrar.',
      cover: 'http://miseriehbo.com/images/cover-ballers.jpg'
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SET_PLAYLIST_META:
      return {
        ...state,
        playlist: { ...state.playlist, meta: action.payload }
      };

    case FETCH_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload };

    case CREATE_CUSTOM_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          id: action.payload.id,
          user: action.payload.user
        }
      };

    default:
      return state;
  }
};