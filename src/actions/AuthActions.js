import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const loginUser = ({ token = null }) => {
  return (dispatch) => {
    if (token) {
      loginUserSuccess(dispatch, token);
    } else {
      loginUserFail(dispatch);
    }
  };
};

const loginUserSuccess = (dispatch, token) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: token
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
