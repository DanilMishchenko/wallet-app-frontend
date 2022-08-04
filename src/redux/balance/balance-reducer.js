import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  income: 0,
  expenses: 0,
};

export const balanceSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount(state, action) {
      state.value += action.payload;
      state.income += action.payload;
    },
    decrementByAmount(state, action) {
      state.value -= action.payload;
      state.expenses += action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = balanceSlice.actions;
export const getBalance = state => state.counter.value;
export const getIncome = state => state.counter.income;
export const getExpenses = state => state.counter.expenses;
