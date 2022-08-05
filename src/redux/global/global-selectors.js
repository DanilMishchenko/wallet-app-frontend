import { createSlice } from '@reduxjs/toolkit';
import * as globalActions from './global-action';
import { financeOperations } from '../finance';
//import { sessionOperations } from '../session'

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: 'finanse',
  initialState,
  extraReducers: {
    [globalActions.openModalAddTransaction](state) {
      state.isModalAddTransactionOpen = true;
    },
    [globalActions.closeModalAddTransaction](state) {
      state.isModalAddTransactionOpen = false;
    },
    [globalActions.openModalLogout](state) {
      state.isModalLogoutOpen = true;
    },
    [globalActions.closeModalLogout](state) {
      state.isModalLogoutOpen = false;
    },
    [financeOperations.getAllTransactions.pending](state) {
      state.isLoading = true;
    },
    [financeOperations.getAllTransactions.fulfilled](state) {
      state.isLoading = false;
    },
    [financeOperations.getAllTransactions.rejected](state) {
      state.isLoading = false;
    },
    [financeOperations.addTransaction.pending](state) {
      state.isLoading = true;
    },
    [financeOperations.addTransaction.fulfilled](state) {
      state.isLoading = false;
    },
    [financeOperations.addTransaction.rejected](state) {
      state.isLoading = false;
    },
    [financeOperations.getStatistics.pending](state) {
      state.isLoading = true;
    },
    [financeOperations.getStatistics.fulfilled](state) {
      state.isLoading = false;
    },
    [financeOperations.getStatistics.rejected](state) {
      state.isLoading = false;
    },
    [financeOperations.getCategories.pending](state) {
      state.isLoading = true;
    },
    [financeOperations.getCategories.fulfilled](state) {
      state.isLoading = false;
    },
    [financeOperations.getCategories.rejected](state) {
      state.isLoading = false;
    },
    // [sessionOperations.signUp.pending](state) {
    //   state.isLoading = true
    // },
    // [sessionOperations.signUp.fulfilled](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.signUp.rejected](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.logIn.pending](state) {
    //   state.isLoading = true
    // },
    // [sessionOperations.logIn.fulfilled](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.logIn.rejected](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.refreshCurrentUser.pending](state) {
    //   state.isLoading = true
    // },
    // [sessionOperations.refreshCurrentUser.fulfilled](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.refreshCurrentUser.rejected](state) {
    //   state.isLoading = false
    // },
    // [sessionOperations.logOut.pending](state) {
    //   state.isLoading = true
    // },
    // [sessionOperations.logOut.fulfilled](state) {
    //   state.isModalLogoutOpen = false
    //   state.isLoading = false
    // },
    // [sessionOperations.logOut.rejected](state) {
    //   state.isLoading = false
    // },
  },
});

export default globalSlice.reducer;
