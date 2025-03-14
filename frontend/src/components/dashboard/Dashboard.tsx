import React from 'react';
import { Box, Typography, Paper, Tabs, Tab } from '@mui/material';
import ExpenseChart from '../common/ExpenseChart';
import { ExpenseSummary } from '../common/ExpenseSummary';
import { TransactionList } from '../transactions/TransactionList';
import { useExpenseData } from '../../hooks/useExpenseData';

export const Dashboard: React.FC = () => {
  const [tab, setTab] = React.useState('spending');
  const { dateRange } = useExpenseData();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      
      <Tabs value={tab} onChange={(_, v) => setTab(v)}>
        <Tab label="Spending" value="spending" />
        <Tab label="Income" value="income" />
        <Tab label="Net Income" value="net_income" />
        <Tab label="Savings" value="savings" />
      </Tabs>
      <ExpenseSummary />
      <ExpenseChart dateRange={{ start: dateRange.start, end: dateRange.end }} />
      <TransactionList />
    </Box>
  );
};
