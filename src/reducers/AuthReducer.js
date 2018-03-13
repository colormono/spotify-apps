import {
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAIL,
  UNAUTH_USER,
  SET_USER_INFO
} from '../actions/types';

const INITIAL_STATE = {
  authentificated: false,
  error: '',
  user: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '' };

    case AUTH_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        authentificated: true
      };

    case AUTH_USER_FAIL:
      return {
        ...state,
        authentificated: false,
        error: action.payload
      };

    case UNAUTH_USER:
      return INITIAL_STATE;

    case SET_USER_INFO:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
