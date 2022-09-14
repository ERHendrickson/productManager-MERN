import React, {useState} from 'react'
import axios from 'axios'

const CreateProduct = () => {

    const [formInfo, setFormInfo] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState([]);

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/new", formInfo)
        .then( (response) => { console.log(response) })
        .catch((err) => {
            const errorResponse = err.response.data.err.erros
            console.log('error catch: ' , errorResponse)
            const errorArr = []
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div className='container'>
            <h1>create product</h1>
            <form className='form-control' onSubmit={submitHandler}>
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
            </form>
        </div>
    )
}

export default CreateProduct