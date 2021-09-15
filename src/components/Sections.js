import React from 'react';

import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function handleViewOrder(e, history){
    history.push("/orderList");
}

function handlePlaceOrder(e, history){
    history.push("/orderDetails");
}

function handleCancelOrder(e, history){
    history.push("/cancelOrder");
}


export default function Sections() {
     let  history = useHistory();
    return (
        <>
         <h1>Pizza Ordering App</h1>
        <div>
            <Button onClick= {e => handleViewOrder(e,history)} className="bttn">View all Orders</Button>
            <Button onClick={e => handlePlaceOrder(e,history)} variant="outline-primary" className="bttn">Place an Order</Button>
            <Button onClick={e => handleCancelOrder(e,history)} variant="outline-primary" className="bttn">Cancle an Order</Button>
        </div>
        </>
    )
}
