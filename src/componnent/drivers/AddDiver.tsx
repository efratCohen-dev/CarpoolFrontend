import { IInput } from "../interface/IInput"
import PopUP from "../login/PopUP"
import LoginIcon from '@mui/icons-material/Login';

const AddDriver = () => {
    const inputs: IInput[] = [
        { placeorder: 'שם משתמש', nameInput: 'userName', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
        { placeorder: 'סיסמה', nameInput: 'password', typ: 'password', regexPattern: '\*' },
        { placeorder: 'מייל', nameInput: 'email', typ: 'text', regexPattern: '^[\\w]{6,}+(@{1})([\w]{5,9}+\.{1})+[\w-]{2,4}$' },
        { placeorder: 'נייד', nameInput: 'tel', typ: 'text', regexPattern: '[0]{1}[0-9]{8,9}' }
    ]
    return (
        <PopUP title={['כניסה כנהג', 'להתחברות הכנס שם משתמש וסיסמה']} FormProps={inputs} Add={LoginIcon} text={'להתחברות'}/>
    )
};
export default AddDriver