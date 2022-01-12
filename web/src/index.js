import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
/* import { createStore, applyMiddleware } from 'redux' */
/* import thunk from 'redux-thunk' */
/* import { composeWithDevTools } from 'redux-devtools-extension' */
/* import rootReducer from './reducers'
 */

/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
) */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
