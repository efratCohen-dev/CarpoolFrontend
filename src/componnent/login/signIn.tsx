import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLogin from '../storybook/InputLogin';
import { useDispatch } from 'react-redux';
import useCreate from '../../hooks/Create';
import { HTTP } from '../../HTTPpage.contents';
import { createDriver } from '../../store/Driver';
import { AppDispatch } from '../../Store';
import { IDriver } from '../interface/IDriver';
import { IInput } from '../interface/IInput';
import { List } from '@mui/material';
export const useAppDispatch = () => useDispatch<AppDispatch>()
interface Props {
  FormProps: IInput[];
  login:String;
  handleClose: () => void;
};

const SignIn: React.FC<Props> = ({ FormProps, handleClose, login }) => {
  console.log("FormProps", FormProps);
  console.log("login",login);
  

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
      console.log("newDriver", newDriver);

      await axiosDataCreate(newDriver);
      dispatch(createDriver({ newDriver }));
    } catch (error) {
      console.error('Error creating driver:', error);
    }
    handleClose();
  };
  const signChange = () => {
    setSign(!sign);
    // changeTitle();
  }

  return (
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
              {FormProps.map((input) => (
                <InputLogin placeorder={input.placeorder} nameInput={input.nameInput} typ={input.typ} regexPattern={input.regexPattern}/>
              ))
              }
            
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >{login}</Button>
            {!sign ?
              <Button size="small" onClick={signChange}>אין לך חשבון?</Button>
              : <Button size="small" onClick={signChange}>signיש לך חשבון?</Button>
            }
          </Box>
        </Box>
      </Container>
  );
}
export default SignIn