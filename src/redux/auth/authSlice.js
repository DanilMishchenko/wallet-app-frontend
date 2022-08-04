import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { email: null, name: null },
  token: null,
  session: { isAuth: false, error: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.session.isAuth = true;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.session.error = payload;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.session.isAuth = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.session.error = payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.session.isAuth = false;
    },
    [authOperations.logOut.rejected](state, { payload }) {
      state.session.error = payload;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.session.isAuth = true;
    },
  },
});

export default authSlice.reducer;
