import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AllProducts from './AllProducts'
import FormProduct from './FormProduct'

const CreateProduct = () => {

    const [refreshToggle, setRefreshToggle] = useState(false)
    const [allProduct, setAllProduct] = useState([])

    const updateAllProducts = (newProduct) => {
        console.log("looking for data structure", newProduct)
        setAllProduct([...allProduct, newProduct])
    }
    // const updateDeleteToggle = (deleteToggle) => {
    //     setDeleteToggle(!deleteToggle)
    // }

    //function to pass as prop to deletebutton to remove product from list
    const removeFromDom = productId => {
        setAllProduct(allProduct.filter(product => product._id != productId))
    }
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.results)
            setAllProduct(response.data.results)
        })
        .catch((err) => console.log('err loading all products: ', err))
        //only useEffect have dependency array
    }, [refreshToggle])

    // const [formInfo, setFormInfo] = useState({
    //     title: '',
    //     price: '',
    //     description: ''
    // })

    // const [errors, setErrors] = useState([]);

    // const onChangeHandler = (e) => {
    //     setFormInfo({
    //         ...formInfo,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:8000/api/product/new", formInfo)
    //     .then( (response) => { 
    //         console.log(response)
    //         updateAllProducts(response.data.results)
    //     })
    //     .catch((err) => {
    //         const errorResponse = err.response.data.err.erros
    //         console.log('error catch: ' , errorResponse)
    //         const errorArr = []
    //         for(const key of Object.keys(errorResponse)){
    //             errorArr.push(errorResponse[key].message)
    //         }
    //         setErrors(errorArr);
    //     })
    // }

    return (
        <div className='container'>
            <h1>Product Manager</h1>
            {/* <form className='form-control' onSubmit={submitHandler}>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Title:</label>
                    <input type='text' value ={formInfo.title}className='' name='title' onChange={onChangeHandler}></input>
                </div>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Price:</label>
                    <input type='number' value={formInfo.price} step='.01' className='' name='price' onChange={onChangeHandler}></input>
                </div>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Description:</label>
                    <textarea className='' type=''  value={formInfo.description} name='description' onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <input type='submit' value='submit'/>
                </div>
            </form> */}
            <FormProduct updateAllProducts={updateAllProducts}></FormProduct>
            <div className='border border-dark border-3'></div>
            <AllProducts allProduct={allProduct} removeFromDom={removeFromDom}></AllProducts>
        </div>
    )
}

export default CreateProduct