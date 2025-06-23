import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/Auth/login', {
    email,
    password,
  });

  // Save the token in localStorage
  localStorage.setItem('token', response.data.token);

  return response.data;
};
