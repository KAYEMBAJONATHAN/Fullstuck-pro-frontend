import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './Redux/Slice/cartSlice';
import ProductList from './Components/Product/ProductList';
import Cart from './Components/Cart/Cart';

const App = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    // Add more products as needed
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container">
      <ProductList products={products} addToCart={handleAddToCart} />
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
