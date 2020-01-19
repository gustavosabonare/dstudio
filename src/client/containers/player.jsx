import React from 'react';

import { connect } from 'react-redux';

// Components
import Player from '../components/player';

// Actions
import { fetchMusicsLogic } from '../redux/actions/musics';

class PlayerContainer extends React.Component {
  static fetchData() {
    return fetchMusicsLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.musics.length === 0)
      this.props.fetchMusics();
  }

  render() {
    if (this.props.musics)
      return <Player musics={this.props.musics} />

    return null;
  }
}

const mapStateToProps = state => {
  const playlists = state.musics.result;
  const musicPlaylists = playlists && playlists.filter(playlist => playlist.player === 'Musicas' && playlist.active);

  return ({
    isRequesting: state.musics.requesting,
    musics: musicPlaylists && musicPlaylists[0] && musicPlaylists[0].songs || [],
  })
}

const mapDispatchToProps = dispatch => ({
  fetchMusics: () => dispatch(fetchMusicsLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);