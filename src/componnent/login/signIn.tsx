import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLogin from '../storybook/InputLogin';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store';
import  { IInput }  from '../interface/IInput';
import DefaultDetails from './DefaultDetails';
import useGeneralCreate from '../../hooks/GeneralCreate';

export const useAppDispatch = () => useDispatch<AppDispatch>()
interface Props {
  FormProps: IInput[];
  login: string;
  driveID?: string;
  handleClose: () => void;
};

const SignIn: React.FC<Props> = ({ FormProps, handleClose, login, driveID }) => {
  const dispatch = useDispatch();
  const { generalCreate } = useGeneralCreate();
  const [sign, setSign] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    generalCreate(login, data, driveID);
    handleClose();
  };

  const signChange = () => {
    setSign(!sign);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <DefaultDetails type={login} />
          <Grid container spacing={2}>
            {FormProps.map((input) => (
              <InputLogin placeorder={input.placeorder} nameInput={input.nameInput} typ={input.typ} regexPattern={input.regexPattern} />
            ))
            }

          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >{login}</Button>
          {login === 'כניסה כנהג' ? (!sign ?
            <Button size="small" onClick={signChange}>אין לך חשבון?</Button>
            : <Button size="small" onClick={signChange}> לך חשבון?</Button>):null
          }
        </Box>
      </Box>
    </Container>
  );
}
export default SignIn