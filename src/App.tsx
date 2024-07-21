import Search from '../src/componnent/search/Search';
import AllDrives from './componnent/drives/AllDrives';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Join from './componnent/login/join';
import DriversUI from './componnent/drivers/DriversUI';
import SideMenu from './componnent/storybook/SideMenu';
import IconMenu from './componnent/storybook/IconMenu';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExtensionIcon from '@mui/icons-material/Extension';
import theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import { Drawer, List } from '@mui/material';
import CreatDrive from './componnent/drives/CreateDrive';
import AddDriver from './componnent/drivers/AddDiver';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import { Login } from '@mui/icons-material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainProvider } from './componnent/chat/context/MainContext';
import { SocketProvider } from './componnent/chat/context/SocketContext';
import { UsersProvider } from './componnent/chat/context/UsersContext';

function App() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <MainProvider>
          <UsersProvider>
            <SocketProvider>
              <AllDrives />
              <SideMenu />
            </SocketProvider>
          </UsersProvider>
        </MainProvider>
      </ThemeProvider >
    </CacheProvider >

  );
}
export default App