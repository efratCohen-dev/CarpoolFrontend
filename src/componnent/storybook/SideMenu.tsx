import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import IconMenu from './IconMenu';
import ExtensionIcon from '@mui/icons-material/Extension';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import * as iconsMaterial from '@mui/icons-material';
import DriversUI from '../drivers/DriversUI';
import { Grid, Icon } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

import '../../App.css'
import CreatDrive from '../drives/CreateDrive';
import AddDriver from '../drivers/AddDiver';
import { BorderLeft } from '../../styled/style.styled';
import theme from '../../Theme';
import { FlexColumn } from '../../styled/layout.styled';

const drawerWidth = 100;

const SideMenu = () => {

    const [open, setOpen] = useState(false);
    const [allDrivers, setAllDrivers] = useState(false);

    const handleDrivers = () => {
        setAllDrivers(!allDrivers);
    };

    return (
        <div className='margin'>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                variant="permanent"
                anchor="right"
            >
                <Box sx={{ bgcolor: 'secondary.main', height: "100vh" }}>
                    <FlexColumn>
                        <Grid
                            container
                            direction="column"
                            alignItems=" flex-end"
                            justifyContent="space-evenly"
                            height={"160px"}
                        >
                            <BorderLeft color={theme.palette.primary.main} onClick={handleDrivers}>
                                <GroupIcon className="icon" sx={{ color: 'white' }} />
                                <div>הנהגות שלנו</div>
                            </BorderLeft>
                            <Divider />
                            <AddDriver />
                        </Grid>
                        <CreatDrive />
                    </FlexColumn>
                </Box>
            </Drawer>
            {
                allDrivers && <DriversUI />
            }
        </div >
    );
};
export default SideMenu