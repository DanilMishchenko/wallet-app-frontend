import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { email: '', name: '', balance: null },
  token: null,
  session: { isAuth: false, error: null },
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.session.isAuth = true;
      state.session.error = null;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.session.error = payload;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.session.isAuth = true;
      state.session.error = null;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.session.error = payload;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, balance: null };
      state.token = null;
      state.session.isAuth = false;
      state.session.error = null;
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.session.error = payload;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.session.isAuth = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
