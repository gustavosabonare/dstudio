/* globals process */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, gql } from '@apollo/client';

// Components
import Highlight from '../../components/highlight';

// Containers
import Playlist from '../../containers/playlist';

// Helpers
import { stringToEventDate } from '../../helpers/time';

import './index.scss';

const EVENT_QUERY = gql`
  query ($eventId: ID!) {
    event(id: $eventId) {
      id
      title
      description
      date
      image {
        name
        url
        id
      }
      playlist {
        id
      }
    }
  }
`;

const EventContainer = ({ match }) => {
  const { data } = useQuery(EVENT_QUERY, {
    variables: { eventId: match.params.id },
  });

  if (!data) {
    return null;
  }

  return (
    <div className="event">
      <Highlight pageTitle={data.event.title} pageBackground={data.event.image && data.event.image.url} />

      <div className="event__event-container">
        {data.event && (
          <div className="event__description">
            <Helmet>
              <title>Dstudio - {data.event.title}</title>
              <meta property="og:title" content={`Dstudio - ${data.event.title}`} />
              <meta property="og:description" content={data.event.description} />
              <meta property="og:type" content="website" />
              <meta property="og:image" content={data.event.image.url} />
              <meta property="og:image:alt" content={`Dstudio - ${data.event.title}`} />
            </Helmet>

            <p>{data.event.description}</p>
            <br />
            {data.event.date && <p>{stringToEventDate(data.event.date)}</p>}
            <br />
          </div>
        )}

        {data.event && data.event.image && (
          <section className="event__image-container">
            <img src={data.event.image.url} alt={data.event.title} />
          </section>
        )}

        {data.event.playlist && <section className="event__video-container">
          <Playlist id={data.event.playlist.id} />
        </section>}
      </div>
    </div>
  );
}

export default EventContainer;
