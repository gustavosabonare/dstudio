
import React from 'react';
import { useQuery, gql } from '@apollo/client';

import VideoPlayer from '../components/videoPlayer';

const PLAYLIST_QUERY = gql`
  query($playlistyId: ID!) {
    playlist(id: $playlistyId) {
      id
      player
      videos {
        title
        link
        id
        description
        image {
          name
          url
          id
        }
      }
    }
  }
`;

const PlaylistContainer = ({ id }) => {
  const { data } = useQuery(PLAYLIST_QUERY, {
    variables: { playlistyId: id },
  });

  if (!data) {
    return null;
  }

  if (data.playlist.player === 'Youtube') {
    return <VideoPlayer videos={data.playlist.videos} />
  }

  return null;
}

export default PlaylistContainer;
