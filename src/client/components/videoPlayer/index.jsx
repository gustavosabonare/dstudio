/* globals process */

import React from 'react';

// Styles
import './index.scss';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: 0,
      playerAPI: false,
    }
  }

  initYoutube(newIndex) {
    if (YT.Player) {
      this.player = YT.Player && new YT.Player('ytplayer', {
        playerVars: {
          frameborder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: true,
        },
        height: 'unset',
        width: 'unset',
        events: {
          onStateChange: this.onPlayerStateChange,
          onReady: () => this.onVideoSelect(newIndex)
        },
      })

      this.setState({ playerAPI: true });
    }
  }

  componentDidMount() {
    this.initYoutube();
  }

  onPlayerStateChange(evt) {
    if (YT && evt.data === YT.PlayerState.PLAYING)
      document.querySelector('audio').pause()
  }

  onVideoSelect(index = 0) {
    if (!this.player)
      return this.initYoutube(index);

    const newVideo = this.props.videos[index];

    this.player.cueVideoByUrl(newVideo.link);

    this.setState({ currentVideo: index });
  }

  renderCards() {
    return this.props.videos.map((video, index) => {
      const classActive = this.state.currentVideo === index ? 'videos__video--active' : '';

      return (
        <li key={video.title} className={`videos__video ${classActive}`} onClick={() => this.onVideoSelect(index)}>
          <img src={video.image && video.image.url || `${process.env.STORAGE_URL}/logo.png`} alt='logo' />
          <div className='videos__video-info'>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </li>
      )
    })
  }

  render() {
    if (!this.props.videos.length) {
      return null;
    }

    const { currentVideo } = this.state;
    const currentVideoSelected = this.props.videos[currentVideo];

    return (
      <div className="videos">
        <div id="ytplayer">
        </div>
        {this.state.playerAPI ? null : <iframe frameBorder="0" src={currentVideoSelected.link} />}
        {this.props.videos.length > 1 && (
          <ul className='videos__playlist'>
            {this.renderCards()}
          </ul>
        )}
      </div>
    );
  }
}


export default VideoPlayer;