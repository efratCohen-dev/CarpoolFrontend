import Search from '../src/componnent/search/Search';
import Rivka from './componnent/drives/RIvka';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Join from './componnent/login/join';
import DriversUI from './componnent/drivers/DriversUI';

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
          {/* <DriversUI/> */ }
        <Search />
        <Rivka />
        {/* <Join handleClose={handleClose}/> */}
        <Join />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App