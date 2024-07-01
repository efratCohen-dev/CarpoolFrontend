import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLogin from '../storybook/inputLogin';
import { useDispatch } from 'react-redux';
import useCreate from '../../hooks/Create';
import { HTTP } from '../../HTTPpage.contents';
import { createDriver } from '../../store/Driver';
import { AppDispatch } from '../../Store';
import { IDriver } from '../interface/IDriver';
const defaultTheme = createTheme();
export const useAppDispatch = () => useDispatch<AppDispatch>()
const SignIn = () => {
  const dispatch = useDispatch();
  const { axiosDataCreate } = useCreate(HTTP.DRIVERURL); 
  const [sign, setSign] = useState(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newDriver: IDriver = {
      name: data.get('userName')?.toString() || '',
      password: data.get('password')?.toString() || '',
      email: data.get('email')?.toString() || '',
      phone: parseInt(data.get('tel')?.toString() || '0', 10)
    };
    try {
      console.log("newDriver",newDriver);
      
      await axiosDataCreate(newDriver); 
      dispatch(createDriver({ newDriver }));
    } catch (error) {
      console.error('Error creating driver:', error);
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <InputLogin placeorder={'שם משתמש'} name={'userName'} typ={'text'} regexPattern={'^(?=.*[A-Z])[A-Za-z]+$'} />
              <InputLogin placeorder={'סיסמה'} name={'password'} typ={'password'} />
              {sign ?

                <>
                  <InputLogin placeorder={'מייל'} name={'email'} typ={'text'} regexPattern={'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'} />
                  <InputLogin placeorder={'נייד'} name={'tel'} typ={'text'} regexPattern={'^[0]{1}[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$'} />

                </> : null
              }
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Sign Up</Button>
            {!sign ?
              <Button size="small" onClick={() => setSign(!sign)}>אין לך חשבון?</Button>
              : <Button size="small" onClick={() => setSign(!sign)}>יש לך חשבון?</Button>
            }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn