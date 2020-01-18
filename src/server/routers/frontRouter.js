import React from 'react';
import thunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet';

// Template
import pageTemplate from '../pageTemplate';

// Front
import App from '../../client/app';
import routes from './routes';
import rootReducer from '../../client/redux/reducers';

export default function frontRouter(req, res) {
  const context = {};
  let currentMatch;

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  const dataRequirements = routes
    .filter(route => { currentMatch = matchPath(req.url, route); return currentMatch || route.path === '*' })
    .map(route => route.component) // map to components
    .filter(comp => comp.WrappedComponent && comp.WrappedComponent.fetchData) // check if components have data requirement
    .map(comp => store.dispatch(comp.WrappedComponent.fetchData(currentMatch && currentMatch.params))); // dispatch data requirement

  Promise.all(dataRequirements)
    .then(() => {
      const html = renderToString(
        <Provider store={store} >
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const helmet = Helmet.renderStatic();

      const preloadedState = store.getState();

      return res.status(200).send(pageTemplate(html, helmet, preloadedState))
    })
}