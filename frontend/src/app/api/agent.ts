import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

