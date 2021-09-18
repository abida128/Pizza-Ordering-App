import React from 'react';
import Home from './components/Home';
import Sections from './components/Sections';
import OrderDetails from './components/OrderDetails';
import CancelOrder from '././components/CancelOrder';
import OrderList from './components/OrderList';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
  
  } from 'react-router-dom';
  

import './App.css';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path={'/home'} component={Home}/>
        <Route exact path={'/sections'} component={Sections}/>
        <Route exact path={'/orderDetails'} component={OrderDetails}/>
        <Route exact path={'/cancelOrder'} component={CancelOrder}/>
        <Route exact path={'/orderList'} component={OrderList}/>

      </Switch>
    </Router>
  
  );
}

export default App;