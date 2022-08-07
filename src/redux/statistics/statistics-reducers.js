import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './statistics-operations';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [getStatistics.pending](state, { payload }) {
      state.isLoading = true;
    },
    [getStatistics.fulfilled](state, { payload }) {
      state.data = payload.data.result;
      state.isLoading = false;
    },
    [getStatistics.rejected](state, { payload }) {
      state.isLoading = false;
    },
  },
});
