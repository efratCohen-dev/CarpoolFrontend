import { IDrive } from "../interface/IDrive";
import React, { Fragment, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../Store';
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { ObjectId } from "mongodb";
import useDelete from "../../hooks/Delete";
import { HTTP } from "../../HTTPpage.contents";
import Join from "../login/join";
import { Button, IconButton } from "@mui/material";
import { deleteDrive } from "../../store/Drive";
import EmptyPopUP from '../storybook/EmptyPopUp';
import Chat from "../chat/chatUI/Chat";



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface Props {
    drive: IDrive;
    driver: IDriver;
}


const OneDrive: React.FC<Props> = ({ drive, driver }) => {
    const { res, axiosDataDelete } = useDelete(HTTP.DRIVEURL);
    const [currenrDriveID, setCurrenrDriveID] = useState('');
    const [popUp, setPopUP] = useState(false);
    const [chat, setChat] = useState(false);

    useEffect(() => {
        if (res !== undefined && res !== null && res !== false) {
            if (res === true) {
                dispatch(deleteDrive({ id: currenrDriveID }));
            } else {
                setPopUP(true);
            }
        }
    }, [res])

    const dispatch = useDispatch();

    const deleteCurrentDrive = (id: any) => {
        setCurrenrDriveID(`${id}`);
        axiosDataDelete(id,driver);

    };

    const editDrive = (id: string) => {
        console.log("editDrive", id);

    };

    const handelChat = () => {
        console.log('handelChat 1', chat);
        setChat(!chat);
    }

    return (
        <>
            {popUp &&
                <EmptyPopUP text={['שגיאה','צור אימוות']}/>
            }
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
                                    drive.passengers.map((p: any, index: number) =>
                                        <Avatar key={index} sx={{ width: 24, height: 24, bgcolor: theme.palette.primary.main }} >{p.name[0]}</Avatar>
                                    )
                                }
                                <Join driveID={`${drive.id}`} />
                            </Flex>
                        </FlexBetween>
                    }
                    secondary={
                        <Fragment>
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
                        </Fragment>
                    }
                />
            </ListItem>
            <IconButton aria-label="delete" color="primary">
                <DeleteIcon fontSize="inherit" onClick={() => deleteCurrentDrive(`${drive.id}`)} />
            </IconButton >
            <IconButton aria-label="delete" color="primary">
                <EditIcon fontSize="inherit" onClick={() => editDrive(`${drive.id}`)} />
            </IconButton>
            <IconButton color="primary">
                <ChatBubbleOutlineIcon onClick={()=>{handelChat()}} />
            </IconButton>
            {/* {chat && <EmptyPopUP name={driver.name} driveID={new String(drive.id)} />} */}
            <Divider variant="inset" component="li" />
        </>
    )
};
export default OneDrive;