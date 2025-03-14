import React, { useState } from 'react';
import { Box, Container, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Login } from '../components/auth/Login';
import Register from '../components/auth/Register';

const AuthContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  padding: theme.spacing(2),
}));

const AuthCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 480,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
}));

const ToggleButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <AuthContainer maxWidth={false}>
      <AuthCard elevation={3}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <img src="/logo.svg" alt="BETS" height={32} />
        </Box>
        {isLogin ? <Login /> : <Register />}
        <ToggleButton onClick={toggleForm}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </ToggleButton>
      </AuthCard>
    </AuthContainer>
  );
};
