/* globals process */
import React, { useEffect, useRef, useState } from 'react';

import { secondsToMinutes } from '../../helpers/math';

import useOnClickOutside from '../../hooks/onClickOutside';

// Styles
import './index.scss';

const MusicPlayer = ({ musics }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(0);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);

  const audio = useRef();
  const progressBar = useRef();
  const player = useRef();

  useOnClickOutside(player, () => setIsModalOpen(false));

  useEffect(() => {
    if (musics && musics.length > 0) {
        audio.current.addEventListener('timeupdate', e => setCurrentPlayTime(e.target.currentTime));
        audio.current.addEventListener('ended', nextMusic);
        audio.current.addEventListener('play', () => setIsPlaying(true));
        audio.current.addEventListener('pause', () => setIsPlaying(false));
      }
  }, [])

  useEffect(() => {
    if(isModalOpen)
      progressBar.current.addEventListener('click', seek);
  }, [isModalOpen]);

  useEffect(() => {
    audio.current.play();
  }, [currentPlayingIndex]);

  const seek = (event) => {
    const percent = event.offsetX / event.currentTarget.offsetWidth;
    const audioTarget = percent * audio.current.duration

    audio.current.currentTime = audioTarget;
  }

  const onIconClick = () => {
    if (isModalOpen)
      progressBar.current.removeEventListener('click', seek);

      setIsModalOpen(!isModalOpen);
  }

  const onPlaylistClick = () => {
    setIsPlaylistOpen(!isPlaylistOpen);
  }

  const playPauseAudio = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  }

  const nextMusic = () => {
    if (currentPlayingIndex + 1 < musics.length) {
      setCurrentPlayingIndex(currentPlayingIndex + 1);
    }
  }

  const prevMusic = () => {
    if (currentPlayingIndex > 0) {
      setCurrentPlayingIndex(currentPlayingIndex - 1);
    }
  }

  const renderMusic = () => {
    const playlistClass = isPlaylistOpen ? 'player__playlist--open' : '';

    return (
      <ul className={`player__playlist ${playlistClass}`}>
        {musics && musics.map((music, index) => {
          const selectedMusicClass = currentPlayingIndex === index ? 'player__playlist-music--selected': '';

          return (
            <li key={music.title} className={`player__playlist-music ${selectedMusicClass}`} onClick={() => setCurrentPlayingIndex(index)}>
              {currentPlayingIndex === index && isPlaying ? 
                <i className="fas fa-pause" onClick={playPauseAudio} /> : 
                <i className="fas fa-play" onClick={playPauseAudio} />}
              <p>{`${music.title} // ${music.artist}`}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  const currentMusic = musics[currentPlayingIndex];

  const playingStyle = isPlaying ? 'player__icon--playing' : '';

  return (
    <div className="player" ref={player}>
      <audio ref={audio} className="player__audio" src={currentMusic && currentMusic.media.url} />
      {isModalOpen && <div className="player__modal">
        <div className="player__banner">
          <img src={currentMusic.image && currentMusic.image.url || `${process.env.STORAGE_URL}/logo.png`} className="player__image" alt='logo' />
        </div>
        <div className="player__progress">
          <span className="player__progress-time">{secondsToMinutes(currentPlayTime)}</span>
          <progress ref={progressBar} max={audio.current.duration || 100} value={currentPlayTime || 0}> </progress>
          <span className="player__progress-time">{audio.current.duration && secondsToMinutes(audio.current.duration) || '00:00'}</span>
        </div>
        <p className="player__title">{currentMusic.title} // {currentMusic.artist}</p>
        <div className="player__controls">
          <i className="fas fa-list" onClick={onPlaylistClick} />
          <i className="fas fa-backward" onClick={prevMusic}/>
          {isPlaying ? <i className="fas fa-pause" onClick={playPauseAudio} /> : <i className="fas fa-play" onClick={playPauseAudio} />}
          <i className="fas fa-forward" onClick={nextMusic}/>
        </div>

        {renderMusic()}
      </div>}
      <span className={`player__icon ${playingStyle}`} onClick={onIconClick}>
        <i className="fas fa-music" />
      </span>
    </div>
  )
}

export default MusicPlayer;
