import React from 'react';

import { connect } from 'react-redux';

// Components
import Highlight from '../../components/highlight';
import Carousel from '../../components/carousel';

// Actions
import { fetchEventsLogic } from '../../redux/actions/events';

const fakeConvida = {
  id: 1,
  title: 'Coletivo Central - D Studio Convida',
  text: 'No segundo programa desta temporada, convidamos a banda Coletivo central que tem suas vertentes voltadas para o pop rock nacional e vem batalhando pra fazer acontecer.',
  image: "http://diademastudio.com.br/wp-content/uploads/2017/11/DSC_0164.jpg",
  more: true
}

class Home extends React.Component {
  static fetchData() {
    return fetchEventsLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.convidas.length === 0) {
      this.props.fetchEvents();
    }
  }

  render() {
    return (
      <div>
        <Highlight {...fakeConvida} />

        <main>
          <Carousel title='D Studio Convida' events={this.props.convidas} onClick={(id) => this.props.history.push(`convida/${id}`)} />
        </main>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  isRequesting: state.events.requesting,
  convidas: state.events && state.events.result && state.events.result.convidas || [],
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEventsLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);