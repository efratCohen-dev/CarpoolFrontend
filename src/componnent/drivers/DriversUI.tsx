import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HTTP } from "../../HTTPpage.contents";
import useGet from "../../hooks/Get";
import { getAll } from "../../store/Driver";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../Store";
import EastIcon from '@mui/icons-material/East';
import { Route } from "@mui/icons-material";
// import MyDrives from "../drives/MyDrives";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ObjectId } from 'mongodb';

import '../../App.css'
import MyDrives from "../drives/MyDrives";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const DriversUI = () => {
    useEffect(() => {
        axiosData();
        dispatch(getAll({ res: res }));
    });
    const { res, axiosData } = useGet(HTTP.DRIVERURL);
    const dispatch = useDispatch();

    const drivers = useAppSelector((driver) => driver.DriverSlice.drivers);

    console.log("drivers", drivers);

    // const handleOnclick = ({id: ObjectId}) => {
    //     return (
    //         <MyDrives />

    //     )
    // }

    // const [profil, setProfil] = useState('')
    let profil = '';

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                drivers.map((d) => {
                    return (
                        <>
                            <Divider variant="inset" component="li" />

                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    {/* {
                                        // setProfil( d.name )
                                        profil = d.name
                                    } */}
                                    <Avatar alt="Cindy Baker" />
                                    {/* <Avatar alt="Cindy Baker" src={d.name[0]} /> */}
                                    {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}

                                </ListItemAvatar>
                                <div className="allDrivers">
                                    <ListItemText

                                        primary={d.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    מייל
                                                </Typography>
                                                {d.email}
                                                <br />
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    נייד
                                                </Typography>
                                                {d.phone}

                                            </React.Fragment>


                                        }
                                    />
                                    {/* <button onClick={handleOnclick(d.id)}><ArrowBackIcon /></button> */}
                                    {/* <a> */}
                                    {/* <EastIcon><MyDrives /></EastIcon> */}
                                    <ArrowBackIcon><MyDrives /></ArrowBackIcon>
                                    {/* </a> */}
                                </div>
                            </ListItem >
                            {/* <a>
                                <EastIcon><MyDrives /></EastIcon>
                            </a> */}
                            {/* <Routes>
                                <Route element={<Suspense fallback={<h1>loading..</h1>}><MyDrives /></Suspense>}><Route />

                            </Routes> */}

                        </>)
                })
            }
        </List >
    )
}
export default DriversUI