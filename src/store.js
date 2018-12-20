import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from './components/Auth';
import { loginReducer } from './views/Login';
import { registerReducer } from './views/Register';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    authReducer,
    loginReducer,
    registerReducer
  }),
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' &&
    (window).__REDUX_DEVTOOLS_EXTENSION__
      ? (window).__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
