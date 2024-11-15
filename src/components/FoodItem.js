import React from 'react';

const FoodItem = ({ food, addToCart }) => {
  return (
    <div className="food-item">
      <h4>{food.name}</h4>
      <p>Price: ${food.price}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
