import { useState, useCallback, Fragment } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import SignIn from './signIn';
import { IInput } from '../interface/IInput';
import * as iconsMaterial from '@mui/icons-material';
interface Props {
    FormProps: IInput[];
    title: String[];
    Icon: iconsMaterial.SvgIconComponent;
    url: string;
}

const PopUP: React.FC<Props> = ({ FormProps, title, Icon, url }) => {

    // const { axiosDataCreate } = useCreate(url);
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    // const [signUP, setSignUP] = useState(false);


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




    const changeTitle = useCallback(() => {
        // setTitle('הכנס כמשתמש חדש')
    }, [title]);

    return (
        <Fragment>
            <Button onClick={handleClickOpen}>
                <Fab>
                    <Icon />
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
                    <SignIn handleClose={handleClose} FormProps={FormProps} loginButton={title[0]} url={url} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default PopUP;