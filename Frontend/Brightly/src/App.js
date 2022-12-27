import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cartlogout from './components/Cart-logout';
// import Proudctsadmin from "./components/Products-Admin";
import Navbar from './containers/Navbar';

function App() {
  return (
   <>
  <BrowserRouter> 
   <Navbar></Navbar>
   </BrowserRouter> 
   {/* <Proudctsadmin></Proudctsadmin> */}
   {/* <Cartlogout></Cartlogout> */}
   </>
  );
}

export default App;
