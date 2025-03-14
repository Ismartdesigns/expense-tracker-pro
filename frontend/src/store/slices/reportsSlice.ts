import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReportsState {
  dateRange: string;
  breakdown: string;
  activeTab: string;
  expenses: Array<{
    category: string;
    amount: number;
    date: string;
  }>;
}

const initialState: ReportsState = {
  dateRange: 'this_month',
  breakdown: 'category',
  activeTab: 'spending',
  expenses: [],
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<string>) => {
      state.dateRange = action.payload;
    },
    setBreakdown: (state, action: PayloadAction<string>) => {
      state.breakdown = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setExpenses: (state, action: PayloadAction<any[]>) => {
      state.expenses = action.payload;
    },
  },
});

export const { setDateRange, setBreakdown, setActiveTab, setExpenses } = reportsSlice.actions;
export default reportsSlice.reducer;