import React from 'react';

//Styles
import './index.scss';

export default () => (
  <div className="player">
    <audio className="player__audio"></audio>
    <div className="player__buttons">
      <i className="fas fa-backward"></i>
      <i className="fas fa-play"></i>
      <i className="fas fa-forward"></i>
    </div>
    <div className="player__image">
      <i className="far fa-image"></i>
    </div>
    <div className="player__progress">
      <p className="player__title">Saiadin // D Studio Apresenta</p>
      <progress max="100" value="50"> </progress>
    </div>
    <div className="player__volume">
      <i className="fas fa-volume-up"></i>
    </div>
    <div className="player__list">
      <i className="fas fa-list-ul"></i>
    </div>
  </div>
)