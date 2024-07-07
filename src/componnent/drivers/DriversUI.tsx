import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HTTP } from "../../HTTPpage.contents";
import useGet from "../../hooks/Get";
import { getAll } from "../../store/Driver";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../Store";
import EastIcon from '@mui/icons-material/East';
import { Route } from "@mui/icons-material";
// import MyDrives from "../drives/MyDrives";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ObjectId } from 'mongodb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


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
    const rrr = ['333333', '5555555', '88888888888']
    let profil = '';
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                drivers.map((d) => {
                    return (
                        <>
                            <Accordion onChange={handleChange('panel1')}>
                                {/* <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"> */}
                                <AccordionSummary
                                    expandIcon={<ArrowDownwardIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Cindy Baker" />
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
                                        </div>
                                    </ListItem >
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* <Divider variant="inset" component="li" /> */}
                                    <MyDrives />
                                </AccordionDetails>
                                <Divider variant="inset" component="li" />
                            </Accordion>

                        </>
                    )
                })
            }
        </List >
    )
}
export default DriversUI