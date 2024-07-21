import axios from 'axios';
import Cookies from "cookies-ts"
import { IPassenger } from '../componnent/interface/IPassenger';
import { updatePassengersDrive } from '../store/Drive';
import { useDispatch } from 'react-redux';

const useCreatePassenger = (url: string) => {
    const dispatch = useDispatch();

    const axiosDataCreatePassenger = async (newData: IPassenger,ID:string) => {
        try {
            const post = await axios.post(`${url}/${ID}`, newData);
            // dispatch(updatePassengersDrive({ newPassenger:newData }));
        } catch (error) {
            console.log("error post Passenger: ", error)
        }

    }
    return { axiosDataCreatePassenger }
}
export default useCreatePassenger