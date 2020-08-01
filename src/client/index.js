import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { client } from './services/graphql';

import App from './app';

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
};