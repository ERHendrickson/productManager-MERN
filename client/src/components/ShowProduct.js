import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom';

const ShowProduct = () => {

    const {id} = useParams();

    const [productInfo, setProductInfo] = useState({
        title: '', 
        price: '',
        description: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response)
            setProductInfo(response.data.results)
        })
        .catch((err) => console.log("Show page get request error: ", err))
    })

    return (
        <div className='container'>
            <h1>Product</h1>
            <form>
                <div>
                    <h3>Title: </h3>
                    <p>{productInfo.title}</p>
                </div>
                <div>
                    <h3>Price: </h3>
                    <p>$ {productInfo.price}</p>
                </div>
                <div>
                    <h3>Description: </h3>
                    <p>{productInfo.description}</p>
                </div>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default ShowProduct