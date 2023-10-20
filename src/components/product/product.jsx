import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

function Product() {

    const {id} = useParams()

    const [prodDesc, setProdDesc] = useState([]);

    useEffect(() => {
        instance.get(`/products/${id}`)
        .then(response => response.data)
        .then(response => setProdDesc(response))
    }, [])

    return (
        <div>
            
                
                        <div>
                        <li>{prodDesc.title}</li>
                        <li>{prodDesc.price}</li>
                        <li>{prodDesc.description}</li>
                        </div>

                
        </div>
    )
}

export default Product;