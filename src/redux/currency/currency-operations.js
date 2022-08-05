import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CURRENCY_URI = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

const fetch = createAsyncThunk('currency/fetch', async (date, _) => {
  try {
    const { data } = await axios.get(CURRENCY_URI);
    return data;
  } catch (error) {
    return error.message;
  }
});

const currencyOperations = {
  fetch,
};

export default currencyOperations;
