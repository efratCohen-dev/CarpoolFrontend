import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6503A6',
      dark: '#380273',
    },
    secondary: {
      main: '#3c3c3c',
      dark: '#979797',
    },
    info: {
      main: '#4F5902',
    },
  },
  direction: 'rtl',
});

export default theme;