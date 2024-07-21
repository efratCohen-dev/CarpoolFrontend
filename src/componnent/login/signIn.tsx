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
import { createTheme, List } from '@mui/material';
// import useGeneralCreate from '../../hooks/GeneralCreate';
import { ObjectId } from 'mongodb';
import DefaultDetails, { useAppSelector } from './DefaultDetails';
// import GeneralCreate from '../../hooks/GeneralCreate';
import useCreatePassenger from '../../hooks/CreateNewPassenger';
import { getCurrentDriver } from '../../store/CurrentDriver';
import { createDrive, updatePassengersDrive } from '../../store/Drive';
import { IDrive } from '../interface/IDrive';
import { IPassenger } from '../interface/IPassenger';
import useGeneralCreate from '../../hooks/GeneralCreate';
const defaultTheme = createTheme();
export const useAppDispatch = () => useDispatch<AppDispatch>()
interface Props {
  FormProps: IInput[];
  login: string;
  driveID?: string;
  handleClose: () => void;

};

const SignIn: React.FC<Props> = ({ FormProps, handleClose, login, driveID }) => {
  const dispatch = useDispatch();
  // const { axiosDataGeneralCreate } = useGeneralCreate();
  const { generalCreate } = useGeneralCreate();
  const [sign, setSign] = useState(false)
  // const create = (type:string,object:any,ID?:string) => {
  //   if (type === 'כניסה כנהג') {
  //     // funcDriver();
  //     const { res, axiosDataCreate } = useCreate();
  //     const newDriver: IDriver = {
  //       name: object.get('userName')?.toString() || '',
  //       password: object.get('password')?.toString() || '',
  //       email: object.get('email')?.toString() || '',
  //       phone: parseInt(object.get('tel')?.toString() || '0', 10)
  //     };
  //     try {
  //       axiosDataCreate(newDriver);
  //       dispatch(getCurrentDriver({ res: res }));
  //       dispatch(createDriver({ driver: newDriver }));
  //     } catch (error) {
  //       console.error('Error creating driver:', error);
  //     }
  //     // break;
  //   }
  //   // case 'יצירת נסיעה חדשה':
  //   if (type === 'יצירת נסיעה חדשה') {
  //     // funcDrive();
  //     const { res, axiosDataCreate } = useCreate(HTTP.DRIVEURL);
  //     const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.currentDriver);
  //     const newDrive: IDrive = {
  //       driver: `${currentDriver.id}`,
  //       leavingTime: object.get('leavingTime')?.toString() || '',
  //       startingPoint: {
  //         city: object.get('startingPointCity')?.toString() || '',
  //         street: object.get('startingPointStreet')?.toString() || '',
  //         numBuild: object.get('startingPointNum')?.toString() || '',
  //       },
  //       target: {
  //         city: object.get('targetPointCity')?.toString() || '',
  //         street: object.get('targetPointStreet')?.toString() || '',
  //         numBuild: object.get('targetPointNum')?.toString() || '',
  //       },
  //       price: parseInt(object.get('price')?.toString() || '15', 10),
  //       places: parseInt(object.get('places')?.toString() || '4', 10),
  //       passengers: []
  //       //chat[] create in intarface and models in servers
  //     };
  //     try {
  //       axiosDataCreate(newDrive);
  //       dispatch(createDrive({ drive: res }));
  //     } catch (error) {
  //       console.error('Error creating driver:', error);
  //     }

  //     // break;

  //   }
  //   // case 'הצטרפות לנסיעה':
  //   if (type === 'הצטרפות לנסיעה') {
  //     // funcJoinPassenger();
  //     const { axiosDataCreatePassenger } = useCreatePassenger(HTTP.JOINDRIVEURL);
  //     const passenger: IPassenger = {
  //       name: object.get('userName')?.toString() || '',
  //       email: object.get('email')?.toString() || '',
  //     };
  //     try {
  //       console.log("passenger", passenger);
  //       if (ID) {
  //         axiosDataCreatePassenger(passenger, ID);
  //       }
  //       dispatch(updatePassengersDrive({ passenger }));
  //       //עדכון נסיעה
  //     } catch (error) {
  //       console.error('Error join passenger:', error);
  //     }
  //   }
  // }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // if (driveID){
    // axiosDataGeneralCreate(login, data, driveID)
    // }else{
    
    generalCreate(login, data, driveID);
    // }
    handleClose();
    // create(login,data,driveID);

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