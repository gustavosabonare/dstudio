import React from 'react';
import fetch from 'cross-fetch';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { getDataFromTree } from "@apollo/client/react/ssr";

// Template
import pageTemplate from '../pageTemplate';

// Front
import App from '../../client/app';

const serverUrl = process.env.CMS_URL || 'http://localhost:3000';

export default function frontRouter(req, res) {
  const context = {};

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: serverUrl + '/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const ssrApp = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  getDataFromTree(ssrApp).then(() => {
    const app = renderToString(ssrApp);

    const initialApolloState = client.extract();
    const helmet = Helmet.renderStatic();

    const html = pageTemplate(app, helmet, initialApolloState);

    return res.status(200).send(html)
  });
  // })
}