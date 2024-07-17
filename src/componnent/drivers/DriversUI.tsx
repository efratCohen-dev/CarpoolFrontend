import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { HTTP } from "../../HTTPpage.contents";
import useGet from "../../hooks/Get";
import { getAllDrivers } from "../../store/Driver";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../Store";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import '../../App.css'
import MyDrives from '../drives/MyDrives'
import { IDriver } from "../interface/IDriver";
import { ClassNames } from "@emotion/react";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const DriversUI = () => {

    const [currentDrivers, setCurrentDrivers] = useState<IDriver[]>([]);
    const [UI, setUI] = useState<IDriver[]>([]);
    const drivers = useAppSelector((driver) => driver.DriverSlice.drivers);
    const { res, axiosData } = useGet(HTTP.DRIVERURL);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const [isExsit, setIsExsit] = useState(false);

    useEffect(() => {
        axiosData();
        dispatch(getAllDrivers({ res: res }));
    });
    useEffect(() => {
        if (isExsit) {
            setUI(currentDrivers)
        }
        else {
            setUI(drivers)
        }
    }, [isExsit, drivers]);


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    const filter = (f: string) => {
        setIsExsit(true);
        setCurrentDrivers(drivers.filter(driver => driver.name?.includes(f)))
    }

    return (
        <>
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                // label={`חיפוש ${<PersonSearchIcon className="icon"/>}`}
                label='חיפוש'
                variant="filled"
                size="small"
                onChange={(e) => filter(e.target.value)}
            />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {UI.map((d) => {
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
                                            <Avatar alt="Cindy Baker">{d.name.slice(0, 1)}</Avatar>
                                        </ListItemAvatar>
                                        <div className="allDrivers">
                                            <ListItemText

                                                primary={d.name}
                                                secondary={
                                                    <Fragment>
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

                                                    </Fragment>
                                                }
                                            />
                                        </div>
                                    </ListItem >
                                </AccordionSummary>
                                <AccordionDetails>
                                    <MyDrives driver={d} />
                                </AccordionDetails>
                                <Divider variant="inset" component="li" />
                            </Accordion>

                        </>
                    )
                })
                }
            </List >
        </>
    )
}
export default DriversUI