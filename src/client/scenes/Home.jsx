import React from 'react';

//COMPONENTS
import Menu from '../components/menu';
import Highlight from '../components/highlight';
import Player from '../components/player';
import Carousel from '../components/carousel';

export default () => (
  <div>
    <Menu />

    <Highlight />

    <Player />

    <main>
      <Carousel title='D Studio Convida' />
      <Carousel title='Instagram' />
    </main>
  </div >
);