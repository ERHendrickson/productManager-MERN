import React from "react";
import axios from 'axios';

export default props => {
    const { productId, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
        .then(res=>{
            successCallback();

        })
        .catch((err) => console.log("something wrong deleting", err))
    }

    return(
        <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>
    )
}