import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/card";
import { NavLink } from "react-router-dom";
import Product from "../product/product";


const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

function Products() {

    const [products, setProducts] =  useState([])

    useEffect(() => {
        instance.get('/products')
        .then((response) => response.data)
        .then((response) => setProducts(response))
    })

    return (
        <div>
            {
                products.map((prod) => {
                    return (
                    <NavLink to={`/product/${prod.id}`}>
                    <Card 
                        id={prod.id}
                        title={prod.title}
                        price={prod.price}
                        description={prod.description}
                        category={prod.category}
                        image={prod.image}
                        rate={prod.rating.rate}
                        count={prod.rating.count}
                    />
                     </NavLink>
                )
                })
            }
        </div>
    )
}

export default Products;