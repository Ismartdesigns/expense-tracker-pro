import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

// Type definitions
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Auth API methods
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => 
    (await axios.post<AuthResponse>(`${API_BASE_URL}/users/login`, credentials)).data,

  register: async (userData: RegisterCredentials): Promise<AuthResponse> => 
    (await axios.post<AuthResponse>(`${API_BASE_URL}/users/register`, userData)).data,

  logout: async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem('token');
    }
  },

  verifyToken: async () => {
    try {
      const response = await api.get<{ valid: boolean }>('/auth/verify');
      return response.data.valid;
    } catch (error) {
      return false;
    }
  },

  resetPassword: async (email: string) => {
    try {
      const response = await api.post('/auth/reset-password', { email });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Password reset failed');
    }
  },

  updatePassword: async (token: string, newPassword: string) => {
    try {
      const response = await api.post('/auth/update-password', {
        token,
        newPassword,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Password update failed');
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Failed to fetch profile');
    }
  },

  updateProfile: async (profileData: Partial<{ name: string; email: string }>) => {
    try {
      const response = await api.put('/auth/profile', profileData);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Failed to update profile');
    }
  },
};

// Export the api instance for other services to use
export { api };
