import { createSlice } from '@reduxjs/toolkit';
import currencyOperations from './currency-operations';

const initialState = {
  exchangeRate: [],
  isOpen: false,
  session: { isLoading: false, error: null },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setOpen: (state, _) => void (state.isOpen = true),
    setClose: (state, _) => void (state.isOpen = false),
  },
  extraReducers: {
    [currencyOperations.getCurrency.fulfilled](state, action) {
      state.exchangeRate = action.payload;
      state.session.isLoading = false;
    },
    [currencyOperations.getCurrency.rejected](state, { payload }) {
      state.session.error = payload;
      state.session.isLoading = false;
    },
    [currencyOperations.getCurrency.pending](state, _) {
      state.session.isLoading = true;
    },
  },
});

export const { setOpen, setClose } = currencySlice.actions;
