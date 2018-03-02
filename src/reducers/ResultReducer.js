import {
  FETCH_RECOMMENDATIONS,
  SET_PLAYLIST_META,
  CREATE_CUSTOM_PLAYLIST
} from '../actions/types';

const INITIAL_STATE = {
  recommendations: {},
  playlist: {
    loading: true,
    user: '',
    id: '',
    meta: {
      title: 'SocialSnack',
      description: 'Una playlist que te hará vibrar.',
      cover: 'http://dominio.com/images/cover-default.jpg'
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
      return {
        ...state,
        recommendations: action.payload,
        playlist: {
          loading: true
        }
      };

    case CREATE_CUSTOM_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          id: action.payload.id,
          user: action.payload.user,
          loading: false
        }
      };

    default:
      return state;
  }
};