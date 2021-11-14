import axios from 'axios';

const apiKey = process.env.REACT_APP_BASE_API_KEY;

console.log('apiKey', apiKey);

const axiosInstance = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    'X-Api-Factory-Application-Id': apiKey,
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosInstance;
