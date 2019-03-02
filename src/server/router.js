import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router';

import routes from './routes';
import pageTemplate from './pageTemplate';
import App from '../client/app';

export default function router(req, res) {
  const routeMatch = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  const context = {};

  if (!routeMatch)
    return res.status(404).send('page not found');

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  return res.status(200).send(pageTemplate(html))
}