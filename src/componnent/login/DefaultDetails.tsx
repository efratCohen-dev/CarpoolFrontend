import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";

export const useAppDispatch = (type: string) => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
    type: String;
};
const DefaultDetails:React.FC<Props> = ({type}) => {
    const dispatch = useDispatch();
    switch (type) {
        case 'יצירת נסיעה חדשה': {
            const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.driver);
            return (
                <>
                    <h1>{currentDriver.name} </h1>
                    < h1 > {currentDriver.email} </h1>
                    < h1 > {currentDriver.phone} </h1>
                </>
            );
            break;
        }
        // case 'עדכון נסיעה': {
        //     const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.driver);
        //     return (
        //         <>
        //             <h1>{currentDriver.name} </h1>
        //             < h1 > {currentDriver.email} </h1>
        //             < h1 > {currentDriver.phone} </h1>
        //         </>
        //     )
        // }
    }

};
export default DefaultDetails