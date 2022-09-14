import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllProducts = () => {

    const [AllProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.results)
            setAllProducts(response.data.results)
        })
        .catch((err) => console.log('err loading all products: ', err))
    }, [])

    return (
        <div className='container'>
            <h1>All Products</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title:</th>
                        <th>Price:</th>
                        <th>Description:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllProducts.map((product, i) => {
                            return(
                                <tr key={i}>
                                    <td><Link to={`/show/${product._id}`}>{product.title}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts