import React from 'react';

//Components
import Highlight from '../../components/highlight';
import Card from '../../components/card';

//Styles
import './index.scss';

const fakeCards = [{
  title: 'Ensaios',
  details: '<p>SALA DE ENSAIO COM 30M² Sala ampla com equipamentos novíssimos de ponta e uma acústica incrível. 2 PAs e 1 mesa de som para voz 1 Amplificador de Guitarra Fender 1 Amplificador de Guitarra Meteoro (Jaguar) 1 Cubo para baixo Meteoro com cabeçote Meteoro 2 Microfones RV100 Shure 1 Microfone SM58 Shure 1 Bateria Michael com:&#8230; <a href=\"https://diademastudio.com.br/2018/01/08/ensaios/\" class=\"excerpt-read-more\">Leia Mais</a></p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/26195992_321409328365596_2499547461772222303_n.jpg'
},
{
  title: 'Laboratório de Performance para Palo',
  details: '<p>Laboratório de Performance para Palco são aulas de teatro voltadas para músicos, palestrantes, oradores e todos que utilizam da comunicação oral e corporal para se expressarem.  POSTURA EXPRESSÃO CORPORAL EXPRESSÃO VOCAL DESINIBIÇÃO ATITUDE EMPATIA CONFIANÇA Exercícios: Improvisação explorando os recursos de corpo e voz. Foco Geografia de cena Construção de personagens Interpretação vocal (Textos, músicas, sons) Interpretação corporal&#8230; <a href=\"https://diademastudio.com.br/2018/01/04/aulas-de-teatro/\" class=\"excerpt-read-more\">Leia Mais</a></p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/dia-universal-do-teatro1.jpg'
},
{
  title: 'Direção para shows e clipes',
  details: '<p>DIREÇÃO DE BANDAS E SHOWS PERFORMANCES ATUAÇÕES ATITUDE PRESENÇA DE PALCO. CLIPES DIREÇÃO ELABORAÇÃO DE ROTEIROS FILMAGENS DE WEB CLIPES É obrigação do diretor do show enxugar o máximo de idéias do artista para desenvolver o tema, direção e detalhes muitas vezes invisíveis à primeira vista. Uma boa direção de show, utiliza-se de princípios básicos&#8230; <a href=\"https://diademastudio.com.br/2018/01/04/direcao-para-shows-e-clipes/\" class=\"excerpt-read-more\">Leia Mais</a></p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/38_slide2-960x418.png'
},
{
  title: 'Aulas',
  details: '<p>GUITARRA (INICIANTE, INTERMEDIÁRIO E AVANÇADO) VIOLÃO (INICIANTE, INTERMEDIÁRIO E AVANÇADO) BATERIA (INICIANTE, INTERMEDIÁRIO E AVANÇADO)</p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/maxresdefault.jpg'
},
{
  title: 'Gravações',
  details: '<p>MÚSICAS GRAVAÇÕES POR CANAL AO VIVO SEMI AO VIVO COMPOSIÇÕES ARRANJOS CRIAÇÃO DE JINGLES VÍDEOS CRIAÇÃO DE ROTEIROS DIREÇÃO DE ATORES DIREÇÃO DE CENA DIREÇÃO DE FOTOGRAFIA LOCAÇÕES EDIÇÃO MARKETING DE REDES</p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2018/01/gettyimages-635926346.jpg'
},
{
  title: 'Espaço para festas e eventos',
  details: '<p>TEMOS UMA PROGRAMAÇÃO MENSAL RECHEADA DE EVENTOS E ENCONTROS, LIVES LUAU NA PARTE EXTERNA ENCONTROS DE BANDAS D STUDIO CONVIDA (programa de entrevista com músicos convidados) ALÉM DISSO VOCÊ PODE AGENDAR O ESPAÇO PARA FAZER: REUNIÕES FESTAS ANIVERSÁRIOS KARAOKÊ OU SEJA TUDO QUE ESTEJA LIGADO A MÚSICA!</p>',
  image: 'http://diademastudio.com.br/wp-content/uploads/2017/11/DSC_0037.jpg'
}]

export default () => (
  <div>
    <Highlight
      title="SERVIÇOS"
      image="https://c.pxhere.com/photos/a3/68/audio_mixing_board_music_studio_audio_equipment_buttons_sliders_sound_music-1360063.jpg!d"
      banner />

    <main className="services__article-container">
      {fakeCards.map((card, index) => <Card {...card} reverse={index % 3} vertical />)}
    </main>
  </div >
);