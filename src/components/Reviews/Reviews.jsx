import React from 'react';
import './Reviews.scss'

function Reviews() {
  return (
    <div className="reviews container">
      <h2 className="reviews__title">Відгуки наших клієнтів</h2>
      <div className="reviews__list">
        <div className="review">
          <div className="review__title">
            <img src="././img/Mask.png" alt="" />
            <h3 className="review__author">Жора Ремінгтон</h3>
          </div>
          <p className="revreview__authoriew__text">Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
        </div>
        <div className="review">
          <div className="review__title">
            <img src="././img/Mask.png" alt="" />
            <h3 className="review__author">Жора Ремінгтон</h3>
          </div>
          <p className="review__text">Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
        </div>
        <div className="review">
          <div className="review__title">
            <img src="././img/Mask.png" alt="" />
            <h3 className="">Жора Ремінгтон</h3>
          </div>
          <p className="review__text">Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
        </div>
        <div className="review">
          <div className="review__title">
            <img src="././img/Mask.png" alt="" />
            <h3 className="review__author">Жора Ремінгтон</h3>
          </div>
          <p className="review__text">Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;