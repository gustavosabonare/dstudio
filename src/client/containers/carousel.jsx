
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Carousel from '../components/carousel';

const PLAYLIST_QUERY = gql`
  query($carrouselId: ID!) {
    carrousel(id: $carrouselId) {
      title
      events {
        id
        title
        date
        description
        image {
          id
          url
          name
        }
      }
    }
  }
`;

const CarouselContainer = ({ id, onCardClick }) => {
  const { data } = useQuery(PLAYLIST_QUERY, {
    variables: { carrouselId: id },
  });

  if (!data) {
    return null;
  }

  const { carrousel } = data;

  return <Carousel title={carrousel.title} events={carrousel.events} onClick={onCardClick} />
}

export default CarouselContainer;
