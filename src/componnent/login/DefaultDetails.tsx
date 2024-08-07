import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../Store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
interface Props {
    type: string;
};
const DefaultDetails: React.FC<Props> = ({ type }) => {
    const currentDriver = useAppSelector((state) => state.CurrentDriverSlice.currentDriver);
    switch (type) {
        case 'יצירת נסיעה חדשה':

            return (
                <>
                    {
                        currentDriver && <>
                            <h1>{currentDriver.name} </h1>
                            < h1 > {currentDriver.email} </h1>
                            < h1 > {currentDriver.phone} </h1>
                        </>
                    }
                </>


            );

        default:
            return (
                <>
                </>
            )
    };
};
export default DefaultDetails