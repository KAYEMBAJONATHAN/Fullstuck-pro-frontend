import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.users.push(action.payload);
    },
    fetchUsers: (state, action) => {
      state.users = action.payload;
    } 
  },
});

export const { adduser,  fetchUsers } = userSlice.actions;

export default userSlice.reducer;
