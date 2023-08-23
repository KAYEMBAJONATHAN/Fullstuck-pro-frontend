import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/carts';

export const fetchCartItemsAPI = async () => {
  try {
    const response = await axios.get(API_URL); // Remove "/carts"
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

export const addToCartAPI = (item) => {
  return axios.post(API_URL, item); // Remove "/carts"
};

export const removeFromCartAPI = (itemId) => {
  return axios.delete(`${API_URL}/${itemId}`); // Add itemId to the URL
};
