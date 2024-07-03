// import React, { useState, useCallback } from 'react';
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
// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import SignIn from './signIn';
// interface FormData {
//     Username: string;
//     Password: string;
//     Email?: string;
//     Tel?: string;
// }

const Sign: React.FC = () => {
//     const { register, handleSubmit, control } = useForm<FormData>({
//         defaultValues: {
//             Username: "",
//             Password: "",
//             Email: "",
//             Tel: ""
//         }
//     });

//     const { axiosDataCreate } = useCreate(HTTP.DRIVERURL);
//     const [open, setOpen] = useState(false);
//     const [title, setTitle] = useState('להתחברות הכנס שם משתמש וסיסמה');
//     const [fullWidth, setFullWidth] = useState(true);
//     const [signUP, setSignUP] = useState(false);

//     const handleInputChange = (attribute: string, value: any) => {
//         // Handle input change if needed
//     };

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const onSubmit: SubmitHandler<FormData> = (data) => {
//         console.log(data);
//     };
    


//     const changeTitle = useCallback(() => {
//         setTitle('הכנס כמשתמש חדש')
//     }, [title]);

    return (
        <></>
        // <React.Fragment>
        //     <Button onClick={handleClickOpen} size="medium">
        //         <Fab>
        //             <AddIcon />
        //         </Fab>
        //     </Button>
        //     <Dialog
        //         fullWidth={fullWidth}
        //         open={open}
        //         onClose={handleClose}
        //     >
        //         <DialogTitle>כניסה כנהג</DialogTitle>
        //         <DialogContent>
        //             <DialogContentText>
        //                 {title}
        //             </DialogContentText>
        //             <SignIn onClick={handleClose} setTitle={setTitle} />
        //         </DialogContent>
        //     </Dialog>
        // </React.Fragment>
    );
};

export default Sign;