// import React from 'react';
import { Box, Typography, Grid, Paper, CircularProgress, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Link } from 'react-router-dom';

// Sidebar items (matching the image)
const sidebarItems = [
  { icon: '🔍', label: 'Search' },
  { icon: '📋', label: 'Lists' },
  { icon: '↔️', label: 'Transactions' },
  { icon: '📆', label: 'Calendar' },
  { icon: '📊', label: 'Reports' },
  { icon: '⚠️', label: 'Alerts' },
  { icon: '📈', label: 'Investments' },
];

// Styled components
const AppContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#f0f2f5',
});

const SidebarContainer = styled(Box)({
  width: '55px',
  backgroundColor: '#4527a0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
  color: 'white',
});

const SidebarIcon = styled(Box)({
  marginBottom: '25px',
  cursor: 'pointer',
  fontSize: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
});

const MainContent = styled(Box)({
  flex: 1,
  padding: '20px',
  overflowY: 'auto',
});

// Removed unused ContentHeader styled component

const AccountsSection = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
});

const SpendingSection = styled(Paper)({
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
});

const DonutChartContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '160px',
});

const DonutChartCenter = styled(Box)({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const CardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
});

const ProgressBarContainer = styled(Box)({
  backgroundColor: '#e0e0e0',
  height: '10px',
  borderRadius: '5px',
  width: '100%',
  marginTop: '5px',
});

interface ProgressBarProps {
  width: string;
}

// Fixed the ProgressBar component with proper TypeScript syntax
const ProgressBar = styled(Box)<ProgressBarProps>(({ width }) => ({
  backgroundColor: '#80cbc4',
  height: '10px',
  borderRadius: '5px',
  width: width,
}));

const TransactionItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',
});

const CategoryLegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

interface ColorDotProps {
  bg: string;
}

// Fixed the ColorDot component with proper TypeScript syntax
const ColorDot = styled(Box)<ColorDotProps>(({ bg }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: bg,
  marginRight: '10px',
}));

// Main Dashboard Component
const DashboardPage = () => {
  return (
    <AppContainer>
      {/* Left Sidebar */}
      <SidebarContainer>
        <SidebarIcon style={{ backgroundColor: 'white', borderRadius: '10px', color: '#4527a0', marginBottom: '40px' }}>Q</SidebarIcon>
        {sidebarItems.map((item, index) => (
          <Link key={index} to={index === 4 ? "/reports" : "#"} style={{ textDecoration: 'none' }}>
            <SidebarIcon as={Box}>
              {item.icon}
            </SidebarIcon>
          </Link>
        ))}
      </SidebarContainer>

      {/* Main Content */}
      <MainContent>
        {/* Accounts Section */}
        <AccountsSection>
          <CardHeader>
            <Typography variant="h6" fontWeight="bold">Accounts</Typography>
            <Box display="flex" alignItems="center">
              <IconButton size="small" color="primary">
                <AddIcon />
              </IconButton>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
          </CardHeader>

          <Box mb={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold">Net Worth</Typography>
              <Typography variant="subtitle1" fontWeight="bold">$0.00</Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography>Banking</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={2}>
              <Typography>Cash & Checking</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={4}>
              <Typography>Checking Account</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={4}>
              <Typography>Savings Goals</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={4}>
              <Typography>Available Balance</Typography>
              <Typography>$0.00</Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography>Investments</Typography>
              <Typography>$0.00</Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography>Retirement</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={2}>
              <Typography>IRA</Typography>
              <Typography>$0.00</Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography>Assets</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={2}>
              <Typography>Real Estate</Typography>
              <Typography>$0.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} pl={4}>
              <Typography>REITs</Typography>
              <Typography>$0.00</Typography>
            </Box>
          </Box>

          <Box>
            <Typography>Liabilities</Typography>
            <Box display="flex" alignItems="center" color="primary.main" pl={2} mt={1}>
              <AddIcon fontSize="small" />
              <Typography variant="body2">Liability account</Typography>
            </Box>
          </Box>
        </AccountsSection>

        {/* Right Side Content */}
        <Grid container spacing={3}>
          {/* Spending Plan Section */}
          <Grid item xs={12}>
            <SpendingSection>
              <CardHeader>
                <Typography variant="h6" fontWeight="bold">Spending Plan</Typography>
                <Box display="flex" alignItems="center">
                  <IconButton size="small">
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </CardHeader>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Feb 2024
              </Typography>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <DonutChartContainer>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      size={140}
                      thickness={10}
                      sx={{ color: '#8bc34a' }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={15}
                      size={140}
                      thickness={10}
                      sx={{ color: '#64b5f6', position: 'absolute', transform: 'rotate(270deg)' }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={10}
                      size={140}
                      thickness={10}
                      sx={{ color: '#7986cb', position: 'absolute', transform: 'rotate(324deg)' }}
                    />
                    <DonutChartCenter>
                      <Typography variant="h5" fontWeight="bold">$0.00</Typography>
                      <Typography variant="body2" color="text.secondary">Available</Typography>
                      <Typography variant="caption" color="text.secondary">($0.00 per day)</Typography>
                    </DonutChartCenter>
                  </DonutChartContainer>

                  <Box mt={2}>
                    <CategoryLegendItem>
                      <ColorDot bg="#7986cb" />
                      <Typography variant="body2">Planned spending</Typography>
                    </CategoryLegendItem>
                    <CategoryLegendItem>
                      <ColorDot bg="#64b5f6" />
                      <Typography variant="body2">Other spending</Typography>
                    </CategoryLegendItem>
                    <CategoryLegendItem>
                      <ColorDot bg="#8bc34a" />
                      <Typography variant="body2">Available</Typography>
                    </CategoryLegendItem>
                  </Box>
                </Grid>

                <Grid item xs={12} md={7}>
                  <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                    Planned Spending
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2">Phone</Typography>
                          <IconButton size="small">
                            <FullscreenIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography variant="body2" fontWeight="bold">$0.00 left</Typography>
                        <ProgressBarContainer>
                          <ProgressBar width="20%" />
                        </ProgressBarContainer>
                        <Typography variant="caption" color="text.secondary">out of $0.00</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2">Rent</Typography>
                          <IconButton size="small">
                            <FullscreenIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography variant="body2" fontWeight="bold">$0.00 left</Typography>
                        <ProgressBarContainer>
                          <ProgressBar width="0%" />
                        </ProgressBarContainer>
                        <Typography variant="caption" color="text.secondary">out of $0.00</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </SpendingSection>
          </Grid>

          {/* Recent Spending Section */}
          <Grid item xs={12} md={6}>
            <SpendingSection>
              <CardHeader>
                <Typography variant="h6" fontWeight="bold">$0.00 Spent</Typography>
                <Box display="flex" alignItems="center">
                  <IconButton size="small">
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </CardHeader>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                from Friday - Today
              </Typography>

              <TransactionItem>
                <Box>
                  <Typography variant="body2">Restaurant</Typography>
                  <Typography variant="caption" color="text.secondary">Uncategorized</Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2">$0.00</Typography>
                  <Typography variant="caption" color="text.secondary">Today</Typography>
                </Box>
              </TransactionItem>
              
              <Divider />
              
              <TransactionItem>
                <Box>
                  <Typography variant="body2">Grocery Store</Typography>
                  <Typography variant="caption" color="text.secondary">Uncategorized</Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2">$0.00</Typography>
                  <Typography variant="caption" color="text.secondary">Today</Typography>
                </Box>
              </TransactionItem>
              
              <Divider />
              
              <TransactionItem>
                <Box>
                  <Typography variant="body2">Dinner Place</Typography>
                  <Typography variant="caption" color="text.secondary">Food</Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant="body2">$0.00</Typography>
                  <Typography variant="caption" color="text.secondary">Today</Typography>
                </Box>
              </TransactionItem>
            </SpendingSection>
          </Grid>

          {/* Bills & Payments Section */}
          <Grid item xs={12} md={6}>
            <SpendingSection>
              <CardHeader>
                <Typography variant="h6" fontWeight="bold">Bills & Payments</Typography>
                <Box display="flex" alignItems="center">
                  <IconButton size="small">
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ChevronRightIcon />
                  </IconButton>
                </Box>
              </CardHeader>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="#4caf50" width={30} height={30} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" color="white" mr={1}>I</Box>
                        <Typography variant="body2">on Feb 15</Typography>
                      </Box>
                      <IconButton size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2">Income</Typography>
                    <Typography variant="body1" color="#4caf50" fontWeight="bold">+$0.00</Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="#f44336" width={30} height={30} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" color="white" mr={1}>F</Box>
                        <Typography variant="body2">on Feb 16</Typography>
                      </Box>
                      <IconButton size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2">Fitness</Typography>
                    <Typography variant="body1" color="#f44336" fontWeight="bold">-$0.00</Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="#2196f3" width={30} height={30} borderRadius="50%" display="flex" justifyContent="center" alignItems="center" color="white" mr={1}>E</Box>
                        <Typography variant="body2">on Feb 20</Typography>
                      </Box>
                      <IconButton size="small">
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2">Employment</Typography>
                    <Typography variant="body1" color="#4caf50" fontWeight="bold">+$0.00</Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="center" mt={3}>
                <Typography color="primary">See All Bills & Payments</Typography>
              </Box>
            </SpendingSection>
          </Grid>

          {/* Top Spending Categories Section */}
          <Grid item xs={12}>
            <SpendingSection>
              <CardHeader>
                <Typography variant="h6" fontWeight="bold">Top Spending Categories</Typography>
              </CardHeader>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                This Month
              </Typography>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <DonutChartContainer>
                    <CircularProgress
                      variant="determinate"
                      value={50}
                      size={140}
                      thickness={10}
                      sx={{ color: '#673ab7' }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={25}
                      size={140}
                      thickness={10}
                      sx={{ color: '#2196f3', position: 'absolute', transform: 'rotate(180deg)' }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={15}
                      size={140}
                      thickness={10}
                      sx={{ color: '#4caf50', position: 'absolute', transform: 'rotate(270deg)' }}
                    />
                    <CircularProgress
                      variant="determinate"
                      value={10}
                      size={140}
                      thickness={10}
                      sx={{ color: '#ff9800', position: 'absolute', transform: 'rotate(324deg)' }}
                    />
                  </DonutChartContainer>
                </Grid>

                <Grid item xs={12} md={7}>
                  <Box>
                    <CategoryLegendItem>
                      <ColorDot bg="#673ab7" />
                      <Typography variant="body2">Food & Dining (50%)</Typography>
                    </CategoryLegendItem>
                    <CategoryLegendItem>
                      <ColorDot bg="#2196f3" />
                      <Typography variant="body2">Entertainment (25%)</Typography>
                    </CategoryLegendItem>
                    <CategoryLegendItem>
                      <ColorDot bg="#4caf50" />
                      <Typography variant="body2">Transportation (15%)</Typography>
                    </CategoryLegendItem>
                    <CategoryLegendItem>
                      <ColorDot bg="#ff9800" />
                      <Typography variant="body2">Shopping (10%)</Typography>
                    </CategoryLegendItem>
                  </Box>
                </Grid>
              </Grid>
            </SpendingSection>
          </Grid>
        </Grid>
      </MainContent>
    </AppContainer>
  );
};

export default DashboardPage;