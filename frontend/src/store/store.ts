import { configureStore } from '@reduxjs/toolkit';
import reportsReducer from './slices/reportsSlice'; // Import your reducers

export const store = configureStore({
  reducer: {
    reports: reportsReducer, // Add reducers here
  },
});

// Infer the types for use in hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
