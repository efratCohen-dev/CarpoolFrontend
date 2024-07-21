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
import * as iconsMaterial from '@mui/icons-material';
import { BackgroundTitle, PopUpConteiner } from './popUp.styled';
import theme from '../../Theme';
import { ObjectId } from 'mongodb';
import CreatDrive from '../drives/CreateDrive';
import { BorderLeft } from '../../styled/style.styled';
interface Props {
    FormProps: IInput[];
    title: string[];
    driveID?: string;
    text?: String
    Add: iconsMaterial.SvgIconComponent;
}

const PopUP: React.FC<Props> = ({ FormProps, title, Add, driveID, text }) => {

    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [signUP, setSignUP] = useState(false);

    //     const handleInputChange = (attribute: string, value: any) => {
    //         // Handle input change if needed
    //     };

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
            <Button onClick={handleClickOpen} sx={{ paddingRight: "0px" }}>
                {text ?
                    <BorderLeft color={theme.palette.primary.main}>
                        <Add className="icon" sx={{ color: 'white' }} />
                        <div>{text}</div>
                    </BorderLeft>
                    : <Fab>
                        <Add />
                    </Fab>

                }

            </Button>
            <Dialog
                fullWidth={fullWidth}
                open={open}
                onClose={handleClose}
                dir={theme.direction}
            >
                <BackgroundTitle color={theme.palette.primary.main}>
                    <DialogTitle> {title[0]}</DialogTitle>
                </BackgroundTitle>
                <DialogContent>
                    <DialogContentText>
                        {title[1]}
                    </DialogContentText>
                    {/* <ChildComponent onClick={handleClose} /> */}
                    {/* setTitle={setTitle} */}
                    {/* <Join onClick={handleClose}/> */}
                    <SignIn handleClose={handleClose} FormProps={FormProps} login={title[0]} driveID={driveID} />
                </DialogContent>
            </Dialog>

        </React.Fragment>

    );
};

export default PopUP;