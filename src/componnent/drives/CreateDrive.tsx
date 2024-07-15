import React from "react";
import PopUP from '../login/PopUP';
import { IInput } from '../interface/IInput';
import AddIcon from '@mui/icons-material/Add';
const CreatDrive = () => {
    const inputs: IInput[] = [
        { placeorder: 'עלות הנסיעה', nameInput: 'priceOfDrive', typ: 'number'},
        { placeorder: 'מס מקמות ברכב', nameInput: 'priceOfDrive', typ: 'number'},
        { placeorder: 'נקודת מוצא', nameInput: 'startingPoint', typ: 'text'},
        { placeorder: 'נקודת יעד', nameInput: 'destinationPoint', typ: 'text'},
        { placeorder: 'יציאה משוערת', nameInput: '', typ: 'time'},
    ]

    return (
        <PopUP title={['יצירת נסיעה חדשה', 'הכנס פרטי נסיעה']} FormProps={inputs} Add={AddIcon} />
    );
}
export default CreatDrive;