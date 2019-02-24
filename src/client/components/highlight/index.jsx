import React from 'react';

//Styles
import './index.scss';

export default () => (
  <div className="highlight">
    <div className="highlight__filter"></div>
    <img className="highlight__image" src="http://diademastudio.com.br/wp-content/uploads/2017/11/DSC_0164.jpg" />
    <div className="highlight__shadow"></div>
    <div className="highlight__info">
      <h3 className="highlight__title">Coletivo Central - D Studio Convida</h3>
      <p className="highlight__description">No segundo programa desta temporada, convidamos a banda Coletivo central que tem
        suas vertentes voltadas para o
  pop rock nacional e vem batalhando pra fazer acontecer.</p>
      <button className="highlight__button">Saiba mais</button>
    </div>
  </div>
)