import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../Header/Header';

const Checkout = () => {
    const [orderdedBook,setOrderedBook]= useContext(UserContext)
    return (
        <div className='container'>
            <h1>Checkout</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price($)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>JavaScript Everywhere {orderdedBook.bookName} </td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>250</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Checkout;