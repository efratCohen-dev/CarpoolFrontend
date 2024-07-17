import axios from "axios"
import { ObjectId } from 'mongodb';
import { IDriver } from "../componnent/interface/IDriver";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import useCreate from "./Create";
import { HTTP } from "../HTTPpage.contents";
import { createDriver } from "../store/Driver";
import useCreatePassenger from "./CreateNewPassenger";
import { IPassenger } from "../componnent/interface/IPassenger";
import { IDrive } from "../componnent/interface/IDrive";
import { createDrive } from "../store/Drive";
import { getCurrentDriver } from "../store/CurrentDriver";
import { AppDispatch, RootState } from "../Store";
import useGet from "./Get";
import useGetByNamePassword from "./GetByNamePassword";
import { useEffect } from "react";

// interface Props {
//     type: String;
//     object: any
// };
export const useAppDispatch = (type: string) => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const GeneralCreate = () => {
    const dispatch = useDispatch();
    const AxiosDataGeneralCreate = async (type: String, object: any, ID?: string) => {

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
                        dispatch(getCurrentDriver({ res: newDriver }));
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
                        if (ID) {
                            await axiosDataCreatePassenger(passenger, ID);
                        }
                        // dispatch(createDriver({ passenger }));
                        //עדכון נסיעה
                    } catch (error) {
                        console.error('Error join passenger:', error);
                    }

                    break;

                }

            default:
                {

                    const { axiosDataCreate } = useCreate(HTTP.DRIVEURL);
                    // const { res, axiosGetByNamePassword } = useGetByNamePassword(HTTP.DRIVEURL + '/namePassword')
                    // const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.currentDriver);
                    // try {
                    //     await axiosGetByNamePassword({ name: currentDriver.name, password: currentDriver.password });
                    //     console.log("befor");
                    //     getCurrentDriver({ res: res })
                    //     console.log("fromDB", res);
                    // } catch (error) {
                    //     console.error('Error join passenger:', error);
                    // }
                    const newDrive: IDrive = {
                        //הייתי רוצה להכניס את פרטי הנהג ל localStoreg 
                        //ולשלוף בטופס הזמנה, וכן בשביל כאן לשלוף את התכומה הייחודית
                        driver: '6697d5eade0f9eaefaa58c2e',
                        // driver: res[0].id |  '',
                        leavingTime: object.get('leavingTime')?.toString() || '',
                        startingPoint: object.get('startingPoint')?.toString() || '',
                        target: object.get('target')?.toString() || '',
                        price: parseInt(object.get('price')?.toString() || '15', 10),
                        places: parseInt(object.get('places')?.toString() || '4', 10),
                        passengers: []
                    };
                    try {
                        console.log("newDrive", newDrive);
                        await axiosDataCreate(newDrive);
                        dispatch(createDrive({ newDrive }));
                    } catch (error) {
                        console.error('Error creating driver:', error);
                    }

                    break;

                }
        }
    }

    return { AxiosDataGeneralCreate }
}
export default GeneralCreate


