import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import questionsReducer from '../reducers/questionsReducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  question: questionsReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
