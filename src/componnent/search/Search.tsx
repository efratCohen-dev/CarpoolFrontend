import Drawer from '@mui/material/Drawer';
import InputLogin from '../storybook/InputLogin';
import theme from '../../Theme';
import { Grid, OutlinedInput } from '@mui/material';
import {Logo } from '../../styled/style.styled';
import { FlexColumn } from '../../styled/layout.styled';

const drawerWidth = 240;

const Search = () => {

  return (
    <div dir={theme.direction}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
      >

        <FlexColumn>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-evenly"
            height={"160px"}
          >
            <OutlinedInput placeholder="נקודת התחלה" size='small' />
            <OutlinedInput placeholder="נקודת יעד" size='small' />
          </Grid>
          <Logo src="../../assets/logo.png" alt='logo' />
        </FlexColumn>
      </Drawer>
    </div>
  )
}
export default Search;
