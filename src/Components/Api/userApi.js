import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/users/';

export const fetchUsersAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
