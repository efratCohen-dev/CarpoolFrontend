import Drawer from '@mui/material/Drawer';
import Sign from '../login/Sign';
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
        <Sign />
      </Drawer>
    </div>
  )
}
export default Search;
