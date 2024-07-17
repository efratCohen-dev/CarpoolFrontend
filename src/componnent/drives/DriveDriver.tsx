import { useEffect, useState } from "react";
import { IDrive } from "../interface/IDrive";
import { IDriver } from "../interface/IDriver";
import useGetById from "../../hooks/GetById";
import { HTTP } from "../../HTTPpage.contents";
import { ObjectId } from "mongodb";
import { getAllDrivers } from "../../store/Driver";
import OneDrive from "./OneDrive";
import Loading from "../storybook/Loading";

interface Props {
    drive: IDrive;
}
const DriveDriver:React.FC<Props> = ({drive})=>{
    useEffect(() => {
        drive.driver && GetById(`${drive.driver}`)
    });
    const [drivers, setDrivers] = useState<IDriver[]>([])
    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVERURL);

    const GetById = async (id: String) => {
        await axiosDataGetById(id);
        getAllDrivers(resGetById)
        setDrivers(resGetById)
    }
    return(
        <>
        {
            drivers.length>0?drivers.map((driver)=>{
                return(
                    <>
                    <OneDrive drive={drive} driver={driver} />
                    </>
                )
            }):
            <Loading/>
        }
        </>
    )
};
export default DriveDriver