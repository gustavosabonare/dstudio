import React from 'react';

// Styles
import './index.scss';

export default ({ title, details, image, reverse, vertical }) => {
  const reverseClass = reverse && !vertical ? 'card--reverse' : '';
  const verticalClass = vertical ? 'card-vertical' : '';

  return (
    <article className={`card ${verticalClass} ${reverseClass}`}>
      <img src={image} className="card__image" />
      <div className="card__info">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: details }}></p>
      </div>
    </article >
  )
}