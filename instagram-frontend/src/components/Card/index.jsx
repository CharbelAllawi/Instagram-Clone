import React from 'react';

import './style.css';
import Like from '../Like';

const Card = () => {
  const backgroundImageUrl = 'url(https://unsplash.it/800/600?image=50'; // Replace with the actual image URL

  return (
    <div>
      <ul class="cards">
        <li class="cards__item">
          <div class="card">
            <div class="card__image card__image--fence">
              <div className="card__image card__image--fence" style={{ backgroundImage: backgroundImageUrl }}>
              </div>
            </div>
            <div class="card__content">
              <div class="card__title">
                <Like />
              </div>
            </div>
          </div>
        </li>

      </ul>

    </div >

  );
};

export default Card;
