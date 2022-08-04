import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    const token = store.getState().auth.token;
    try {
      const { data: response } = await axios.get(`/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      return response.data.result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionBody, { rejectWithValue }) => {
    const token = store.getState().auth.token;
    try {
      const { data: response } = await axios.post(
        `/transactions`,
        transactionBody,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(response);
      return response.data.transaction;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchTransactionsByCategory = createAsyncThunk(
  'transactions/fetchTransactionsByCategory',
  async (_, { rejectWithValue }) => {
    const token = store.getState().auth.token;
    try {
      const { data: response } = await axios.get(`/transactions/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
