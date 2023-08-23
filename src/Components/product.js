
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Api/productApi';
import { setProducts } from '../redux/slices/productSlice'

import './product.css';

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        dispatch(setProducts(fetchedProducts)); // Dispatch the entire fetchedProducts array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Cart logic
    console.log('Adding to cart:', product);
  };

  return (
    <div>
      <h2 className="header">ProductList</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
