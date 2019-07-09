import React from 'react';
import { connect } from 'react-redux';

// Components
import Highlight from '../../components/highlight';

// Actions
import { fetchEventsLogic } from '../../redux/actions/events';

// Styles
import './index.scss';


class Videos extends React.Component {
  static fetchData() {
    return fetchEventsLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.convidas.length === 0) {
      this.props.fetchEvents();
    }
  }

  state = {
    currentVideo: 0,
  }

  renderCards() {
    return this.props.convidas.map((convida, index) => {
      const classActive = this.state.currentVideo === index ? 'videos__video--active' : '';

      return (
        <li className={`videos__video ${classActive}`} onClick={() => this.setState({ currentVideo: index })}>
          <img src={convida.image} />
          <div className='videos__video-info'>
            <h3>{convida.title}</h3>
            <p>Studio Convida</p>
          </div>
        </li>
      )
    })
  }

  render() {
    const currentVideo = this.props.convidas[this.state.currentVideo];

    return (
      <div>
        <Highlight
          title="VIDEOS"
          image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
          banner />

        <main className="videos__article-container">
          <iframe
            className="videos__iframe"
            src={currentVideo.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <ul className='videos__playlist'>
            {this.renderCards()}
          </ul>
        </main>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isRequesting: state.events.requesting,
  convidas: state.events && state.events.result && state.events.result.convidas || [],
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEventsLogic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);