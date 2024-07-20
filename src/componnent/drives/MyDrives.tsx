import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
// import { getAll } from "../../store/Drive";
// import useGet from "../../hooks/Get";
import { HTTP } from "../../HTTPpage.contents";
import OneDrive from "./OneDrive";
import useGetById from "../../hooks/GetById";
import { IDriver } from "../interface/IDriver";
import { IDrive } from "../interface/IDrive";
import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import { getAll } from "../../store/Drive";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
interface Props {
    driver: IDriver;
}
const MyDrives: React.FC<Props> = ({ driver }) => {
    const [drives, setDrives] = useState<IDrive[]>([])
    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVEURL);

    useEffect(() => {
        driver.id && GetById(`${driver.id}`)
    },[]);
    const GetById = async (id: String) => {
        axiosDataGetById(id);
        // getAll(resGetById)
       
    }
    useEffect(() => {
        setDrives(resGetById)
    }, [resGetById])

    return (
        <>
            {drives.length > 0? (drives.map((d) => {
                return (
                    <>
                        <OneDrive drive={d} driver={driver} />
                    </>
                )
            })):
            <p>אין עדיין נסיעות</p>

            }
        </>
    )
}
export default MyDrives