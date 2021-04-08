import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../Header/Header';

const Books = (props) => {
    const { name, author, price, imgUrl } = props.books;
    const [orderdedBook,setOrderedBook]= useContext(UserContext)
    const handleCheckout=(event)=>{
        const bookDetails = {bookName:event.name, bookPrice: price}
        setOrderedBook(bookDetails)
    }
    return (
        <div className="col-md-3 col-12 mt-2 mx-md-4 mx-2">
            {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {author} <br/> <br/>
                        <h4>$ {price}</h4>
                    </Card.Text>
                    <Link className='float-right' to={'/checkout'}>
                        <Button onclick={handleCheckout} variant="success" >Buy now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;