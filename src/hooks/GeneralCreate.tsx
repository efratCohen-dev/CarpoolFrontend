import axios from "axios"
import { ObjectId } from 'mongodb';
import { IDriver } from "../componnent/interface/IDriver";
import { useDispatch } from "react-redux";
import useCreate from "./Create";
import { HTTP } from "../HTTPpage.contents";
import { createDriver } from "../store/Driver";
import useCreatePassenger from "./CreateNewPassenger";
import { IPassenger } from "../componnent/interface/IPassenger";

// interface Props {
//     type: String;
//     object: any
// };

const UseGeneralCreate = () => {
    const dispatch = useDispatch();
    const AxiosDataGeneralCreate = async (type: String, object: any,ID?:String) => {

        switch (type) {
            case 'כניסה כנהג':
                {
                    const { axiosDataCreate } = useCreate(HTTP.DRIVERURL);
                    const newDriver: IDriver = {
                        name: object.get('userName')?.toString() || '',
                        password: object.get('password')?.toString() || '',
                        email: object.get('email')?.toString() || '',
                        phone: parseInt(object.get('tel')?.toString() || '0', 10)
                    };
                    try {
                        console.log("newDriver", newDriver);

                        await axiosDataCreate(newDriver);
                        dispatch(createDriver({ newDriver }));
                    } catch (error) {
                        console.error('Error creating driver:', error);
                    }

                    break;
                }
            case 'הצטרפות לנסיעה':
                {
                    const { axiosDataCreatePassenger } = useCreatePassenger(HTTP.JOINDRIVEURL);
                    const passenger: IPassenger = {
                        name: object.get('userName')?.toString() || '',
                        email: object.get('email')?.toString() || '',
                    };
                    try {
                        console.log("passenger", passenger);
                        if(ID){
                            await axiosDataCreatePassenger(passenger,ID);
                        }
                        // dispatch(createDriver({ passenger }));
                        //עדכון נסיעה
                    } catch (error) {
                        console.error('Error join passenger:', error);
                    }

                    break;

                }

            default:
                return 'foo';
        }
    }

    return { AxiosDataGeneralCreate }
}
export default UseGeneralCreate


