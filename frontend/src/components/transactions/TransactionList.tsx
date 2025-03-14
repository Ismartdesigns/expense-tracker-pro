import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Chip,
  IconButton,
  TextField,
  MenuItem,
  Stack,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { Transaction, TransactionCategory } from '../../types/transaction';
import { getCategoryColor, formatAmount, formatDate } from '../../utils/transactionUtils';

const ListContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  overflow: 'hidden',
}));

const TableToolbar = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  width: 240,
  marginRight: theme.spacing(2),
}));

// Sample data - replace with actual data from your API
const sampleTransactions: Transaction[] = [
  {
    id: '1',
    date: new Date(),
    description: 'Grocery Shopping',
    amount: -125.50,
    category: 'Food & Dining',
    merchant: 'Whole Foods',
    status: 'completed',
  },
  {
    id: '2',
    date: new Date(),
    description: 'Monthly Salary',
    amount: 5000.00,
    category: 'Income',
    merchant: 'Company Inc',
    status: 'completed',
  },
  // Add more sample transactions
];

export const TransactionList: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<TransactionCategory | 'all'>('all');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredTransactions = sampleTransactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || transaction.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <ListContainer>
      <TableToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchField
            size="small"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            select
            size="small"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as TransactionCategory | 'all')}
            sx={{ width: 150 }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="Food & Dining">Food & Dining</MenuItem>
            <MenuItem value="Income">Income</MenuItem>
            {/* Add more categories */}
          </TextField>
        </Box>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </TableToolbar>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction) => (
                <TableRow key={transaction.id} hover>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: getCategoryColor(transaction.category),
                        }}
                      >
                        {transaction.merchant.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2">{transaction.description}</Typography>
                        <Typography variant="caption" color="textSecondary">
                          {transaction.merchant}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.category}
                      size="small"
                      sx={{
                        bgcolor: getCategoryColor(transaction.category) + '20',
                        color: getCategoryColor(transaction.category),
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={transaction.amount < 0 ? 'error' : 'success.main'}
                      fontWeight="medium"
                    >
                      {formatAmount(transaction.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      size="small"
                      color={transaction.status === 'completed' ? 'success' : 'default'}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredTransactions.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </ListContainer>
  );
};
export default TransactionList;