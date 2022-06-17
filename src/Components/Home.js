import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h2 className='my-3'>Rest Country</h2>
            <div className='product container'>
                {
                    products.map(product => <Product
                        key={product.cca2}
                        product={product}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Home;