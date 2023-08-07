import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.orders.push(action.payload);
    },
    // Other order-related reducer logic
  },
});

export const { adduser } = userSlice.actions;

export default userSlice.reducer;
