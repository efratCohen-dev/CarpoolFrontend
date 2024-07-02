import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { log } from 'console';
import { ObjectId } from 'mongodb';
import useGet from '../../hooks/Get';
import { HTTP } from '../../HTTPpage.contents';
import { getAll } from '../../store/Drive';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IDrive } from '../interface/IDrive';
import { RootState, AppDispatch } from '../../Store';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

const Rivka = () => {
    const dispatch = useDispatch();
    const { res, axiosData } = useGet(HTTP.DRIVEURL);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    // useEffect(() => {
    //     axiosData();
    //     useAppDispatch(getAll({ res: res }));
    //   });
    
    const drive = useAppSelector((state) => state.DriveSlice.drives);

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

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {drive.map((d:IDrive) => (
                        <TableRow >
                            <TableCell>
                                {d.id}
                            </TableCell>
                            <TableCell>
                                {d.id}
                            </TableCell>
                            <TableCell>
                                {d.leavingTime.toString()}
                            </TableCell>
                            <TableCell>
                            city: {d.startingPoint.city} street:{d.startingPoint.street} numBuild:{d.startingPoint.numBuild.toString()}
                            </TableCell>
                            <TableCell>
                            price: {d.price.toString()}
                            </TableCell>
                            <TableCell>
                            availablePlaces: {d.availablePlaces.toString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={res.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        //   ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
export default Rivka