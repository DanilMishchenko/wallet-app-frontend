import { createSlice } from '@reduxjs/toolkit';
import { fetchBalance } from './balance-operacions';

const initialState = {
  balance: null,
  isLoading: null,
  error: null,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [fetchBalance.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.balance = payload.data.balance;
    },
    [fetchBalance.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchBalance.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
