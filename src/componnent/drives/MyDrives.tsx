import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { getAll } from "../../store/Drive";
import useGet from "../../hooks/Get";
import { HTTP } from "../../HTTPpage.contents";
import OneDrive from "./OneDrive";
import useGetById from "../../hooks/GetById";
import { IDriver } from "../interface/IDriver";
import { IDrive } from "../interface/IDrive";
import { useEffect, useState } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
interface Props {
    driver: IDriver;
}
const MyDrives: React.FC<Props> = ({ driver }) => {
    useEffect(() => {
        if (driver.id) {
            axiosDataGetById(driver.id);
            dispatch(getAll({ res: res }));
            setDrives(useAppSelector((drive) => drive.DriveSlice.drives));
        }

    });
    // const { res, axiosData } = useGet(HTTP.DRIVEURL);
    const [drives, setDrives] = useState<IDrive[]>([])
    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVERURL);
    const dispatch = useDispatch();
    if (driver.id) {
        setDrives(useAppSelector((drive) => drive.DriveSlice.drives));
        console.log("drives", drives);
    }

    return (
        <>
            {drives != null && (drives.map((d) => {
                {
                    d.driver === driver.id &&
                        <OneDrive drive={d} driver={driver} />
                }

            }))

            }
        </>
    )
}
export default MyDrives