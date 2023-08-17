import axios from 'axios';

export const fetchCartItemsAPI = async () => {
  try {
    const response = await axios.get('/api/v1/carts/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addToCartAPI = (item) => {
  return axios.post('/api/v1/carts', item);
};

export const removeFromCartAPI = (itemId) => {
  return axios.delete(`/api/v1/carts/${itemId}`);
};
