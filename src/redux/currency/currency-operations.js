//import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CURRENCY_URI = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;

const getCurrency = createAsyncThunk('currency/fetch', async () => {
  const res = await fetch(CURRENCY_URI).then(data => data.json());
  return res;
});

const currencyOperations = {
  getCurrency,
};

export default currencyOperations;
