import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router';

// Constants
import frontRoutes from '../contants/frontRoutes';

// Template
import pageTemplate from '../pageTemplate';

// Front
import App from '../../client/app';

export default function frontRouter(req, res) {
  const frontRouteMatch = frontRoutes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  const context = {};

  if (frontRouteMatch) {
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
    return res.status(200).send(pageTemplate(html))
  }
  else
    return res.status(404).send('page not found');
}