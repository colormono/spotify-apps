import { AUTH_USER_SUCCESS, AUTH_USER_FAIL } from './types';

export const authUser = ({ token = null }) => {
  return dispatch => {
    if (token) {
      authUserSuccess(dispatch, token);
    } else {
      authUserFail(dispatch);
    }
  };
};

const authUserSuccess = (dispatch, token) => {
  // Save the JWT token and redirect
  localStorage.setItem('token', token);
  dispatch({ type: AUTH_USER_SUCCESS });
};

const authUserFail = (dispatch, error) => {
  dispatch({
    type: AUTH_USER_FAIL,
    payload: error
  });
};
