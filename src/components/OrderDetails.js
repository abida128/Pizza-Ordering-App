import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router';




function OrderDetails() {
    const [crust, setCrust] = useState('');
    const [flavor, setFlavor] = useState('');
    const [size, setSize] = useState('');
    const history = useHistory();

    const onSelectCrust = (event) => {
        setCrust(event.target.value);
      }
    
      const onSelectFlavor = (event) => {
        setFlavor(event.target.value);
      }
    
      const onSelectSize = (event) => {
        setSize(event.target.value);
      }
   
    
      const  handleClick = () => {
        console.log(crust, flavor, size);
        if (crust === "" || flavor === "" || size === "" ) {
          alert('please select appropriate options')
        }
        else {
          let pizzaObject = {
            "Flavor": flavor,
            "Crust": crust,
            "Size": size,
            "Timestamp": new Date(),
            "Table_No": 3,
          }
      
      let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzE1Njg4MTksIm5iZiI6MTYzMTU2ODgxOSwianRpIjoiN2NjZmY4YTctYjc0Ni00MjBlLWI1OWQtMDUyMWM1NjU3OTNjIiwiZXhwIjoxNjMxNTY5NzE5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.oGkQPEzQbK2yH1NXSk0ixS7O_HNXClvPgCiK-0op1e8";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(pizzaObject)
    };
    
    fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
        .then(response => { 
          if (response.status === 201)
           {
          alert('Your order has been registered')
        }
        })}
      }

      // const [crust, setCrust] = useState('');
      // const [flavor, setFlavor] = useState('');
      // const [size, setSize] = useState('');
  
      // const onSelectCrust = (event) => {
      //     setCrust(event.target.value);
      //   }
      
      //   const onSelectFlavor = (event) => {
      //     setFlavor(event.target.value);
      //   }
      
      //   const onSelectSize = (event) => {
      //     setSize(event.target.value);
      //   }
     
      
      //   const  handleClick = () => {
      //     console.log(crust, flavor, size);
      //     if (crust === "" || flavor === "" || size === "" ) {
      //       alert('please select appropriate options')
      //     }
      //     else {
      //       let pizzaObject = {
      //         "Flavor": flavor,
      //         "Crust": crust,
      //         "Size": size,
      //         "Timestamp": new Date(),
      //         "Table_No": 1,
      //       }
        
      //   let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzE1Njg4MTksIm5iZiI6MTYzMTU2ODgxOSwianRpIjoiN2NjZmY4YTctYjc0Ni00MjBlLWI1OWQtMDUyMWM1NjU3OTNjIiwiZXhwIjoxNjMxNTY5NzE5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.oGkQPEzQbK2yH1NXSk0ixS7O_HNXClvPgCiK-0op1e8";
      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      //     body: JSON.stringify(pizzaObject)
      // };
      
      // fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
      //     .then(response => { 
      //       if (response.status === 201)
      //        {
      //       alert('Your order has been registered')
      //     }
      //     })}
      //   }
      
    //   return (
    //     <>


    //       <label for="crust">Crust:</label>
    //       <select name="crust" onChange={onChangeCrust}>
    //         <option value="STUFFED" selected>Stuffed</option>
    //         <option value="CRACKER">Cracker</option>
    //         <option value="THIN">Thin</option>
    //       </select>
    //       <label for="flavor">Flavor:</label>
    //       <select name="flavor" onChange={onChangeFlavor}>
    //         <option value="FAJITA" selected>Fajita</option>
    //         <option value="CHEESE">Cheese</option>
    //         <option value="VEGGIE">Veggie</option>
    //       </select>
    //       <label for="size">Size:</label>
    //       <select name="size" onChange={onChangeSize}>
    //         <option value="SMALL" selected>Small</option>
    //         <option value="MEDIUM">Medium</option>
    //         <option value="LARGE">Large</option>
    //       </select>
    //       <Button onClick={handleClick}>Place Order</Button>
          
    //     </>
      // );


  return (
    
      <>
        <h1>Pizza Ordering App</h1>
        <div className="form">
          <Form>
           
              <Form.Label>Crust:</Form.Label>
                <Form.Select aria-label="Default select example" onSelect={onSelectCrust}>
                    <option>Select Anyone</option>
                    <option value="THIN">Thin</option>
                    <option value="CRACKER">Cracker</option>
                    <option value="STUFFED">Stuffed</option>
                </Form.Select>
                
            
              <Form.Label>Flavor:</Form.Label>
                <Form.Select aria-label="Default select example" onSelect={onSelectFlavor}>
                    <option>Select Anyone</option>
                    <option value="FAJITA">Fajita</option>
                    <option value="CHEESE">Cheese</option>
                    <option value="VEGGIE">Veggie</option>
                </Form.Select>
          
                <Form.Label>Size:</Form.Label>  
                  <Form.Select aria-label="Default select example" onSelect={onSelectSize}>
                    <option>Select Anyone</option>
                    <option value="SMALL">Small</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LARGE">Large</option>
                </Form.Select>
         
            <Button type="submit"  className="bttn" size="lg" onClick={handleClick}>Place Order</Button>
            <Button type="submit" className="bttn"  size="lg" onClick={() => history.push('/sections')}> Go Back </Button>
      

          </Form> 
          </div>

       </>
            );

    } 
     

 export default OrderDetails;



