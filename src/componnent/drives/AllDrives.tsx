import { useEffect } from 'react';
import useGetById from '../../hooks/GetById';
import { HTTP } from '../../HTTPpage.contents';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../Store';
import List from '@mui/material/List';
import { getAll } from '../../store/Drive'
import useGet from '../../hooks/Get';
import DriveDriver from './DriveDriver';
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const AllDrives = () => {
    const drives = useAppSelector((state) => state.DriveSlice.drives);
    useEffect(() => {
        axiosData();
        dispatch(getAll({ res: res }));
    },[drives]);
    const { res, axiosData } = useGet(HTTP.DRIVEURL);
    const dispatch = useDispatch();

    return (
        <>
            <div dir="rtl">
                <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    {
                        drives.map((d) => {
                            return (
                                <>
                                    <DriveDriver drive={d}/>
                                </>
                            )
                        })
                    }
                </List>
            </div ></>

    );
}
export default AllDrives;