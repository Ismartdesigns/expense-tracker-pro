import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
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
    borderRadius: theme.spacing(1),
  },
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1A1A1A',
  color: 'white',
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authApi.register({ name, email, password });
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Create an Account
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
            Fill in your details
          </Typography>
        </Divider>
      </Box>

      {error && <Typography color="error">{error}</Typography>}
      
      <StyledTextField
        fullWidth
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledTextField
        fullWidth
        label="Email"
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
      
      <StyledSubmitButton fullWidth variant="contained" type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Register'}
      </StyledSubmitButton>
      
    </Box>
  );
};

export default Register;
