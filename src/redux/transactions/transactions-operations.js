import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { store } from '../store';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (page, { rejectWithValue }) => {
    const token = store.getState().auth.token;
    try {
      const { data: response } = await axios.get(
        `/transactions?page=${page}&limit=5`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      // return response.data.result;
      return response.data;
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
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchTransactionsDetails = createAsyncThunk(
  'transactions/fetchTransactionsDetails',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/transactions/details?`, credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
