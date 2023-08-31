import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Api/productApi';
import { setProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { fetchCartItemsAPI } from './Api/cartApi';
import { fetchCartItems } from '../redux/slices/cartSlice'; // Import fetchCartItems
import './product.css';


const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.products);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        dispatch(setProducts(fetchedProducts));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  const handleAddToCart = async (product) => {
    // Cart logic
    dispatch(addToCart(product));
    try {
      const updatedCartItems = await fetchCartItemsAPI();
      dispatch(fetchCartItems(updatedCartItems)); // Corrected action name here
    } catch (error) {
      console.error("Error fetching updated cart items:", error);
    }
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
