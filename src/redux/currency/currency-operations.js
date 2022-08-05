import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CURRENCY_URI = `https://api.privatbank.ua/p24api/exchange_rates?json`;

const fetch = createAsyncThunk('currency/fetch', async (date, _) => {
  try {
    const { data } = await axios.get(`${CURRENCY_URI}&date=${date}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

const currencyOperations = {
  fetch,
};

export default currencyOperations;
