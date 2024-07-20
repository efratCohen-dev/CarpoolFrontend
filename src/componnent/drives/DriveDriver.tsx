import { useEffect, useState } from "react";
import { IDrive } from "../interface/IDrive";
import { IDriver } from "../interface/IDriver";
import useGetById from "../../hooks/GetById";
import { HTTP } from "../../HTTPpage.contents";
import { ObjectId } from "mongodb";
import { getAllDrivers } from "../../store/Driver";
import OneDrive from "./OneDrive";
import Loading from "../storybook/Loading";
import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    drive: IDrive;
}
const DriveDriver: React.FC<Props> = ({ drive }) => {

    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVERURL);
    const [drivers, setDrivers] = useState<IDriver[]>([])
    const GetById = async (id: String) => {
        axiosDataGetById(id);
    };

    useEffect(() => {
        drive.driver && GetById(`${drive.driver}`)
    }, []);
    useEffect(() => {
        setDrivers(resGetById);
    }, [resGetById]);
  
    return (
        <>
            {drivers[0] ? <OneDrive drive={drive} driver={drivers[0]} />
                :<Loading/>
            }
        </>
    )
};
export default DriveDriver