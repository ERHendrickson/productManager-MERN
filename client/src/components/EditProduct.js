import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router'


const EditProduct = () => {
    const[deleteToggle, setDeleteToggle] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
        title: '',
        price: '',
        description: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response)
            setFormInfo(response.data.results)
        })
        .catch(err => console.log("edit page get request error: ", err))
    }, [id])

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
        .then((response) => {
            console.log("edit put request: ", response)
            navigate('/')
        })
        .catch((err) => console.log('error updating product', err))
    }

    const deleteProduct = (e, id) => {
        console.log('Deleting Product', id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response) => {
            console.log('delete was successful', response)
            setDeleteToggle(!setDeleteToggle)
        })
        .catch((err) => console.log('something wrong deleting', err))
    }

    return (
        <div className='container'>
            <h1>Edit Product</h1>
            <form className='form-control' onSubmit={submitHandler}>
                <div className='mb-3 d-flex'>
                    <label>Title:</label>
                    <input type='text' name='title' value={formInfo.title} onChange={onChangeHandler}/>
                </div>
                <div className='mb-3 d-flex'>
                    <label>Price:</label>
                    <input type='number' name='price' value={formInfo.price} onChange={onChangeHandler}/>
                </div>
                <div className='mb-3 d-flex'>
                    <label>Description:</label>
                    <textarea type='text' name='description' defaultValue={formInfo.description} onChange={onChangeHandler}></textarea>
                </div>
                <div className='mb-4 d-flex'>
                    <button type='submit' className='btn btn-success'>Edit</button>
                    <Link to='/'><button className='btn btn-danger' onClick={(e) => {deleteProduct(e, formInfo._id)}}>Delete</button></Link>
                    <Link to='/'><button className='btn btn-warning'>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default EditProduct