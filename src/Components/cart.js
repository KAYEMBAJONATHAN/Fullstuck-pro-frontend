import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItemsAPI, removeFromCartAPI } from "./Api/cartApi";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch cart items from the backend
    fetchCartItemsAPI()
      .then((data) => {
        // Dispatch fetched items to Redux store
        dispatch(fetchCartItems(data));
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [dispatch]);

  const handleRemoveFromCart = async (itemId) => {
    try {
      // Remove from backend
      await removeFromCartAPI(itemId);

      // Remove from Redux store
      dispatch(removeFromCart(itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.product._id} className="cart-item">
          <p>{item.product.name}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveFromCart(item.product._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
