import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-app-backend-project.herokuapp.com';

export const getStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions/details', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
