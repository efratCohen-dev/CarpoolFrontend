import { Button, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const AddDriver = ({handleClose}:{handleClose: () => void}) => {
    return (
        <Button onClick={handleClose} size="medium">
            <Fab>
                <AddIcon />
            </Fab>
        </Button>
    )
}
export default AddDriver