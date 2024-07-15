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

function App() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* <DriversUI /> */}
        {/* <Search /> */}
        {/* <AllDrives /> */}
        {/* <Join /> */}

        <CreatDrive />
        {/* <SideMenu/> */}
        {/* <IconMenu Icon={LocalShippingIcon}/> */}
      </ThemeProvider>
    </CacheProvider >
  );
}
export default App