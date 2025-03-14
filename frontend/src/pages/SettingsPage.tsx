import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

const SettingsSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = React.useState({
    emailNotifications: true,
    pushNotifications: false,
    currency: 'USD',
    language: 'en',
    theme: 'light',
    budgetAlerts: true,
    twoFactorAuth: false,
    defaultView: 'monthly',
  });

  const handleChange = (name: string) => (event: any) => {
    setSettings({
      ...settings,
      [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Profile Settings */}
      <SettingsSection>
        <SectionHeader>
          <PersonIcon />
          <Typography variant="h6">Profile Settings</Typography>
        </SectionHeader>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              defaultValue="John Doe"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              defaultValue="john@example.com"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </SettingsSection>

      {/* Notification Settings */}
      <SettingsSection>
        <SectionHeader>
          <NotificationsIcon />
          <Typography variant="h6">Notifications</Typography>
        </SectionHeader>
        <FormControlLabel
          control={
            <Switch
              checked={settings.emailNotifications}
              onChange={handleChange('emailNotifications')}
            />
          }
          label="Email Notifications"
        />
        <Divider sx={{ my: 2 }} />
        <FormControlLabel
          control={
            <Switch
              checked={settings.pushNotifications}
              onChange={handleChange('pushNotifications')}
            />
          }
          label="Push Notifications"
        />
        <Divider sx={{ my: 2 }} />
        <FormControlLabel
          control={
            <Switch
              checked={settings.budgetAlerts}
              onChange={handleChange('budgetAlerts')}
            />
          }
          label="Budget Alerts"
        />
      </SettingsSection>

      {/* Account Settings */}
      <SettingsSection>
        <SectionHeader>
          <AccountBalanceIcon />
          <Typography variant="h6">Account Preferences</Typography>
        </SectionHeader>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Currency
            </Typography>
            <Select
              fullWidth
              value={settings.currency}
              onChange={handleChange('currency')}
            >
              <MenuItem value="USD">USD ($)</MenuItem>
              <MenuItem value="EUR">EUR (€)</MenuItem>
              <MenuItem value="GBP">GBP (£)</MenuItem>
              <MenuItem value="JPY">JPY (¥)</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Default View
            </Typography>
            <Select
              fullWidth
              value={settings.defaultView}
              onChange={handleChange('defaultView')}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </SettingsSection>

      {/* Security Settings */}
      <SettingsSection>
        <SectionHeader>
          <SecurityIcon />
          <Typography variant="h6">Security</Typography>
        </SectionHeader>
        <FormControlLabel
          control={
            <Switch
              checked={settings.twoFactorAuth}
              onChange={handleChange('twoFactorAuth')}
            />
          }
          label="Two-Factor Authentication"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" color="error">
            Change Password
          </Button>
        </Box>
      </SettingsSection>

      {/* Save Changes */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            // Handle saving settings
            console.log('Settings saved:', settings);
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;