import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Divider 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../services/authApi';

const StyledGoogleButton = styled(Button)(({ theme }) => ({
  border: '1px solid #E0E0E0',
  color: theme.palette.text.primary,
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1)
  }
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1A1A1A',
  color: 'white',
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: '#000000'
  }
}));

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authApi.login({ email, password });
      login(response.token);
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Welcome to B.E.T.S
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Start managing your expenses efficiently
      </Typography>

      <StyledGoogleButton fullWidth startIcon={<GoogleIcon />}>
        Continue with Google
      </StyledGoogleButton>

      <Box sx={{ position: 'relative', my: 3 }}>
        <Divider>
          <Typography variant="body2" color="text.secondary">
            or
          </Typography>
        </Divider>
      </Box>

      <StyledTextField
        fullWidth
        label="Email"
        placeholder="Type your email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <StyledTextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <Typography variant="body2" color="error" sx={{ mt: 3 }}>{error}</Typography>}

      <StyledSubmitButton fullWidth variant="contained" type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </StyledSubmitButton>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        By clicking "Sign in with Google" or "Continue with email"
        you agree to our Terms of Use and Privacy policy
      </Typography>
    </Box>
  );
};

export default Login;