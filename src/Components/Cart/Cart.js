import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : null}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total Price: ${calculateTotalPrice(cartItems)}</p>
    </div>
  );
};

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
