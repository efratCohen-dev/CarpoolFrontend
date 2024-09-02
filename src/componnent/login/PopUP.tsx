import React, { useState, useCallback, Fragment } from 'react';
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
import { Box, IconButton } from '@mui/material';
interface Props {
    FormProps: IInput[];
    inputNew?: IInput[] | null;
    title: string[];
    driveID?: string;
    text?: String
    Add: iconsMaterial.SvgIconComponent;
}

const PopUP: React.FC<Props> = ({ FormProps, inputNew, title, Add, driveID, text }) => {

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

    const changeTitle = useCallback(() => {
        // setTitle('הכנס כמשתמש חדש')
    }, [title]);

    return (
        <Fragment>
            {/* הייתי רוצה להוריד את התגית הכפתור לשים שם BOX
            זה מפריע לpanding */}
            <Button onClick={handleClickOpen} sx={{ paddingRight: "0px" }}>
                {text ? (text === 'להתחברות' ?
                    <BorderLeft color={theme.palette.primary.main}>
                        <Add className="icon" sx={{ color: 'white' }} />
                        <div>{text}</div>
                    </BorderLeft>
                    :
                    <IconButton color="primary">
                        <Add />
                    </IconButton>)

                        // <Add className="icon"  />

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
                    {inputNew != null ?
                        <SignIn handleClose={handleClose} FormProps={FormProps} inputNew={inputNew} login={title[0]} driveID={driveID} />
                        : <SignIn handleClose={handleClose} FormProps={FormProps} login={title[0]} driveID={driveID} />
                    }
                </DialogContent>
            </Dialog>

        </Fragment>

    );
};

export default PopUP;