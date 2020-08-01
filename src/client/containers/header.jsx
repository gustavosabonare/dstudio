import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Components
import Header from '../components/header';

const HEADER_QUERY = gql`
  query {
    pages {
      title,
      id,
      url,
    }
  }
`;

const HeaderContainer = () => {
  const { data } = useQuery(HEADER_QUERY);

  if (data && data.pages) {
    return <Header pages={data.pages} />
  }

  return null;
}

export default HeaderContainer;