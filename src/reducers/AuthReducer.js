import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SET_USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  userLogin: false,
  accessToken: '',
  error: '',
  user: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGOUT_USER:
      return INITIAL_STATE;

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        accessToken: action.payload,
        userLogin: true
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentification Failed.',
        accessToken: '',
        loading: false,
        userLogin: false
      };

    case SET_USER_INFO:
      return { ...state, user: action.payload }

    default:
      return state;
  }
};
