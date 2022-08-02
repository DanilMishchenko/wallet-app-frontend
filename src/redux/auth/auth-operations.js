import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-app-backend-project.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      error.message =
        "Please try again! Can't register new user with this name and email!";
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('Sorry, your name or email is incorrect! Try again!');
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk('/auth/logout', async credentials => {
  try {
    await axios.get('/users/logout');
    token.unset();
  } catch (error) {
    alert(error);
  }
});
const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      alert(error);
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
