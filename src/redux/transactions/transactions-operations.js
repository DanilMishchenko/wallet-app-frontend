import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { store } from '../store';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    const token = store.getState().auth.token;
    try {
      const { data: response } = await axios.get(`/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/transactions`, credentials);
      return data;
    } catch (err) {
      toast.error('error, transaction was not saved');
      return rejectWithValue(err.message);
    }
  },
);

export const fetchTransactionsByCategory = createAsyncThunk(
  'transactions/fetchTransactionsByCategory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/transactions/categories`);
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
