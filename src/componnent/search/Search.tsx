import Drawer from '@mui/material/Drawer';
import InputLogin from '../storybook/InputLogin';

const drawerWidth = 240;

const Search = () => { 

  return (
    <div dir="rtl">
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
        anchor="right"
      >
        <InputLogin placeorder={'קודת יעד'} nameInput={'searchStart'} typ={'text'} />
        <InputLogin placeorder={'קודת יעד'} nameInput={'searchStart'} typ={'text'}/>
      </Drawer>
    </div>
  )
}
export default Search;
