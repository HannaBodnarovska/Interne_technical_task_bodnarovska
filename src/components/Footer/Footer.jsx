import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer container">
      <div className='footer__list'>
        <div className="footer__box">
          <h3>Контакт - центр</h3>
          <p>098 900 09 09</p>
          <p>Пн - Пт 09:00 - 21:00</p>
          <p>Пн - Пт 09:00 - 21:00</p>
        </div>
        <div className="footer__box">
          <h3>Покупцям</h3>
          <p>Оплата і доставка</p>
          <p>Повернення</p>
          <p>Питання і відповіді</p>
          
        </div>
        <div className="footer__box">
          <h3>Особистий кабінет</h3>
          <p>Мої дані</p>
          <p>Історія замовлень</p>
          <p>Улюблені</p>
          <p>Розсилки</p>
        </div>
        <div className="footer__box">
          <h3>Про компанію</h3>
          <p>Про нас</p>
          <p>Новини</p>
          <p>Стати партнером</p>
          <p>Угода користувача</p>
        </div>
      </div>
      
      <div className="footer__copyright">
        <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
      </div>
    </footer>
  );
}

export default Footer;
