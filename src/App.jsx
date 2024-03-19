import React from 'react';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Products from './components/Products/Products';
import Subscribe from './components/Subscribe/Subscribe';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Catalog />
        <Products />
        <Subscribe />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;