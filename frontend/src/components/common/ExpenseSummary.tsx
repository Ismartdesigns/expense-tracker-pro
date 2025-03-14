import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useExpenseData } from '../../hooks/useExpenseData';

export const ExpenseSummary: React.FC = () => {
  const { totalExpenses, dateRange } = useExpenseData();

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6">Total expenses</Typography>
      <Typography variant="h3">${totalExpenses.toFixed(2)}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {dateRange.start} - {dateRange.end}
      </Typography>
    </Paper>
  );
};