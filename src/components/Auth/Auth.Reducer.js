import * as actionTypes from './Auth.ActionTypes'

const initState = {
  authUser: null
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.data
      }
  
    default:
      return state
  }
}