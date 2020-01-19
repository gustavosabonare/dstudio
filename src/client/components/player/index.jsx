/* globals process */

import React, { Component, createRef } from 'react';

import { secondsToMinutes } from '../../helpers/math';

// Styles
import './index.scss';

export default class PLayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isPlaying: false,
      isPlaylistOpen: false,
      currentPlayingIndex: 0,
      currentPlayTime: 0,
    }

    this.audio = createRef();
    this.progressBar = createRef();

    this.onIconClick = this.onIconClick.bind(this);
    this.onPlaylistClick = this.onPlaylistClick.bind(this);
    this.seek = this.seek.bind(this);
    this.playPauseAudio = this.playPauseAudio.bind(this);
    this.nextMusic = this.nextMusic.bind(this);
    this.prevMusic = this.prevMusic.bind(this);
  }

  componentDidMount() {
    const { musics } = this.props;

    if (musics && musics.length > 0) {
      this.audio.current.addEventListener('canplay', () => this.state.isPlaying && this.audio.current.play());
      this.audio.current.addEventListener('timeupdate', e => { this.setState({ currentPlayTime: e.target.currentTime}) });
      this.audio.current.addEventListener('ended', this.nextMusic);
      this.audio.current.addEventListener('play', () => this.setState({ isPlaying: true }));
      this.audio.current.addEventListener('pause', () => this.setState({ isPlaying: false }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.isModalOpen !== this.state.isModalOpen && this.state.isModalOpen)
      this.progressBar.current.addEventListener('click', this.seek);
  }

  seek(event) {
    const percent = event.offsetX / event.currentTarget.offsetWidth;
    const audioTarget = percent * this.audio.current.duration

    this.audio.current.currentTime = audioTarget;
  }

  onIconClick() {
    const { isModalOpen } = this.state;

    if (isModalOpen)
      this.progressBar.current.removeEventListener('click', this.seek);

    this.setState({ isModalOpen: !isModalOpen });
  }

  onPlaylistClick() {
    this.setState({ isPlaylistOpen: !this.state.isPlaylistOpen });
  }

  playPauseAudio() {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.audio.current.pause();
    } else {
      this.audio.current.play();
    }
  }

  nextMusic() {
    const { musics } = this.props;

    if (this.state.currentPlayingIndex + 1 < musics.length)
      this.setState({currentPlayingIndex: this.state.currentPlayingIndex + 1})
  }

  prevMusic() {
    if (this.state.currentPlayingIndex > 0) 
      this.setState({currentPlayingIndex: this.state.currentPlayingIndex - 1})
  }

  renderMusic() {
    const { isPlaylistOpen, currentPlayingIndex, isPlaying } = this.state;
    const { musics } = this.props;
    const playlistClass = isPlaylistOpen ? 'player__playlist--open' : '';

    return (
      <ul className={`player__playlist ${playlistClass}`}>
        {musics && musics.map((music, index) => {
          const selectedMusicClass = currentPlayingIndex === index ? 'player__playlist-music--selected': '';

          return (
            <li key={music.title} className={`player__playlist-music ${selectedMusicClass}`} onClick={() => { this.setState({ currentPlayingIndex: index }); }}>
              {currentPlayingIndex === index && isPlaying ? 
                <i className="fas fa-pause" onClick={this.playPauseAudio} /> : 
                <i className="fas fa-play" onClick={this.playPauseAudio} />}
              <p>{`${music.title} // ${music.artist}`}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    const { isPlaying, currentPlayingIndex, currentPlayTime } = this.state;
    const { musics } = this.props;

    const currentMusic = musics[currentPlayingIndex];

    const playingStyle = isPlaying ? 'player__icon--playing' : '';

    return (
      <div className="player">
        <audio ref={this.audio} className="player__audio" src={currentMusic && currentMusic.media.url} />
        {this.state.isModalOpen && <div className="player__modal">
          <div className="player__banner">
            <img src={currentMusic.image || `${process.env.STORAGE_URL}/logo.png`} className="player__image" alt='logo' />
          </div>
          <div className="player__progress">
            <span className="player__progress-time">{secondsToMinutes(currentPlayTime)}</span>
            <progress ref={this.progressBar} max={this.audio.current.duration || 100} value={currentPlayTime || 0}> </progress>
            <span className="player__progress-time">{this.audio.current.duration && secondsToMinutes(this.audio.current.duration) || '00:00'}</span>
          </div>
          <p className="player__title">{currentMusic.title} // {currentMusic.artist}</p>
          <div className="player__controls">
            <i className="fas fa-list" onClick={this.onPlaylistClick} />
            <i className="fas fa-backward" onClick={this.prevMusic}/>
            {isPlaying ? <i className="fas fa-pause" onClick={this.playPauseAudio} /> : <i className="fas fa-play" onClick={this.playPauseAudio} />}
            <i className="fas fa-forward" onClick={this.nextMusic}/>
          </div>

          {this.renderMusic()}
        </div>}
        <span className={`player__icon ${playingStyle}`} onClick={this.onIconClick}>
          <i className="fas fa-music" />
        </span>
      </div>
    )
  }
}