import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './index.scss';

export default ({ title = '', text = '', image = '', more = false, id, banner }) => {
  const bannerClass = banner ? 'highlight--banner' : null;

  return (
    <div className={`highlight ${bannerClass}`}>
      <div className="highlight__filter"></div>
      <img className="highlight__image" src={image} />
      <div className="highlight__shadow"></div>
      <div className="highlight__info">
        <h3 className="highlight__title">{title}</h3>
        <p className="highlight__description">{text}</p>
        {more && <button className="highlight__button">
          <Link to={`/convida/${id}`}>
            Saiba mais
          </Link>
        </button>}
      </div>
    </div>
  )
}