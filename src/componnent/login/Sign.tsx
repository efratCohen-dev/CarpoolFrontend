// import React, { useState } from 'react';
// import InputLogin from '../storybook/InputLogin';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
// import { HTTP } from '../../HTTPpage.contents';
// import useCreate from '../../hooks/Create';
// import { useForm, SubmitHandler } from "react-hook-form";

// const Sign = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         control,
//         formState: { errors }
//     } = useForm({
//         defaultValues: {
//             Username: "",
//             Password: "",
//             Email: "",
//             Tel: ""
//         }
//     });
//     const { axiosDataCreate } = useCreate(HTTP.DRIVERURL);
//     const [open, setOpen] = useState(false);
//     const [fullWidth, setFullWidth] = useState(true);
//     const [signUP, setSignUP] = useState(false);
//     const [submit, setSubmit] = useState(true);


//     // const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

//     const handleInputChange = (attribute: string, value: any) => {

//     };

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Button onClick={handleClickOpen} size="medium">
//                 <Fab>
//                     <AddIcon />
//                 </Fab>
//             </Button>
//             <Dialog
//                 fullWidth={fullWidth}
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <DialogTitle>כניסה כנהג</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         להתחברות הכנס שם משתמש וסיסמה
//                     </DialogContentText>
//                     <form
//                         onSubmit={handleSubmit((data) => {
//                             // alert(JSON.stringify(data));
//                             console.log("JSON.stringify(data)");
//                             console.log(JSON.stringify(data));
//                         })}
                       
//                     >
//                         <Box
//                             noValidate
//                             component="form"
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 m: 'auto',
//                                 width: 'fit-content',
//                             }}
//                         >
//                             <InputLogin placeorder='שם משתמש' typ='text' onChange={(value) => handleInputChange('Username', value)} register={register} control={control} />
//                             <InputLogin placeorder='סיסמה' typ='password' onChange={(value) => handleInputChange('Password', value)} register={register} control={control} />
//                             {signUP ?
//                                 <>
//                                     <InputLogin placeorder='מייל' typ='email' onChange={(value) => handleInputChange('Email', value)} register={register} control={control} />
//                                     <InputLogin placeorder='נייד' typ='tel' onChange={(value) => handleInputChange('Tel', value)} register={register} control={control} />
//                                 </>
//                                 : <Button size="small" onClick={() => setSignUP(!signUP)}>רישום</Button>}

//                         </Box>
//                         <input type="submit" />
//                     </form >
//                 </DialogContent>
//             </Dialog >
//         </React.Fragment >
//     );
// }
// export default Sign;


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { HTTP } from '../../HTTPpage.contents';
import useCreate from '../../hooks/Create';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import SignIn from './signIn';
interface FormData {
    Username: string;
    Password: string;
    Email?: string;
    Tel?: string;
}

const Sign: React.FC = () => {
    const { register, handleSubmit, control } = useForm<FormData>({
        defaultValues: {
            Username: "",
            Password: "",
            Email: "",
            Tel: ""
        }
    });

    const { axiosDataCreate } = useCreate(HTTP.DRIVERURL);
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [signUP, setSignUP] = useState(false);

    const handleInputChange = (attribute: string, value: any) => {
        // Handle input change if needed
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data); // Handle form submission logic here
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} size="medium">
                <Fab>
                    <AddIcon />
                </Fab>
            </Button>
            <Dialog
                fullWidth={fullWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>כניסה כנהג</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        להתחברות הכנס שם משתמש וסיסמה
                    </DialogContentText>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <InputLogin placeorder='שם משתמש' typ='text' onChange={(value) => handleInputChange('Username', value)} register={register} control={control} />
                            <InputLogin placeorder='סיסמה' typ='password' onChange={(value) => handleInputChange('Password', value)} register={register} control={control} />
                            {signUP ?
                                <>
                                    <InputLogin placeorder='מייל' typ='email' onChange={(value) => handleInputChange('Email', value)} register={register} control={control} />
                                    <InputLogin placeorder='נייד' typ='tel' onChange={(value) => handleInputChange('Tel', value)} register={register} control={control} />
                                </>
                                : <Button size="small" onClick={() => setSignUP(!signUP)}>רישום</Button>}
                        </Box>
                        <Button type="submit">Submit</Button>
                    </form> */}
                    <SignIn/>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default Sign;