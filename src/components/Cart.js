import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
