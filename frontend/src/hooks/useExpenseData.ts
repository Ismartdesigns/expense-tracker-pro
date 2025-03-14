import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchExpenseData } from '../services/expenseService';
import { setExpenses } from '../store/slices/reportsSlice'; // Ensure this import is correct

export const useExpenseData = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { expenses, dateRange } = useAppSelector(state => state.reports);

  useEffect(() => {
    const loadExpenseData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchExpenseData(dateRange);
        dispatch(setExpenses(data)); // Make sure setExpenses is properly imported
      } catch (error) {
        setError('Failed to load expense data');
        console.error('Error loading expense data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenseData();
  }, [dateRange, dispatch]);

  const totalExpenses = expenses.reduce((sum: number, exp: { amount: number }) => sum + exp.amount, 0);

  // Return dateRange as an object with start and end properties
  return {
    expenseData: expenses,
    totalExpenses,
    loading,
    error,
    dateRange: {
      start: new Date().toLocaleDateString(), // Replace with actual start date logic
      end: new Date().toLocaleDateString() // Replace with actual end date logic
    }
  };
};
