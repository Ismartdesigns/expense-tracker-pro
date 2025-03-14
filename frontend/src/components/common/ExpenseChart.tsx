import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ExpenseChartProps } from '../../types/ExpenseChartProps'; // Adjust the import path as necessary

const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3)
}));

// Sample data - this should be replaced with actual data based on the dateRange
const getDataForDateRange = (dateRange: string) => {
  // Here you would typically fetch or filter your data based on the dateRange
  // For demonstration, I'm using static data
  const data = [
    { day: '1', 'Dining & Drinks': 10, 'Charity & Donations': 5 },
    { day: '2', 'Dining & Drinks': 30, 'Charity & Donations': 10 },
    { day: '3', 'Dining & Drinks': 0, 'Charity & Donations': 0 },
    { day: '4', 'Dining & Drinks': 15, 'Charity & Donations': 20 },
    { day: '5', 'Dining & Drinks': 600, 'Charity & Donations': 50 }
  ];

  // Filter data based on dateRange logic (this is just a placeholder)
  if (dateRange === 'this_month') {
    return data; // Return all data for this month
  } else if (dateRange === 'by_category') {
    // Example of filtering by category (you can implement your own logic)
    return data.map(item => ({
      day: item.day,
      'Dining & Drinks': item['Dining & Drinks'],
      'Charity & Donations': item['Charity & Donations']
    }));
  }
  // Add more conditions for other date ranges as needed
  return data; // Default return
};

const ExpenseChart: React.FC<ExpenseChartProps> = ({ dateRange }) => {
  // Your chart logic here, using dateRange.start and dateRange.end

  return (
    <ChartContainer>
      <BarChart width={800} height={400} data={getDataForDateRange(`${dateRange.start} to ${dateRange.end}`)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Dining & Drinks" fill="#4F46E5" />
        <Bar dataKey="Charity & Donations" fill="#22C55E" />
      </BarChart>
    </ChartContainer>
  );
};

export default ExpenseChart;