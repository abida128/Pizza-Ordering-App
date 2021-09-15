import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'

const OrderList = () => {

    const history = useHistory();
    return (
        <div>
            <h1>Pizza Ordering App</h1>

            <h2>All Orders List</h2>
            <Button type="submit" className="bttn"  size="lg" onClick={() => history.push('/home')}> Go Back </Button>

        </div>
    )
}

export default OrderList
