import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import useGet from "../../hooks/Get";
import { HTTP } from "../../HTTPpage.contents";
import OneDrive from "./OneDrive";
import useGetById from "../../hooks/GetById";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const MyDrives = ()=>{

    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVERURL);
    const dispatch = useDispatch();
    // axiosDataGetById();
    // const drivers = useAppSelector((driver) => driver.DriverSlice.drivers);

    console.log("dresrivers", resGetById);

    

    return(
        <>
        {/* {
            res.map((d)=>{
                <OneDrive  drive={d} driver={driver} />
            })
        } */}
        <p>קומפוננטת ניסעה של אפרת</p>
        </>
    )
}
export default MyDrives