import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Components
import MusicPlayer from '../components/musicPlayer';

const SONGS_QUERY = gql`
  query {
    songs {
      media {
        url
      },
      image{
        url
        name
      },
      title,
      artist
    }
  }
`;

const MusicPlayerContainer = () => {
  const { data } = useQuery(SONGS_QUERY);

  if (data && data.songs)
    return <MusicPlayer musics={data.songs} />

  return null;
}

export default MusicPlayerContainer;