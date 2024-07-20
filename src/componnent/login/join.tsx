import PopUP from './PopUP';
import { IInput } from '../interface/IInput';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { ObjectId } from 'mongodb';

interface Props {
  driveID?: string;
}

const Join:React.FC<Props> = ({driveID}) => {

  const inputs: IInput[] = [
    { placeorder: 'שם מלא', nameInput: 'userName', typ: 'text', regexPattern: '^\.[^0-9]{0,}$' },
    { placeorder: 'מייל', nameInput: 'email', typ: 'text', regexPattern: '^[\\w]{6,}+(@{1})([\w]{5,9}+\.{1})+[\w-]{2,4}$' }
  ]
  return (
    <PopUP title={['הצטרפות לנסיעה','הכנס פרטים']}  FormProps={inputs} Add={GroupAddIcon} driveID={driveID}/>
  );
}
export default Join