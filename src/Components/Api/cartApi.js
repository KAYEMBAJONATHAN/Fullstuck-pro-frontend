import axios from 'axios';

const API_URL = '';

export const fetchCartItems = () => {
  return axios.get(`${API_URL}/cart`);
};

export const addToCartAPI = (item) => {
  return axios.post(`${API_URL}/cart`, item);
};

export const removeFromCartAPI = (itemId) => {
  return axios.delete(`${API_URL}/cart/${itemId}`);
};
