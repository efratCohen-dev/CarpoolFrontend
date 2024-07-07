import Search from '../src/componnent/search/Search';
import Rivka from './componnent/drives/RIvka';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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
        <Search/>
        <Rivka />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App