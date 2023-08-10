import React from 'react';
import './style.css';
import Like from '../Like';

const Card = ({ backgroundImageUrl }) => {
  return (
    <div>
      <ul className="cards">
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--fence" style={{ backgroundImage: `url('https://unsplash.it/800/600?image=50')` }}>
            </div>
            <div className="card__content">
              <div className="card__title">
                <Like />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;


// const backgroundImageUrl = 'url('; // Replace with the actual image URL
