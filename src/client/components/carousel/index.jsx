import React from 'react';

//ConvidaImages
import Convida1 from '../../assets/backgrounds/Convida1.png';
import Convida2 from '../../assets/backgrounds/Convida2.png';
import Convida3 from '../../assets/backgrounds/Convida3.png';
import Convida4 from '../../assets/backgrounds/Convida4.png';

//Styles
import './index.scss';

export default (props) => (
  <section className="events">
    <h2 className="events__title">{props.title}</h2>
    <div className="events__filter"></div>
    <div className="events__container">
      <article className="events__content" onClick={() => props.onClick(1)}>
        <img className="events__content-image" src={Convida1} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida2} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida3} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida4} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida1} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida2} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida3} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
      <article className="events__content">
        <img className="events__content-image" src={Convida4} />
        <span className="events__content-overlay"></span>
        <h4 className="events__content-title">Marcos Pagu</h4>
        <p className="events__content-info">Marcos Pagu marca presença no bate papo do D Studio, um figura rara de um
          talento
          incrível, é praticamente
            impossível não se apaixonar por sua pessoa e por sua arte. Obrigado Pagu, você já é do mundo!</p>
      </article>
    </div>
  </section>
)