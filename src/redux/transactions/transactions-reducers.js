// import { createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {
//   fetchTransactions,
//   addTransaction,
//   getTransactionDate,
//   getTransactionsList,
// } from './transactions-operations';

// const initialState = {
//   stats: null,
//   categoriesList: null,
//   items: [],
//   isLoading: false,
//   error: null,
// };

// export const transactionSlice = createSlice({
//   name: 'transaction',
//   initialState,
//   extraReducers: {
//     [getTransactionDate.fulfilled](state, { payload }) {
//       state.stats = payload;
//       state.isLoading = false;
//     },
//     [getTransactionDate.pending](state, { payload }) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [getTransactionDate.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [getTransactionsList.fulfilled](state, { payload }) {
//       state.categoriesList = payload;
//     },

//     [fetchTransactions.fulfilled](state, { payload }) {
//       state.items = payload;
//       state.isLoading = false;
//     },
//     [fetchTransactions.pending](state, { payload }) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [fetchTransactions.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addTransaction.fulfilled](state, { payload }) {
//       state.items = [payload, ...state];
//       state.isLoading = false;
//     },
//     [addTransaction.pending](state, { payload }) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [addTransaction.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });
// export const transactionsApi = createApi({
//   reducerPath: 'transactionsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://wallet-app-backend-project.herokuapp.com',
//   }),
//   tagTypes: ['Transactions'],
//   endpoints: builder => ({
//     fetchTransactions: builder.query({
//       query: token => ({
//         url: '/transactions',
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       providesTags: ['Transactions'],
//     }),
//     createTransactions: builder.mutation({
//       query: content => ({
//         url: '/transactions',
//         method: 'POST',
//         body: {
//           type: content.type,
//           category: content.category,
//           sum: content.sum,
//           date: content.date,
//         },
//         headers: {
//           Authorization: `Bearer ${content.token}`,
//         },
//       }),
//       invalidatesTags: ['Transactions'],
//     }),
//   }),
// });
// export const { useFetchTransactionsQuery, useCreateTransactionsMutation } =
//   transactionsApi;
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  getTransactionDate,
  getTransactionsList,
} from './transactions-operations';

const stats = createReducer(null, {
  [getTransactionDate.fulfilled]: (_, { payload }) => payload,
});

const categoriesList = createReducer(null, {
  [getTransactionsList.fulfilled]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [payload, ...state],
});

const isLoading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,
  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,
  [getTransactionDate.pending]: () => true,
  [getTransactionDate.fulfilled]: () => false,
  [getTransactionDate.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, { payload }) => payload,
  [fetchTransactions.pending]: () => null,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.pending]: () => null,
  [getTransactionDate.rejected]: (_, { payload }) => payload,
  [getTransactionDate.pending]: (_, { payload }) => null,
});

export default combineReducers({
  stats,
  categoriesList,
  items,
  isLoading,
  error,
});
