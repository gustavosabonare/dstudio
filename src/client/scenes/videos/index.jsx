import React from 'react';

// Components
import Highlight from '../../components/highlight';

// Styles
import './index.scss';

// Convida Images
import Convida1 from '../../assets/backgrounds/Convida1.png';
import Convida2 from '../../assets/backgrounds/Convida2.png';
import Convida3 from '../../assets/backgrounds/Convida3.png';
import Convida4 from '../../assets/backgrounds/Convida4.png';


export default () => (
  <div>
    <Highlight
      title="VIDEOS"
      image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
      banner />

    <main className="videos__article-container">
      <iframe className="videos__iframe" src="https://www.youtube.com/embed/-2dNM2WCvF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <ul className='videos__playlist'>
        <li className='videos__video'>
          <img src={Convida1} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida2} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida3} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida4} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida1} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida2} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
        <li className='videos__video'>
          <img src={Convida3} />
          <div className='videos__video-info'>
            <h3>Marcos Pagu</h3>
            <p>Studio Convida</p>
          </div>
        </li>
      </ul>
    </main>
  </div >
);