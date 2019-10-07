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
    return (
      <Player musics={this.props.musics} />
    )
  }
}

const mapStateToProps = state => ({
  isRequesting: state.musics.requesting,
  musics: state.musics && state.musics.result,
})

const mapDispatchToProps = dispatch => ({
  fetchMusics: () => dispatch(fetchMusicsLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);