import axios from 'axios';

const API_URL = '';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
