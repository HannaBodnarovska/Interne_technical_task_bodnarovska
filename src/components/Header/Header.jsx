import React from 'react';
import './Header.scss' 

function Header() {
  return (
    <header className="header container">
      <div className="header__top">
        <div className="header__contact">
          <span className="header__phone">098 900 09 09</span>
          <span className="header__help">Допомога</span>
        </div>
        <div className="header__auth">
          <a href="#" className="header__login">Увійти</a>
          <span className="header__divider">/</span>
          <a href="#" className="header__register">Зареєструватися</a>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__logo">
            <img src="../img/logo.svg" alt="logo" />
          </li> 
          <li>
            <ul className='header__menu__nav'>
              <li className="header__menu__item">новинки</li>
              <li className="header__menu__item">чоловіки</li>
              <li className="header__menu__item">жінки</li>
              <li className="header__menu__item">аксесуари</li>
              <li className="header__menu__item">акції</li>
            </ul>
          </li>
          
          <li className="header__search">
            <button className="header__search__button">
              <img src="../img/search.svg" className="fas fa-search"></img> 
            </button>
            <input type="text" placeholder="" className="header__searchInput" />
          </li>
          <li className="header__menu__heart">
            <img src='../img/heart.svg' className="fas fa-heart"></img> {/* Іконка вподобане */}
          </li>
          <li className="header__menu__bag">
            <img src='../img/bag.svg' className="fas fa-shopping-cart"></img> {/* Іконка кошику */}
          </li>
        </ul>
      </nav>
      <div className="header__promo">
        <div className='header__title__container'>
          <h1 className="header__title">Швидше. Вище. Сильніше.</h1>
          <p className="header__text">Разом із Nike</p>
        </div>
        <div className='header__primo__container'>
          <a href="#" className="header__discount__btn">Знижки до 40%</a>
          <p className="header__dscr">Залишився лише тиждень</p>
        </div>
        
      </div>
    </header>
  );
}

export default Header;