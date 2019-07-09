import React from 'react';
import thunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// Constants
import frontRoutes from '../contants/frontRoutes';

// Template
import pageTemplate from '../pageTemplate';

// Front
import App from '../../client/app';
import routes from './routes';
import rootReducer from '../../client/redux/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function frontRouter(req, res) {
  const frontRouteMatch = frontRoutes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  const context = {};

  if (frontRouteMatch) {
    const dataRequirements = routes
      .filter(route => matchPath(req.url, route) || route.path === '*') // filter matching paths
      .map(route => route.component) // map to components
      .filter(comp => comp.WrappedComponent && comp.WrappedComponent.fetchData) // check if components have data requirement
      .map(comp => store.dispatch(comp.WrappedComponent.fetchData())); // dispatch data requirement

    Promise.all(dataRequirements)
      .then(() => {
        const html = renderToString(
          <Provider store={store} >
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        );

        const preloadedState = store.getState();

        return res.status(200).send(pageTemplate(html, preloadedState))
      })
  }
  else
    return res.status(404).send('page not found');
}