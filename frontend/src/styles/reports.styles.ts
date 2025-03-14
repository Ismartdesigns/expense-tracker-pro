import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const StyledReportContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  '& .MuiTabs-root': {
    marginBottom: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
  }
}));

export const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2, 0),
  '& .MuiSelect-root': {
    minWidth: '150px',
  }
}));