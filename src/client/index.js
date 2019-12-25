import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './redux/reducers';
import App from './app';


const preloadedState = window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
};