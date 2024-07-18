import React from "react";
import PopUP from '../login/PopUP';
import { IInput } from '../interface/IInput';
import AddIcon from '@mui/icons-material/Add';
const CreatDrive = () => {
    const inputs: IInput[] = [
        { placeorder: 'עלות הנסיעה', nameInput: 'priceOfDrive', typ: 'number'},
        { placeorder: 'מס מקמות ברכב', nameInput: 'numPlacesOfDrive', typ: 'number'},
        { placeorder: 'עיר מוצא', nameInput: 'startingPointCity', typ: 'text'},
        { placeorder: 'רחוב מוצא', nameInput: 'startingPointStreet', typ: 'text'},
        { placeorder: 'מספר ביניין מוצא', nameInput: 'startingPointNum', typ: 'text'},
        { placeorder: 'עיר יעד', nameInput: 'destinationPointCity', typ: 'text'},
        { placeorder: 'רחוב יעד', nameInput: 'destinationPointStreet', typ: 'text'},
        { placeorder: 'מספר ביניין יעד', nameInput: 'destinationPointNum', typ: 'text'},
        { placeorder: 'יציאה משוערת', nameInput: 'time', typ: 'time'},
    ]

    return (
        <PopUP title={['יצירת נסיעה חדשה', 'הכנס פרטי נסיעה']} FormProps={inputs} Add={AddIcon} />
    );
}
export default CreatDrive;