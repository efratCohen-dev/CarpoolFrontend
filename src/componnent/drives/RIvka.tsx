import React, { useEffect, useState } from 'react';
import useGetById from '../../hooks/GetById';
import { HTTP } from '../../HTTPpage.contents';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IDrive } from '../interface/IDrive';
import { RootState, AppDispatch } from '../../Store';
import List from '@mui/material/List';
import OneDrive from './OneDrive';
import { getAll, updateDrive } from '../../store/Drive'
import { IDriver } from '../interface/IDriver';
import { ObjectId } from 'mongodb';
import useGet from '../../hooks/Get';
import { getAllDrivers } from '../../store/Driver';
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// interface TablePaginationActionsProps {
//     count: number;
//     page: number;
//     rowsPerPage: number;
//     onPageChange: (
//         event: React.MouseEvent<HTMLButtonElement>,
//         newPage: number,
//     ) => void;
// }

const Rivka = () => {
    useEffect(() => {
        axiosData();
        dispatch(getAll({ res: res }));

    });
    const [drivers, setDrivers] = useState<IDriver[]>([])
    const { resGetById, axiosDataGetById } = useGetById(HTTP.DRIVEURL);
    const { res, axiosData } = useGet(HTTP.DRIVEURL);
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentDriver, SetCurrentDriver] = useState<IDriver>();

    const getDriver = async (id: ObjectId) => {
        await axiosDataGetById(id)
        dispatch(getAllDrivers({ res: resGetById }));
        setDrivers(useAppSelector((state) => state.DriverSlice.drivers));
        // const drivers = useAppSelector((state) => state.DriverSlice.drivers);
    }

    const drives = useAppSelector((state) => state.DriveSlice.drives);
    console.log("drive", drives);


    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const addPassenger = (d: IDrive) => {
        d.passengers = [...d.passengers, "new"]
        updateDrive(d)
    }
    return (
        <>
            <p>Rivka</p>
            <div dir="rtl">
                <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    {
                        drives.map((d) => {
                            return (
                                <>
                                    {getDriver(d.driver)}{
                                        drivers.map((driver) => {
                                            return (
                                                <>
                                                    <OneDrive  drive={d} driver={driver} />
                                                </>
                                            )

                                        })

                                    }

                                </>
                            )
                        })
                    }
                </List>
            </div ></>

    );
}
export default Rivka;