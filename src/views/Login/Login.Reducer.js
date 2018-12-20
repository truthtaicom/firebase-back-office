import * as actionsType from './Login.ActionType'

const initState = {
  data: null,
  loading: false,
  error: null,
}

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case actionsType.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionsType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case actionsType.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

      case actionsType.LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionsType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: null,
      }
    case actionsType.LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}