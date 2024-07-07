import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import { HTTP } from '../../HTTPpage.contents';
import useCreate from '../../hooks/Create';
import { SubmitHandler, Controller } from "react-hook-form";
import SignIn from './signIn';
import { IInput } from '../interface/IInput';
import AddDriver from '../storybook/addDrive';
import * as iconsMaterial from '@mui/icons-material';
interface Props {
    FormProps: IInput[];
    title: String[];
    Add: iconsMaterial.SvgIconComponent;
}

const PopUP: React.FC<Props> = ({ FormProps, title, Add }) => {

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
                    <Add />
                </Fab>
            </Button>

            <Dialog
                fullWidth={fullWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle> {title[0]}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {title[1]}
                    </DialogContentText>
                    {/* <ChildComponent onClick={handleClose} /> */}
                    {/* setTitle={setTitle} */}
                    {/* <Join onClick={handleClose}/> */}
                    <SignIn handleClose={handleClose} FormProps={FormProps} login={title[0]}/>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default PopUP;