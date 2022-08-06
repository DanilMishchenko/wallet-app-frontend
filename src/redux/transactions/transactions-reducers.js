import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions, addTransaction } from './transactions-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchTransactions.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchTransactions.pending](state, { payload }) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addTransaction.fulfilled](state, { payload }) {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },
    [addTransaction.pending](state, { payload }) {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
