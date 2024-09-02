import React from "react";
import PopUP from '../login/PopUP';
import { IInput } from '../interface/IInput';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


interface Props {
    title: string[];
    driveID?: string;
}
const CreatDrive: React.FC<Props> = ({ title, driveID }) => {
    const inputs: IInput[] = [
        { placeorder: 'עלות הנסיעה', nameInput: 'priceOfDrive', typ: 'text', regexPattern: '^[0-9]$' },
        { placeorder: 'מס מקמות ברכב', nameInput: 'numPlacesOfDrive', typ: 'text', regexPattern: '^[0-9]$' },
        { placeorder: 'עיר מוצא', nameInput: 'startingPointCity', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
        { placeorder: 'רחוב מוצא', nameInput: 'startingPointStreet', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
        { placeorder: 'מספר ביניין מוצא', nameInput: 'startingPointNum', typ: 'text', regexPattern: '^[0-9]$' },
        { placeorder: 'עיר יעד', nameInput: 'destinationPointCity', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
        { placeorder: 'רחוב יעד', nameInput: 'destinationPointStreet', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
        { placeorder: 'מספר ביניין יעד', nameInput: 'destinationPointNum', typ: 'text', regexPattern: '[0-9]' },
        { placeorder: 'יציאה משוערת', nameInput: 'time', typ: 'datetime-local' },
    ]

    return (
        driveID != undefined ? <PopUP title={title} FormProps={inputs} Add={EditIcon} driveID={driveID} text={'עדכון'}/>
            : <PopUP title={title} FormProps={inputs} Add={AddIcon} />
    );
}
export default CreatDrive;