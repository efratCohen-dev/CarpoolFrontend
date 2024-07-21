import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HTTP } from "../HTTPpage.contents";
import useCreate from "./Create";
import { IDriver } from "../componnent/interface/IDriver";
import { getCurrentDriver } from "../store/CurrentDriver";
import { createDriver } from "../store/Driver";
import { useEffect } from "react";
import { IDrive } from "../componnent/interface/IDrive";
import { createDrive } from "../store/Drive";
import { AppDispatch, RootState } from "../Store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useGeneralCreate = () => {
    const dispatch = useDispatch();
    const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.currentDriver);
    const { res, axiosDataCreate } = useCreate();

    useEffect(() => {
        console.log("res", res)
        console.log('(res !== undefined && res !== null)', res !== undefined && res !== null);

        if (res !== undefined && res !== null) {
            console.log("res useEffect", res);
            if (res as IDriver) {
                dispatch(createDriver({ driver: res }));
                dispatch(getCurrentDriver({ res: res }));

            } else {
                console.log('res useEffect drive', res);
                
                dispatch(createDrive({ drive: res }));
            }
        }
    }, [res])
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
                    leavingTime: object.get('time')?.toString() || '',
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
                    passengers: []
                    //chat[] create in intarface and models in servers
                };
                try {
                    axiosDataCreate(HTTP.DRIVEURL, newDrive);
                    console.log('axiosDataCreate drive');

                } catch (error) {
                    console.error('Error creating driver:', error);
                }

                break;
            case 'הצתרפות לנסיעה':
                break;
        }
    }
    return { generalCreate }
}
export default useGeneralCreate;
