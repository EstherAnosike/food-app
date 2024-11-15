import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foods, addToCart }) => {
  return (
    <div className="food-list">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FoodList;
