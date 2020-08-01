import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const BANNER_QUERY = gql`
  query($bannerId: ID!) {
    banner(id: $bannerId) {
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

const HighlightContainer = ({ title, background, id }) => {
  const { data } = useQuery(BANNER_QUERY, {
    variables: { bannerId: id },
  });

  if (!id) {
    return (
      <div className={`highlight highlight--banner`}>
        <div className="highlight__filter"></div>
        <img className="highlight__image" src={background} alt={title} />
        <div className="highlight__shadow"></div>
        <div className="highlight__info">
          <h3 className="highlight__title">{title}</h3>
        </div>
      </div>
    );
  };

  if (data && data.banner) {
    const { events } = data.banner;
    const [event] = events;

    return (
      <div className={`highlight`}>
        <div className="highlight__filter"></div>
        <img className="highlight__image" src={event.image.url} alt={event.title} />
        <div className="highlight__shadow"></div>
        <div className="highlight__info">
          <h3 className="highlight__title">{event.title}</h3>
          <p className="highlight__description">{event.description}</p>
          <button className="highlight__button">
            <Link to={`/details/${event.id}`}>
              Saiba mais
            </Link>
          </button>
        </div>
      </div>
    )
  }

  return null;
}

export default HighlightContainer;