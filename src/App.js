import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/navigation';
import Product from './Components/product';
import Order from './Components/order';
import User from './Components/user';
import Cart from './Components/cart';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/users" element={<User />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
