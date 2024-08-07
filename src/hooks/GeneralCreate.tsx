import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HTTP } from "../HTTPpage.contents";
import useCreate from "./Create";
import { IDriver } from "../componnent/interface/IDriver";
import { getCurrentDriver } from "../store/CurrentDriver";
import { createDriver } from "../store/Driver";
import { useEffect } from "react";
import { IDrive } from "../componnent/interface/IDrive";
import { createDrive, updatePassengersDrive } from "../store/Drive";
import { AppDispatch, RootState } from "../Store";
import { IPassenger } from "../componnent/interface/IPassenger";
import useCreatePassenger from "./CreateNewPassenger";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useGeneralCreate = () => {
    const dispatch = useDispatch();
    const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.currentDriver);
    const { res, axiosDataCreate } = useCreate();
    const { axiosDataCreatePassenger } = useCreatePassenger(HTTP.JOINDRIVEURL);




    const generalCreate = async (type: string, object: any, ID?: string) => {
        switch (type) {
            case 'כניסה כנהג':
                const newDriver: IDriver = {
                    name: object.get('userName')?.toString() || '',
                    password: object.get('password')?.toString() || '',
                    email: object.get('email')?.toString() || '',
                    phone: parseInt(object.get('tel')?.toString() || '0', 10)
                };
                try {
                    axiosDataCreate(HTTP.DRIVERURL, newDriver);

                } catch (error) {
                    console.error('Error creating driver:', error);
                }
                break;

            case 'יצירת נסיעה חדשה':
                const newDrive: IDrive = {
                    driver: `${currentDriver.id}`,
                    leavingTime: object.get('time'),
                    startingPoint: {
                        city: object.get('startingPointCity')?.toString() || '',
                        street: object.get('startingPointStreet')?.toString() || '',
                        numBuild: object.get('startingPointNum')?.toString() || '',
                    },
                    target: {
                        city: object.get('destinationPointCity')?.toString() || '',
                        street: object.get('destinationPointStreet')?.toString() || '',
                        numBuild: object.get('destinationPointNum')?.toString() || '',
                    },
                    price: parseInt(object.get('priceOfDrive')?.toString() || '15'),
                    places: parseInt(object.get('numPlacesOfDrive')?.toString() || '4'),
                    passengers: [],
                    masseges: []
                };
                try {
                     console.log('newDrive',newDrive);
                     
                    axiosDataCreate(HTTP.DRIVEURL, newDrive, currentDriver);
                } catch (error) {
                    console.error('Error creating driver:', error);
                }

                break;
            case 'הצטרפות לנסיעה':
                const passenger: IPassenger = {
                    name: object.get('userName')?.toString() || '',
                    email: object.get('email')?.toString() || '',
                };
                try {
                    if (ID) {
                        axiosDataCreatePassenger(passenger, ID);
                        dispatch(updatePassengersDrive({ id: ID, newPassenger: passenger }));
                    }
                } catch (error) {
                    console.error('Error join passenger:', error);
                }
                break;
        }
    }
    return { generalCreate }
}
export default useGeneralCreate;

