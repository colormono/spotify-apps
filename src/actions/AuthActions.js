import axios from 'axios';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FETCH_USER_INFO
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

export const fetchUserInfo = (dispatch) => {
  return (dispatch, getState) => {
    const state = getState();

    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization': 'Bearer ' + state.auth.accessToken
      }
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_INFO,
          payload: response.data
        });
      })
      .catch((error) => console.log(error));
  };
}