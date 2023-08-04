import React from 'react';
import { useState, useEffect } from 'react';
import './product.css';

const Product = ({ product, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch products 
    fetch('http://localhost:3000/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));

    // Fetch carts 
    fetch('http://localhost:3000/api/v1/carts')
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (product) => {
    // Add the product to the cart in the backend
    fetch('http://localhost:3000/api/v1/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.log(error));
  };

  const handleRemoveFromCart = (productId) => {
    // Remove the product from the cart in the backend
    fetch(`http://localhost:3000/api/v1/cart/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
