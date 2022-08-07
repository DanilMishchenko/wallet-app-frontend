import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchBalance = createAsyncThunk(
  'current/balance',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/current/balance');
      return data;
    } catch (error) {
      toast.error('Unable to get user balance');
      return rejectWithValue(error.message);
    }
  },
);
