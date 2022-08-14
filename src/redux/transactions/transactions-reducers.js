import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  fetchTransactionsByCategory,
  fetchTransactionsDetails,
} from './transactions-operations';

const initialState = {
  items: [],
  category: [],
  page: 1,
  totalItems: 0,
  summaryIncome: '',
  summaryExpenses: '',
  isLoading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchTransactions.fulfilled](state, { payload }) {
      state.items = payload.result;
      state.page = payload.page;
      state.totalItems = payload.totalItems;

      state.isLoading = false;
    },
    [fetchTransactions.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addTransaction.fulfilled](state) {
      state.isLoading = false;
    },
    [addTransaction.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchTransactionsByCategory.fulfilled](state, { payload }) {
      state.category = payload.data;
      state.isLoading = false;
    },
    [fetchTransactionsByCategory.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactionsByCategory.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchTransactionsDetails.fulfilled](state, { payload }) {
      const summary = payload.data.result.filter(item => !item.category);
      state.category = payload.data.result;
      state.summaryExpenses = summary.find(
        ({ type }) => type === false,
      )?.totalSum;
      state.summaryIncome = summary.find(({ type }) => type === true)?.totalSum;
      state.isLoading = false;
    },
    [fetchTransactionsDetails.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactionsDetails.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
