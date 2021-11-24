import { createAsyncThunk } from '@reduxjs/toolkit';
import mapApiAxiosInstance from './services/mapApi';
import axiosInstance from './services/rootApi';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

const fetchAsyncGetCities = createAsyncThunk(
  'fetchAsyncGetCities',
  async () => {
    const response = await axiosInstance.get(`/db/city`);
    return response.data.data;
  },
);

const fetchAsyncGetPoints = createAsyncThunk(
  'fetchAsyncGetPoints',
  async () => {
    const response = await axiosInstance.get(`/db/point`);
    return response.data.data;
  },
);

const fetchAsyncGetCityCoordinates = createAsyncThunk(
  'fetchAsyncGetCityCoordinates',
  async (city) => {
    const response = await mapApiAxiosInstance.get(
      `/?apikey=${mapApiKey}&format=json&geocode=${city}`,
    );
    return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      .split(' ')
      .reverse();
  },
);

const fetchAsyncGetPointsCoordinates = createAsyncThunk(
  'fetchAsyncGetPointsCoordinates',
  async (points) => {
    const response = await mapApiAxiosInstance.get(
      `/?apikey=${mapApiKey}&format=json&geocode=${points}`,
    );
    return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      .split(' ')
      .reverse();
  },
);

const fetchAsyncGetCars = createAsyncThunk('fetchAsyncGetCars', async () => {
  const response = await axiosInstance.get(`/db/car`);
  return response.data.data;
});

const fetchAsyncGetRate = createAsyncThunk(
  '/db/rate/fetchAsyncGetRate',
  async () => {
    const response = await axiosInstance.get(`/db/rate`);
    return response.data.data;
  },
);

export {
  fetchAsyncGetCities,
  fetchAsyncGetPoints,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPointsCoordinates,
  fetchAsyncGetCars,
  fetchAsyncGetRate,
};
