import React from 'react';
import './Subscribe.scss'

function Subscribe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Підписка оформлена!');
  };

  return (
    <div className="subscribe container">
      <h2 className='subscribe__title'>Спіймай всі акції!</h2>
      <p className="subscribe__text">Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з'являтись у нашому магазині. А у нас їх багато :D</p>
      <form onSubmit={handleSubmit} className="subscribe__form">
        <input type="email" placeholder="Введіть" className="subscribe__input" required />
        <button type="submit" className="subscribe__button">Підписатись</button>
      </form>
    </div>
  );
}

export default Subscribe;