/* globals process */

import React from 'react';
import Slider from "react-slick";

// Styles
import './index.scss';

const renderCards = (props) => props.events.map(event => (
  <article key={event.id} className="events__content" onClick={() => props.onClick(event.id)}>
    <img className="events__content-image" src={event.image.url} />
    <span className="events__content-overlay"></span>

    <div className="events__content-info">
      <h4 className="events__content-title">{event.title}</h4>
      <p className="events__content-description">{event.description}</p>
    </div>
  </article>
));

export default (props) => {
  var settings = {
    infinite: props.events.length >= 6,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: props.events.length >= 4,
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: props.events.length >= 2,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="events">
      <h2 className="events__title">{props.title}</h2>
      <div className="events__container">
        <div className="events__filter"></div>
        <Slider {...settings}>
          {renderCards(props)}
        </Slider>
      </div>
    </section>
  )
}