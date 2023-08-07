import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slices/cartSlice';
import productReducer from '../redux/slices/productSlice';
import orderReducer from '../redux/slices/orderSlice';e
import userReducer from '../redux/slices/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    orders: orderReducer,
    users: userReducer,
  },
});

export default store;
