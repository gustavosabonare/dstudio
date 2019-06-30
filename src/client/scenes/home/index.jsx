import React from 'react';

// COMPONENTS
import Highlight from '../../components/highlight';
import Carousel from '../../components/carousel';

export default ({ history }) => {
  const fakeConvida = {
    id: 1,
    title: 'Coletivo Central - D Studio Convida',
    text: 'No segundo programa desta temporada, convidamos a banda Coletivo central que tem suas vertentes voltadas para o pop rock nacional e vem batalhando pra fazer acontecer.',
    image: "http://diademastudio.com.br/wp-content/uploads/2017/11/DSC_0164.jpg",
    more: true
  }

  return (
    <div>
      <Highlight {...fakeConvida} />

      <main>
        <Carousel title='D Studio Convida' onClick={(id) => history.push(`convida/${id}`)} />
      </main>
    </div >
  )
};