import React from 'react';

import { connect } from 'react-redux';

class Details extends React.Component {
  render() {
    return (
      <div>detalhes</div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Details);