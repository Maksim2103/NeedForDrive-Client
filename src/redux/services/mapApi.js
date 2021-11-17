import axios from 'axios';

const apiKey = process.env.REACT_APP_MAP_API_KEY;

const mapApiAxiosInstance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x',
  headers: {
    apikey: apiKey,
    'Access-Control-Allow-Origin': '*',
  },
});

export default mapApiAxiosInstance;
