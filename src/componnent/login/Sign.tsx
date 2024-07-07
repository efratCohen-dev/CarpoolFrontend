import React, { useState, useCallback } from 'react';
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
import Join from './join';
import { IInput } from '../interface/IInput';
import AddDriver from '../storybook/addDrive';
import * as iconsMaterial from '@mui/icons-material';
interface Props {
    FormProps: IInput[];
    title: string;
    Add:iconsMaterial.SvgIconComponent;
}

const PopUP: React.FC<Props> = ({ title, FormProps,Add }) => {

    const { axiosDataCreate } = useCreate(HTTP.DRIVERURL);
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [signUP, setSignUP] = useState(false);

    const handleInputChange = (attribute: string, value: any) => {
        // Handle input change if needed
    };

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };


    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };


    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };



    const changeTitle = useCallback(() => {
        // setTitle('הכנס כמשתמש חדש')
    }, [title]);

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen}>
                <Fab>
                    <Add/>
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
                        {title}
                    </DialogContentText>
                    {/* <ChildComponent onClick={handleClose} /> */}
                    {/* setTitle={setTitle} */}
                    {/* <Join onClick={handleClose}/> */}
                    <SignIn handleClose={handleClose} FormProps={FormProps} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default PopUP;