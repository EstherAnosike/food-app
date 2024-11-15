import React, { useState } from 'react';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const foods = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 7 },
    { id: 3, name: 'Pasta', price: 12 },
    { id: 4, name: 'Salad', price: 5 },
  ];

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className="app">
      <h1>Order your food!</h1>
      <FoodList foods={foods} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
