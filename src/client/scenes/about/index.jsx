import React from 'react';

//Components
import Highlight from '../../components/highlight';
import Card from '../../components/card';

//Styles
import './index.scss';

const fakeCards = [{
  title: 'O Stúdio',
  details: 'Diadema Studio foi criado em fevereiro de 2017 com o intuito de agrupar músicos e amantes da música, em um espaço perfeito para trocar ideias, produzir, encontrar os amigos, tocar um som e dar visibilidade para a música independente.',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/26195992_321409328365596_2499547461772222303_n.jpg'
},
{
  title: 'A estrutura',
  details: 'O Studio tem uma estrutura completa! Possui uma sala acústica para ensaios e gravações com equipamentos de altissima qualidade. <br /><br />Também conta com um pub com ótimas opções de cervejas e drinks, e tudo isso em um ambíente acolhedor, perfeito para reunir os amigos e de quebra tomar uma gelada para relaxar. <br /><br />Além disso, dispoem de um lugar externo aconchegante onde acontece alguns de nossos eventos.',
  image: 'http://diademastudio.com.br/wp-content/uploads/2017/11/DSC_0047.jpg'
}]

export default () => (
  <div className="about">
    <Highlight
      title="SOBRE"
      image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
      banner />

    <main className="about__article-container">
      {fakeCards.map((card, index) => <Card {...card} reverse={index % 3} vertical />)}
    </main>
  </div >
);