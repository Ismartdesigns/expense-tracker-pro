import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TimelineIcon from '@mui/icons-material/Timeline';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 280;

const StyledDrawer = styled(Drawer)({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
  },
});

const DrawerHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const Logo = styled('img')({
  height: 32,
});

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const mainNavItems: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { title: 'Reports', path: '/reports', icon: <BarChartIcon /> },
  { title: 'Transactions', path: '/transactions', icon: <AccountBalanceWalletIcon /> },
  { title: 'Analytics', path: '/analytics', icon: <TimelineIcon /> },
  { title: 'Categories', path: '/categories', icon: <CategoryIcon /> },
];

const secondaryNavItems: NavItem[] = [
  { title: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderNavItems = (items: NavItem[]) => (
    <List>
      {items.map((item) => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 1,
              mx: 1,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: location.pathname === item.path ? 'inherit' : 'text.secondary',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledDrawer variant="permanent">
      <DrawerHeader>
        <Logo src="/logo.svg" alt="Expense Tracker" />
        <Typography variant="h6" noWrap>
          Expense Tracker
        </Typography>
      </DrawerHeader>
      
      <Divider />
      
      <Box sx={{ mt: 2 }}>
        {renderNavItems(mainNavItems)}
      </Box>
      
      <Divider sx={{ mt: 2, mb: 2 }} />
      
      {renderNavItems(secondaryNavItems)}

      {/* Pro Version Banner */}
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Upgrade to Pro
          </Typography>
          <Typography variant="body2">
            Get advanced features and detailed analytics
          </Typography>
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
