import React from 'react';
import './style.css';
import Like from '../Like';

const Card = ({ image_url, likes_count, post_id }) => {

  return (
    <li className="cards__item">
      <img src=''></img>
      <div className="card">
        <img src={`http://localhost:8000/storage/images/posts/${image_url}`} alt="Image" />
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
