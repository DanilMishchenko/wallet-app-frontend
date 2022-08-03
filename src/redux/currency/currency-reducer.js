import { createSlice } from '@reduxjs/toolkit';
import { baseCurrency } from '../../components/Currency/constants';
import currencyOperations from './currency-operations';

const initialState = {
  exchangeRate: [],
  session: { isLoading: false, error: null },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: {
    [currencyOperations.fetch.fulfilled](state, action) {
      state.exchangeRate = action.payload.exchangeRate.filter(({ currency }) =>
        baseCurrency.includes(currency),
      );
      state.session.isLoading = false;
    },
    [currencyOperations.fetch.rejected](state, { payload }) {
      state.session.error = payload;
      state.session.isLoading = false;
    },

    [currencyOperations.fetch.pending](state, _) {
      state.session.isLoading = true;
    },
  },
});
