import Search from '../src/componnent/search/Search';
import AllDrives from './componnent/drives/AllDrives';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import DriversUI from './componnent/drivers/DriversUI';
import Join from './componnent/login/Join';

function App() {
  const theme = (outerTheme: Theme) =>
    createTheme({
      direction: 'rtl',
    });
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        {/* <DriversUI /> */}
        {/* <Search /> */}
        <AllDrives />
        {/* <Join /> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App