import * as actionsType from './Register.ActionType'

const initState = {
  data: null,
  loading: false,
  error: null,
}

export default function registerReducer(state = initState, action) {
  switch (action.type) {
    case actionsType.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionsType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case actionsType.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}