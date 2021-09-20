// This is the main page of pizza ordering app
import React from 'react';
import Images from './Classic.png';
import { useHistory } from "react-router-dom";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    } from 'react-router-dom';
    
import Sections from './Sections';
import OrderDetails from './OrderDetails';
import CancelOrder from './CancelOrder';
import OrderList from './OrderList';


import Button from 'react-bootstrap/Button';

function handleClick(e, history) {
    
    history.push("/sections");
}


const Home = () => {
    const history = useHistory();
    return (
        <>
        <Router>
      <Switch>
        <Route exact path={'/home'} component={Home}/>
        <Route exact path={'/sections'} component={Sections}/>
        <Route exact path={'/orderDetails'} component={OrderDetails}/>
        <Route exact path={'/cancelOrder'} component={CancelOrder}/>
        <Route exact path={'/orderList'} component={OrderList}/>

      </Switch>
    </Router>
        <div className="container">
            <div className="header">
                {/* ths is  main header */}
                <h1>Pizza Ordering App</h1>
            </div>
            <div className="logo">
                {/* logo for this app */}
                <img src={Images} alt="pizza-logo" />
            </div>
            <div className="content">
                {/* content */}
                <h4>Read to order for your favorite pizza! </h4>
            </div>
            <div className="btn">
                {/* this is the start button to move to the  buildnext page */}
                <Button onClick={e => handleClick(e,history)} >Start Here</Button>
            </div>

        </div>
        </>
    );
}

export default Home;
