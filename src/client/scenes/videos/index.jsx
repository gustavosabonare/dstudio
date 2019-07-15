import React from 'react';
import { connect } from 'react-redux';

// Components
import Highlight from '../../components/highlight';

// Actions
import { fetchEventsLogic } from '../../redux/actions/events';

// Styles
import './index.scss';

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: 0,
    }
  }

  static fetchData() {
    return fetchEventsLogic();
  }

  componentWillMount() {
    if (!this.props.isRequesting && this.props.convidas.length === 0) {
      this.props.fetchEvents();
    }
  }

  componentDidMount() {
    this.player = new YT.Player('ytplayer', {
      playerVars: {
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: true,
      },
      height: 'unset',
      width: 'unset',
      events: {
        onStateChange: this.onPlayerStateChange,
        onReady: () => this.onVideoSelect()
      },
    })
  }

  onPlayerStateChange(evt) {
    if (YT && evt.data === YT.PlayerState.PLAYING)
      document.querySelector('audio').pause()
  }

  onVideoSelect(index) {
    if (index && this.state.currentVideo !== index) {
      this.setState({ currentVideo: index });
      const currentVideo = this.props.convidas[index];

      return this.player.cueVideoByUrl(currentVideo.videoUrl)
    }

    const currentVideo = this.props.convidas[this.state.currentVideo];
    this.player.cueVideoByUrl(currentVideo.videoUrl);
  }

  renderCards() {
    return this.props.convidas.map((convida, index) => {
      const classActive = this.state.currentVideo === index ? 'videos__video--active' : '';

      return (
        <li className={`videos__video ${classActive}`} onClick={() => this.onVideoSelect(index)}>
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
    if (!this.props.convidas.length) {
      return null;
    }

    return (
      <div className="videos">
        <Highlight
          title="VIDEOS"
          image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
          banner />

        <main className="videos__article-container">
          <div id="ytplayer">
          </div>
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