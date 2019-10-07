import React from 'react';

import { connect } from 'react-redux';

// Components
import Header from '../components/header';

// Actions
import { fetchPagesLogic } from '../redux/actions/pages';

class HeaderContainer extends React.Component {
  static fetchData() {
    return fetchPagesLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.pages.length === 0)
      this.props.fetchPages();
  }

  render() {
    return (
      <Header pages={this.props.pages} />
    )
  }
}

const mapStateToProps = state => ({
  isRequesting: state.pages.requesting,
  pages: state.pages && state.pages.result,
})

const mapDispatchToProps = dispatch => ({
  fetchPages: () => dispatch(fetchPagesLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);