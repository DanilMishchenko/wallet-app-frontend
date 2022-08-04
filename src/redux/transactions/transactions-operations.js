import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BACK_END = 'https://wallet-app-backend-project.herokuapp.com';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(`/transactions`);
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
    try {
      const { data: response } = await axios.post(
        `/transactions`,
        transactionBody,
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
    try {
      const { data: response } = await axios.get(`/transactions/categories`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
