import Drawer from '@mui/material/Drawer';

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
      </Drawer>
    </div>
  )
}
export default Search;
