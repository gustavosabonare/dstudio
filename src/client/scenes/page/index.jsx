/* globals process */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';

// Components
import Card from '../../components/card';

// Containers
import Highlight from '../../containers/highlight';
import Carousel from '../../containers/carousel';
import Playlist from '../../containers/playlist';

import './index.scss';

const PAGE_QUERY = gql`
query {
  pages {
    id
    title
    url
    playlist {
      id
    }
    background {
      name
      url
      id
    }
    cards {
      id
      description
      image {
        name
        url
        id
      }
    }
    carrousels {
      id
    }
    banner {
      id
    }
  }
}
`;


const Page = ({ match, history }) => {
  const { data } = useQuery(PAGE_QUERY);

  if (!data) {
    return null;
  }

  const page = data.pages.filter(page => page.url === match.url)[0];

  if (!page) {
    return null;
  }

  const renderCards = () => {
    if (page.cards && page.cards.length > 0) {
      return (
        <div className="page__cards-container">
          {page.cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      );
    }
  }

  return (
    <div className="page">
      <Helmet>
        <title>Dstudio - {page.title}</title>
        <meta property="og:title" content={`Dstudio - ${page.title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.STORAGE_URL}/logo.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={`Dstudio - ${page.title}`} />
      </Helmet>

      <Highlight title={page.title} background={page.background && page.background.url} id={page.banner && page.banner.id} />

      <main>
        {page.playlist && <div className="page__video-container">
          <Playlist id={page.playlist.id} />
        </div>}

        {page.carrousels && page.carrousels.length > 0 && <div className="page__carousels-container">
          {page.carrousels.map(carrousel => (
            <Carousel key={carrousel.id} id={carrousel.id} onCardClick={id => history.push(`details/${id}`)} />
          ))}
        </div>}

        {renderCards()}
      </main>
    </div >
  );
}

export default Page;
