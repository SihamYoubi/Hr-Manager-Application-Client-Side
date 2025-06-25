import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7297/api', 
});

// Add token automatically to each request if exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
