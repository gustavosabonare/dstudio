import React, { Component } from 'react';

// Styles
import './index.scss';

export default class PLayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isPlaying: false,
      isPlaylistOpen: false,
      playlist: [],
    }

    this.onIconClick = this.onIconClick.bind(this);
    this.onPlaylistClick = this.onPlaylistClick.bind(this);
  }

  onIconClick() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  onPlaylistClick() {
    this.setState({ isPlaylistOpen: !this.state.isPlaylistOpen });
  }

  render() {
    const playlistClass = this.state.isPlaylistOpen ? 'player__playlist--open' : '';

    return (
      <div className="player">
        <audio className="player__audio"></audio>
        {this.state.isModalOpen && <div className="player__modal">
          <div className="player__banner">
            <i className="far fa-image"></i>
          </div>
          <div className="player__progress">
            <span className="player__progress-time">00:00</span>
            <progress max="100" value="50"> </progress>
            <span className="player__progress-time">04:08</span>
          </div>
          <p className="player__title">Saiadin // D Studio Apresenta</p>
          <div className="player__controls">
            <i className="fas fa-list" onClick={this.onPlaylistClick}></i>
            <i className="fas fa-backward"></i>
            <i className="fas fa-play"></i>
            <i className="fas fa-forward"></i>
          </div>
          <ul className={`player__playlist ${playlistClass}`}>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Saiadin // D Studio Apresenta</p>
            </li>
          </ul>
        </div>}
        <span className="player__icon" onClick={this.onIconClick}>
          <i className="fas fa-music" />
        </span>
      </div>
    )
  }
}