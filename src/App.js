// import React from 'react';
// import Home from './components/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
  

// import './App.css';


// function App() {
  
//   return (
//     <Home />
  
//   );
// }

// export default App;

// new changing

import React from 'react';
 import { BrowserRouter } from "react-router-dom";
 import Home from './components/Home';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';
 function App() { 
   return (
     <BrowserRouter>
       <Home />
     </BrowserRouter>
   );
 }
 export default App;
