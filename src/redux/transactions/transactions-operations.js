import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BACK_END = 'https://wallet-app-backend-project.herokuapp.com';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(`${BACK_END}/transactions`);
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
        `${BACK_END}/transactions`,
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
      const { data: response } = await axios.get(
        `${BACK_END}/api/transactions/categories`,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getTransactionDate = createAsyncThunk(
  'transactions/getTransactionDate',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/transactions/categories?month=${month}&year=${year}`,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getTransactionsList = createAsyncThunk(
  'transactions/getTransactionsList',
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/transactions/list`,
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
