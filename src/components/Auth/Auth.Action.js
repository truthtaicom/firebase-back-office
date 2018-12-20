import * as actionTypes from './Auth.ActionTypes';


export function setAuthUser(data) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_AUTH_USER,
      data
    })
  }
}