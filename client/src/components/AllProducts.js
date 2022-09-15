import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'


const AllProducts = (props) => {
    // const  = useState(false)
    // const [] = useState([])
    // const [products, setProducts] = useState([]);

    let {allProduct, removeFromDom} = props

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products')
    //     .then((response) => {
    //         console.log(response.data.results)
    //         setProducts(response.data.results)
    //     })
    //     .catch((err) => console.log('err loading all products: ', err))
    // }, [])
    

    // const deleteProduct = (e, id) => {
    //     console.log('Deleting Product', id)
    //     axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    //     .then((response) => {
    //         console.log("deleting was successful", response)
    //         updateDeleteToggle(!deleteToggle)
    //     })
    //     .catch((err) => console.log("something wrong deleting", err))
    // }

    return (
        <div className='container'>
            <h1>All Products</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title:</th>
                        <th>Price:</th>
                        <th>Description:</th>
                        <th>Action:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProduct.map((product, i) => {
                            return(
                                <tr key={i}>
                                    <td><Link to={`/show/${product._id}`}>{product.title}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/edit/${product._id}`} className="btn btn-warning">Edit</Link> | 
                                        {/* <button className='btn btn-danger' onClick={(e) => {deleteProduct(e, product._id)}}>Delete</button> */}
                                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}></DeleteButton>
                                        </td>
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