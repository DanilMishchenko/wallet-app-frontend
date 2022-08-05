import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: { isModalLogoutOpen: false, isModalTransitionOpen: false },
  reducers: {
    modalLogout: (state, action) => {
      state.isModalLogoutOpen = action.payload;
    },
    modalTransition: (state, action) => {
      state.isModalTransitionOpen = action.payload;
    },
  },
});

export const { modalLogout, modalTransition } = globalSlice.actions;

export const getIsModalLogoutOpen = state => state.global.isModalLogoutOpen;
export const getIsModalTransitionOpen = state =>
  state.global.isModalTransitionOpen;
