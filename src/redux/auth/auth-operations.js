import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      token.set(data.data.token);
      return data;
    } catch (error) {
      toast.error(
        "Please try again! Can't register new user with this name and email!",
      );
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.data.token);
      return data;
    } catch (error) {
      toast.error('Sorry, your name or email is incorrect! Try again!');
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/users/logout');
      token.unset();
      toast('logging out');
    } catch (error) {
      toast.error('Sorry, something went wrong!');
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);
const fetchCurrentUser = createAsyncThunk(
  'auth/current',
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
      token.unset();
      toast.error('Sorry, something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
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
