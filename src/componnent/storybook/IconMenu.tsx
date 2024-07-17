import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import * as iconsMaterial from '@mui/icons-material';
import '../../App.css'



const drawerWidth = 240;

interface Props {
    Icon: iconsMaterial.SvgIconComponent;

}

const IconMenu: React.FC<Props> = ({ Icon }) => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>

            <Toolbar>
                <Icon className="icon"
                    // color="inherit"
                    // aria-label="open drawer"
                    onClick={handleDrawer}
                // edge="start"
                // sx={{ mr: 2}}
                >
                    <MenuIcon />
                </Icon>

            </Toolbar>
            <p>IconMenu</p>
            <Box sx={{ display: 'flex' }}>
                {/* <Toolbar>
                    <IconButton className="icon"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar> */}
                {/* <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                </Drawer> */}
                {/* <Icon /> */}
                <Divider />
                <List>
                    {
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon className="icon" />
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>
                    }
                </List>
                <Divider />
            </Box>
        </>
    );
};
export default IconMenu