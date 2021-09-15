import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

function CancelOrder() {
        const history = useHistory();

        const [orders, setOrders] = useState([]);
        useEffect(() => {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'aplication/json'},
            };
            fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
            .then(response => response.json())
            .then(data => setOrders(data))
        },
        []);

         const Order_ID = 1;
        const onClickCancel = (Order_ID) => {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
        
            fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    alert('Cancelled successfully')
                }
                window.location.reload();
            })
         }
        
          return (
            <>
               <h1>Pizza  Ordering App</h1>
            <div>
                {orders.map((v,i) => {
                    return(
                        <div key={i}>
                        <p>Crust:{v.Crust}</p>
                        <p>Flavor: {v.Flavor}</p>
                        <p>Size: {v.Size}</p>
                        </div>
                        )
            
                    } )

                }
    
            </div>
            <Button className="bttn"  onClick={() => onClickCancel(Order_ID)}>Cancel Order</Button>
            <div>
            <Button  className="bttn"  size="lg" onClick={() => history.push('/sections')}> Go Back </Button>
            </div>
            </>
          );
        }

 

export default CancelOrder;
