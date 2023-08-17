import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/orders/';

export const fetchOrders = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
