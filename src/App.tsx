import { useState } from 'react';
import Search from '../src/componnent/search/Search';
import Join from './componnent/login/join';

function App() {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Search handleClose={handleClose} open={open}/> */}
      {/* <Join handleClose={handleClose}/> */}
    </div>
  );
}
export default App