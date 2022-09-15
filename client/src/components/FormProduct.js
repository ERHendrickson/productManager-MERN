import React,{useState} from 'react'
import axios from 'axios'

function FormProduct(props) {
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
        .then( (response) => { 
            console.log(response)
            //choice 1 maintain list
            // props.updateAllProducts(response.data.results) 
            props.updateAllProducts(formInfo)
            //choice 2 querry database again and make changes in dependency array
            setFormInfo({        
                title: '',
                price: '',
                description: ''
            })
        })
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
        <div>
            <form className='form-control' onSubmit={submitHandler}>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Title:</label>
                    <input type='text' className='' name='title' onChange={onChangeHandler} value={formInfo.title}></input>
                </div>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Price:</label>
                    <input type='number' step='.01' className='' name='price' onChange={onChangeHandler} value={formInfo.price}></input>
                </div>
                <div className='mb-3 d-flex form-control'>
                    <label className=''>Description:</label>
                    <textarea className='' type='' name='description' onChange={onChangeHandler} value={formInfo.description}></textarea>
                </div>
                <div>
                    <input type='submit' value='submit'/>
                </div>
            </form>
        </div>
        
    )
}

export default FormProduct