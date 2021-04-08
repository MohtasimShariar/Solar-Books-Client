import React, { useEffect, useState } from 'react';

import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books') //https://protected-eyrie-35744.herokuapp.com/books
            .then(res => res.json())
            .then(data => setBooks(data))
    })
    return (
        <div className="row p-5">
            {
                books.map(books => <Books books={books}></Books>)
            }
        </div>
    );
};

export default Home;