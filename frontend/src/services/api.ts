import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const expenseApi = {
  getExpenses: (dateRange: string) => 
    api.get('/expenses', { params: { dateRange } }),
  
  addExpense: (data: any) => 
    api.post('/expenses', data),
  
  getPredictions: (data: any) =>
    api.post('/ml/predict', data)
};

interface LoginCredentials {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

export const authApi = {
  login: (credentials: LoginCredentials) => 
    api.post<{ token: string }>('/auth/login', credentials),
  
  register: (userData: UserData) =>
    api.post<{ token: string }>('/auth/register', userData)
};
