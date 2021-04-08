import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
//const admin = require('firebase-admin');

const Admin = () => {

const [imgUrl,setImgUrl] = useState(null)

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        const bookData ={
            name:data.name,
            author:data.author,
            price:data.price,
            imgUrl:imgUrl
        };
        const url =`https://radiant-river-00649.herokuapp.com/admin`
      
         fetch(url,{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(bookData)
         })
         .then(res=>console.log('server responded'))
        };

    const handleImgUp = event =>{
        console.log(event.target.files[0])
        const imgData = new FormData()
        imgData.set('key','2a62f730637ebe67625265ead6cf9b8c')
        imgData.append('image',event.target.files[0])
        const axios = require('axios').default;
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            setImgUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div >
            <div className="row mt-5 ">
                <div className="col-md-4 p-5 bg-warning">
                    <h5>Admin Control</h5>
                    <p><Button variant='transparent'>Manage Books</Button></p>
                    <p><Button variant='transparent'>Add Book</Button></p>
                    <p><Button variant='transparent'>Edit Book</Button></p>

                </div>


                <div className="col-md-8 p-5 bg-success">
                    <div className="container bg-light rounded p-5">
                        <h1>Add book</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Book Name</label> <br/>
                            <input name="name"  ref={register} /> <br/> <br/>
                            <label htmlFor="author">Author Name</label> <br/>
                            <input name="author"  ref={register} /> <br/> <br/>
                            <label htmlFor="price">Price</label> <br/>
                            <input name="price"  ref={register} /> <br/> <br/>
                            <label htmlFor="exampleRequired">Book Cover</label> <br/>
                            <input  type="file"  name="exampleRequired" onChange={handleImgUp} /><br/> <br/>
                            <input className='btn btn-success' type="submit" />
                        </form>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Admin;