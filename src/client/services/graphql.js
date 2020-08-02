/* globals process */

import { ApolloClient, InMemoryCache } from '@apollo/client';

const serverUrl = process.env.EXTERNAL_CMS_URL || 'http://localhost:3000';

export const client = new ApolloClient({
  uri: serverUrl + '/graphql',
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});
