import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
