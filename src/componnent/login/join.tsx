import PopUP from './PopUP';
import { IInput } from '../interface/IInput';
import AddIcon from '@mui/icons-material/Add';


const Join = () => {

  const inputs: IInput[] = [
    { placeorder: 'שם מלא', nameInput: 'userName', typ: 'text', regexPattern: '^(?=.*[A-Z])[A-Za-z]+$' },
    { placeorder: 'מייל', nameInput: 'email', typ: 'text', regexPattern: '^[\\w]{6,}+(@{1})([\w]{5,9}+\.{1})+[\w-]{2,4}$' }
  ]

  return (
    <PopUP title={['הצטרפות לנסיעה','הכנס פרטים']}  FormProps={inputs} Add={AddIcon}/>
  );
}
export default Join