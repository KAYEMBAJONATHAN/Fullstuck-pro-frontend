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
      state.items = state.items.filter(itemId => itemId.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    fetchCartItems: (state, action) => {
      state.items = action.payload || [];
    },
  },
});

export const { addToCart, removeFromCart, fetchCartItems } = cartSlice.actions;
export default cartSlice.reducer;
