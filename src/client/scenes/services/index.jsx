import React from 'react';
import { connect } from 'react-redux';

//Components
import Highlight from '../../components/highlight';
import Card from '../../components/card';

// Actions
import { fetchServicesLogic } from '../../redux/actions/services';

//Styles
import './index.scss';

class Services extends React.Component {
  static fetchData() {
    return fetchServicesLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.services.length === 0) {
      this.props.fetchServices();
    }
  }

  render() {
    return (
      <div>
        <Highlight
          title="SERVIÇOS"
          image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
          banner />

        <main className="services__article-container">
          {this.props.services.map((card, index) => <Card {...card} reverse={index % 3} vertical />)}
        </main>
      </div >
    );

  }
};

const mapStateToProps = state => ({
  isRequesting: state.services.requesting,
  services: state.services && state.services.result,
})

const mapDispatchToProps = dispatch => ({
  fetchServices: () => dispatch(fetchServicesLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);