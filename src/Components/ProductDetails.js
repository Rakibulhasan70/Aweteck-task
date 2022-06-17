import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    console.log(products);
    return (
        <div>
            <h2>id:{id}</h2>
            {/* <p>{products.area}</p> */}
        </div>
    );
};

export default ProductDetails;