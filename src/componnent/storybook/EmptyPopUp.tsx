import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useEffect } from 'react';

const EmptyPopUP = () => {
    const [open, setOpen] = React.useState(false);
    //   const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    useEffect(() => {
        setOpen(true)
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);


    return (
        
        <Fragment>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent >
                  <h1>  שגיאה!!!!</h1>
                    <br />
                    <p>אין הרשאות למחיקה, צור אימות</p>
                    {/* {text[1]} */}



                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};
export default  EmptyPopUP
