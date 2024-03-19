import React from 'react';
import './Products.scss'

function Products() {
  return (
    <div className="products container">
      <div className='products__header'>
        <h2 className="products__title">Найгарячіші товари</h2>
        <p className="product__number">01 / 03</p>
      </div>
      
      <div className="products__list">
        <div className="product">
          <div className='product__svg'>
            <img src="././img/heart.svg" alt=""/>
          </div>
          
          <img src="././img/product1.png" alt="" />
          <h3 className="product__name">Термобілизна для бодібілдерів</h3>
          <p className="product__dscr">Для чоловіків</p>
          <p className="product__dscr">2 кольори</p>
          <p className="product__price">4000 грн.</p>
        </div>
        <div className="product">
          <div className='product__svg'>
            <img src="././img/heart.svg" alt=""/>
          </div>
          <img src="././img/product2.png" alt="" />
          <h3 className="product__name">Майка для бодібілдерів</h3>
          <p className="product__dscr">Для жінок</p>
          <p className="product__dscr">6 кольорів</p>
          <p className="product__price">1100 грн.</p>
        </div>
        <div className="product">
          <div className='product__svg'>
            <img src="././img/heart.svg" alt=""/>
          </div>
          <img src="././img/product3.png" alt="" />
          <h3 className="product__name">Ланцюжок для бодібілдерів</h3>
          <p className="product__dscr">Аксесуари</p>
          <p className="product__dscr">30 кг.</p>
          <p className="product__price">2000 грн.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
