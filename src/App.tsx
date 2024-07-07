import Search from '../src/componnent/search/Search';
import Join from './componnent/login/join';
import DriversUI from './componnent/drivers/DriversUI';

function App() {

  return (
    <div>
      {/* <DriversUI/> */}
      <Search/>
      {/* <Join handleClose={handleClose}/> */}
      <Join/>
    </div>
  );
}
export default App