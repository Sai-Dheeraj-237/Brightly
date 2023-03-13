import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';
import './App.css';
// import Proudctsadmin from './components/Adminpanel/Productsadmin'
// import Contactus from './components/Contactus';





import Navbar from './containers/Navbar';






function App() {



  return (
   <>
  <BrowserRouter> 
   <Navbar></Navbar>
   </BrowserRouter> 

   {/* <Proudctsadmin></Proudctsadmin> */}

   {/* <BrowserRouter>
   <Contactus></Contactus>
   </BrowserRouter> */}


  
 
  
   </>
  );
}

export default App;
