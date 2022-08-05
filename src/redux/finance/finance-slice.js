import { createSlice } from '@reduxjs/toolkit';
import * as financeOperations from './finance-operations';
//import { sessionOperations } from '../session'

const initialState = {
  totalBalance: null,
  transactions: [],
  statistics: {
    data: [],
    expenses: null,
    income: null,
  },
  categories: [],
  error: null,
};

const financeSlice = createSlice({
  name: 'finanse',
  initialState,
  extraReducers: {
    [financeOperations.getAllTransactions.fulfilled](state, { payload }) {
      state.totalBalance = payload.data.totals.balance;
      state.transactions = payload.data.allTransactions;
      state.error = null;
    },
    [financeOperations.getAllTransactions.rejected](state, { payload }) {
      state.error = payload;
    },
    [financeOperations.addTransaction.fulfilled](state, { payload }) {
      state.error = null;
    },
    [financeOperations.addTransaction.rejected](state, { payload }) {
      state.error = payload;
    },
    [financeOperations.getStatistics.fulfilled](state, { payload }) {
      state.statistics.data = payload.data.statistics;
      state.statistics.expenses = payload.data.totals.expense;
      state.statistics.income = payload.data.totals.income;
      state.error = null;
    },
    [financeOperations.getStatistics.rejected](state, { payload }) {
      state.error = payload;
    },
    [financeOperations.getCategories.fulfilled](state, { payload }) {
      state.categories = payload.data.categories;
      state.error = null;
    },
    [financeOperations.getCategories.rejected](state, { payload }) {
      state.error = payload;
    },
    // [sessionOperations.logOut.fulfilled](state) {
    //   state.totalBalance = null
    //   state.transactions = []
    //   state.statistics = {
    //     data: [],
    //     expenses: null,
    //     income: null,
    //   }
    //   state.categories = []
    //   state.error = null
    // },
  },
});

export default financeSlice.reducer;
