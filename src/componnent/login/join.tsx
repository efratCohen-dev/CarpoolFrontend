import Sign from './Sign';
import { IInput } from '../interface/IInput';

const Join = ({handleClose}:{handleClose: () => void}) => {

  const inputs: IInput[] = [
    { placeorder: 'שם מלא', nameInput: 'userName', typ: 'text', regexPattern: '^(?=.*[A-Z])[A-Za-z]+$' },
    { placeorder: 'מייל', nameInput: 'email', typ: 'text', regexPattern: '^[\\w]{6,}+(@{1})([\w]{5,9}+\.{1})+[\w-]{2,4}$' }
  ]

  return (
    <Sign title={'הצטרפות לנסיעה'} open={open} FormProps={inputs} handleClose={handleClose}/>
  );
}
export default Join