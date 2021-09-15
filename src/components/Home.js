import React from 'react';
import Images from './Classic.png';
import { useHistory } from "react-router-dom";


import Button from 'react-bootstrap/Button';

function handleClick(e, history) {
    
    history.push("/sections");
}


const Home = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="header">
                <h1>Pizza Ordering App</h1>
            </div>
            <div className="logo">
                <img src={Images} alt="pizza-logo" />
            </div>
            <div className="content">
                <h4>Read to order for your favorite pizza! </h4>
            </div>
            <div className="btn">
                <Button onClick={e => handleClick(e,history)} >Start Here</Button>
            </div>

        </div>
    );
}

export default Home;
