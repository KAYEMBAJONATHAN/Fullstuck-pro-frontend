import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    fetchCartItems: (state, action) => {
      state.items = action.payload || [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, fetchCartItems } = cartSlice.actions;
export default cartSlice.reducer;

