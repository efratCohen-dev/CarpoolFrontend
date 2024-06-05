import React, { useState } from 'react';
import InputLogin from '../storybook/InputLogin';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const Sign = () => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');
    const [signUP, setSignUP] = useState(false);
    const [submit, setSubmit] = useState(true);

    const [driver, setDriver] = useState({ Username: null, Password: null, Email: null, Tel: null })
    const handleInputChange = (attribute: string, value: any) => {
        setDriver(driver => ({
            ...driver,
            [attribute]: value
        }));
        if (driver.Username != null && driver.Password != null && (!signUP || (driver.Email != null && driver.Tel != null)))
            setSubmit(false)
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(driver);
        // create()
    }
    
    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} size="medium">
                <Fab>
                    <AddIcon />
                </Fab>
            </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>כניסה כנהג</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        להתחברות הכנס שם משתמש וסיסמה
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <InputLogin placeorder='שם משתמש' typ='text' onChange={(value) => handleInputChange('Username', value)} />
                            <InputLogin placeorder='סיסמה' typ='password' onChange={(value) => handleInputChange('Password', value)} />
                            {signUP ?
                                <>
                                    <InputLogin placeorder='מייל' typ='email' onChange={(value) => handleInputChange('Email', value)} />
                                    <InputLogin placeorder='נייד' typ='tel' onChange={(value) => handleInputChange('Tel', value)} />
                                </>
                                : <Button size="small" onClick={() => setSignUP(!signUP)}>רישום</Button>}

                        </Box>
                        <Button type="submit" disabled={submit}>כניסה</Button>
                    </form >
                </DialogContent>
            </Dialog >
        </React.Fragment >
    );
}
export default Sign