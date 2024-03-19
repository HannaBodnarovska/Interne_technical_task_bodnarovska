import React from 'react';
import './Catalog.scss'

const Catalog = () => {
  return (
    <div className="catalog container">
      <div>
        <h2>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцією термобілизни “Big warm”</h2>
        <p>Ми знаємо, що сподобається вашим “великим” друзям!</p>
        <button>До каталогу</button>
      </div>

      <div className="image-container">
        <img src="././img/Subscribe.png" alt="Big Warm Collection" />
      </div>
    </div>
  );
}

export default Catalog;