import React from 'react';
import './style.css';
import Like from '../Like';

const Card = ({ image_url, likes_count, post_id }) => {
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__image card__image--fence" style={{ backgroundImage: `url(${image_url})` }}></div>
        <div className="card__content">
          <div className="card__title">
            <Like likes_count={likes_count} post_id={post_id} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
