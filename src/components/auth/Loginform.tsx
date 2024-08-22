import {
  Alert,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import CustomInput from '../reusable/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CustomButtom from '../reusable/Button/CustomButton';
import { handleLogin } from '../../api/auth-service/login';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLoginClick = () => {
    handleLogin(email, password, setLoading, setError, navigate);
  };

  error.visible && setTimeout(() => setError({ message: '', visible: false }), 3000);

  return (
    <Box sx={{ position: 'relative' }}>
      {error.message && (
        <Alert
          severity="error"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            width: '100%',
            zIndex: 99,
          }}
        > 
          {error.message}
        </Alert>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          fontFamily: 'Inter',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontSize: '30px',
            fontWeight: 700,
            color: '#1F2F54',
          }}
        >
          Sign in
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1F2F54',
              fontFamily: 'Mulish',
            }}
          >
            Email
          </Typography>
          <CustomInput
            placeholder="masukkan alamat email aktif"
            type="email"
            onChange={handleChangeEmail}
            value={email}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1F2F54',
              fontFamily: 'Mulish',
            }}
          >
            Password
          </Typography>
          <CustomInput placeholder="masukkan password" type="password" onChange={handleChangePassword} value={password} />
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#1F2F54',
              fontFamily: 'Mulish',
              textAlign: 'right',
            }}
          >
            Lupa password
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <CustomButtom
            variant="contained"
            backroundColor="redpink"
            onClick={onLoginClick}
            text="Sign In"
            isLoading={loading}
          />
          <CustomButtom
            variant="contained"
            backroundColor="#CFCFDB"
            onClick={() => navigate('/auth/register')}
            text="Create Account"
          />
        </Box>
        <Divider
          sx={{ marginBottom: 2, borderColor: '#979797', borderWidth: 1 }}
        />
        <CustomButtom variant="contained" onClick={() => navigate('/auth/register')} text="Masuk/Daftar" backroundColor="#1F2F54" />
      </Box>
    </Box>
  );
};

export default LoginForm;
