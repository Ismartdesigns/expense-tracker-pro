import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

export const fetchExpenseData = async (dateRange: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses`, {
      params: { dateRange }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching expense data:', error);
    throw error;
  }
};