import { IDrive } from "../interface/IDrive";
import React, { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FlexColumn, Flex, FlexBetween } from './Drive.styled';
import Avatar from '@mui/material/Avatar';
import theme from '../../Theme';
import { IDriver } from "../interface/IDriver";
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface Props {
    drive: IDrive;
    driver: IDriver;
}


const OneDrive: React.FC<Props> = ({ drive, driver }) => {
    // console.log("OneDrive",drive,driver);
    
    // const [currentDriver, setCurrentDriver] = useState<String | undefined>("Efrat");
    const addPassenger = (d: IDrive) => {
        d.passengers = [...d.passengers, "new"]
        // updateDrive(d)
    }
    // const drivers = useAppSelector((state) => state.DriverSlice.drivers);
    // useEffect(() => {
    //     // setCurrentDriver(drivers.find((drv) => { drv.id === d.driver })?.name);
    // }, [])

    return (
        <>
            <ListItem alignItems='flex-start'>
                <ListItemText
                    primary={
                        <FlexBetween>
                            <Flex>
                                <Avatar sx={{ width: 24, height: 24, bgcolor: theme.palette.primary.main }} >{`${driver.name?.slice(0, 1)}`}</Avatar>
                                <div>{`${driver.name}`}</div>
                            </Flex>
                            <Flex>
                                {
                                    drive.passengers.map((p: String, index: number) =>
                                        <Avatar key={index} sx={{ width: 24, height: 24, bgcolor: theme.palette.primary.main }} >{p[0]}</Avatar>
                                    )
                                }
                                {/* onclick */}
                                <Avatar sx={{ width: 24, height: 24 }} onClick={() => addPassenger(drive)}>+</Avatar>
                            </Flex>
                        </FlexBetween>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {`${drive.places - drive.passengers.length} מקומות פנויים`}
                            </Typography>
                            <Flex>
                                <FlexColumn>
                                    <Flex>
                                        <CircleOutlinedIcon fontSize='small' />
                                        <div>{`${drive.startingPoint.city} ,`}</div>
                                        <div>{`${drive.startingPoint.street} ,`}</div>
                                        <div>{`${drive.startingPoint.numBuild} `}</div>
                                    </Flex>
                                    <MoreVertIcon />
                                    <Flex>
                                        <PlaceIcon />
                                        <div>{`${drive.target.city} ,`}</div>
                                        <div>{`${drive.target.street} ,`}</div>
                                        <div>{`${drive.target.numBuild} `}</div>
                                    </Flex>
                                </FlexColumn>
                                <FlexColumn>
                                    {/* <div>{`יציאה משוערת ב: ${drive.leavingTime?.getHours()}:${drive.leavingTime?.getMinutes()}`}</div> */}
                                    <div>{`עלות הנסיעה: ${drive.price} ש"ח`}</div>
                                </FlexColumn>
                            </Flex>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}
export default OneDrive;