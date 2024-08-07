import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useEffect } from 'react';
import Chat from '../chat/chatUI/Chat';

interface Props {
    name: String;
    driveID: String;
    // text:string[]
}

const EmptyPopUP: React.FC<Props> = ({ name, driveID }) => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(true)
    }, [])

    const handleClose = () => {
        setOpen(false);
    };



    return (

        <Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    width: 800,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                    },
                }}
            // aria-labelledby="scroll-dialog-title"
            // aria-describedby="scroll-dialog-description"
            >
                {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
                <DialogContent >
                    {/* <h1>  שגיאה!!!!</h1>
                    <br />
                    <p>אין הרשאות למחיקה, צור אימות</p>
                    {text[1]} */}
                    <Chat name={name} room={driveID} />




                </DialogContent>

            </Dialog>

        </Fragment>
    );
};
export default EmptyPopUP
