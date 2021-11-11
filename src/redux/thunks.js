import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './services/rootApi';

const fetchAsyncGetCities = createAsyncThunk(
  '/db/city/fetchAsyncGetCities',
  async () => {
    const response = await axiosInstance.get(`/db/city`);
    console.log('dis', response);
    return response.data.data;
  },
);

export { fetchAsyncGetCities };
