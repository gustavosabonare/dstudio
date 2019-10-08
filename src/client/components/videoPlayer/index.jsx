import React from 'react';

// Styles
import './index.scss';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: 0,
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
      const currentVideo = this.props.videos[index];

      return this.player.cueVideoByUrl(currentVideo.link)
    }

    const currentVideo = this.props.videos[this.state.currentVideo];
    this.player.cueVideoByUrl(currentVideo.link);
  }

  renderCards() {
    return this.props.videos.map((video, index) => {
      const classActive = this.state.currentVideo === index ? 'videos__video--active' : '';

      return (
        <li key={video.title} className={`videos__video ${classActive}`} onClick={() => this.onVideoSelect(index)}>
          <img src={video.image} />
          <div className='videos__video-info'>
            <h3>{video.title}</h3>
            <p>Studio Convida</p>
          </div>
        </li>
      )
    })
  }

  render() {
    if (!this.props.videos.length) {
      return null;
    }

    return (
      <div className="videos">
        <main className="videos__article-container">
          <div id="ytplayer">
          </div>
          <ul className='videos__playlist'>
            {this.renderCards()}
          </ul>
        </main>
      </div>
    );
  }
}


export default VideoPlayer;