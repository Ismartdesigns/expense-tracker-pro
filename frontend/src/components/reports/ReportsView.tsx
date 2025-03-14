import React, { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography,
  Paper,
  ButtonGroup,
  Button,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpenseChart from '../common/ExpenseChart';
import TransactionList from '../transactions/TransactionList';

const ReportTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 100,
    color: theme.palette.text.primary,
  }
}));

const FilterButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
}));

const ReportsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('spending');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: new Date().toISOString().split('T')[0], // Set to today's date
    end: new Date().toISOString().split('T')[0],   // Set to today's date
  });

  const handleDateRangeChange = (range: { start: string; end: string }) => {
    setDateRange(range);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      
      {/* Button Group for Date Range Selection */}
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ marginBottom: 2 }}>
        <FilterButton onClick={() => handleDateRangeChange({ start: '2024-02-01', end: '2024-02-05' })}>
          This Month
        </FilterButton>
        <FilterButton onClick={() => handleDateRangeChange({ start: '2024-01-01', end: '2024-01-31' })}>
          Last Month
        </FilterButton>
        <FilterButton onClick={() => handleDateRangeChange({ start: '2024-01-01', end: '2024-12-31' })}>
          This Year
        </FilterButton>
      </ButtonGroup>

      <ReportTabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
        <Tab label="Spending" value="spending" />
        <Tab label="Income" value="income" />
        <Tab label="Net Income" value="net_income" />
        <Tab label="Savings" value="savings" />
      </ReportTabs>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <ExpenseChart dateRange={{ start: dateRange.start, end: dateRange.end }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <TransactionList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsView;
