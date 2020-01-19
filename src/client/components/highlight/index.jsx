/* globals process */

import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './index.scss';

export default ({ events, pageTitle, pageBackground }) => {
  if (!events) {
    return (
      <div className={`highlight highlight--banner`}>
        <div className="highlight__filter"></div>
        <img className="highlight__image" src={pageBackground} />
        <div className="highlight__shadow"></div>
        <div className="highlight__info">
          <h3 className="highlight__title">{pageTitle}</h3>
        </div>
      </div>
    );
  };

  const { title, description, image, id } = events[0];

  return (
    <div className={`highlight`}>
      <div className="highlight__filter"></div>
      <img className="highlight__image" src={image.url} />
      <div className="highlight__shadow"></div>
      <div className="highlight__info">
        <h3 className="highlight__title">{title}</h3>
        <p className="highlight__description">{description}</p>
        <button className="highlight__button">
          <Link to={`/details/${id}`}>
            Saiba mais
          </Link>
        </button>
      </div>
    </div>
  )
}