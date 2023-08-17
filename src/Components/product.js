import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Api/productApi';
import './product.css';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProductList(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    //Cart logic 
    console.log('Adding to cart:', product);
  };

  return (
    <div className="product-list">
        <h2>ProductList</h2>
      {productList.map((product) => (
        <div key={product._id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
