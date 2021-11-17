import { createAsyncThunk } from '@reduxjs/toolkit';
import mapApiAxiosInstance from './services/mapApi';
import axiosInstance from './services/rootApi';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

const fetchAsyncGetCities = createAsyncThunk(
  '/db/city/fetchAsyncGetCities',
  async () => {
    const response = await axiosInstance.get(`/db/city`);
    return response.data.data;
  },
);

const fetchAsyncGetPoints = createAsyncThunk(
  '/db/city/fetchAsyncGetPoints',
  async () => {
    const response = await axiosInstance.get(`/db/point`);
    return response.data.data;
  },
);

const fetchAsyncGetCityCoordinates = createAsyncThunk(
  '/fetchAsyncGetCityCoordinates',
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
  '/fetchAsyncGetPointsCoordinates',
  async (points) => {
    const response = await mapApiAxiosInstance.get(
      `/?apikey=${mapApiKey}&format=json&geocode=${points}`,
    );
    return response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
      .split(' ')
      .reverse();
  },
);

export {
  fetchAsyncGetCities,
  fetchAsyncGetPoints,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPointsCoordinates,
};
