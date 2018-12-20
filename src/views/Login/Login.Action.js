import * as actionTypes from './Login.ActionType'
import Firebase from '../../components/Firebase';

export const loginUserRequest = () => ({
  type: actionTypes.LOGIN_USER_REQUEST
})

export const loginUserSuccess = (data) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  data
})

export const loginUserFailure = (error) => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  error
})

const logoutUserRequest = () => ({
  type: actionTypes.LOGOUT_USER_REQUEST
})

const logoutUserSuccess = (data) => ({
  type: actionTypes.LOGOUT_USER_SUCCESS,
  data
})

const logoutUserFailure = (error) => ({
  type: actionTypes.LOGOUT_USER_FAILURE,
  error
})

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginUserRequest())
    try {
      const userAuth = await Firebase.doSignInWithEmailAndPassword(email, password)
      dispatch(loginUserSuccess(userAuth))
      window.location.href = '/'
    } catch(error) {
      dispatch(loginUserFailure(error))
    }
  }
}

export const logoutUser = (email, password) => {
  return async (dispatch) => {
    dispatch(logoutUserRequest())
    try {
      await Firebase.doSignOut()
      dispatch(logoutUserSuccess())
    } catch(error) {
      dispatch(logoutUserFailure())
    }
  }
}