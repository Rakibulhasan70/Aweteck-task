import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const ProductDetails = () => {
    const { id } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/capital/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [id, products])
    console.log(products);
    return (
        <div className='container my-5 ' >
            <div>
                <div className=''>
                    <Card className='card'>
                        <Card.Img variant="top" src={products[0]?.flags?.png} style={{ height: '200px' }} />
                        <Card.Body>
                            <h4>Name: {products[0]?.name?.common}</h4>
                            <p>Area: {products[0]?.area}</p>
                            <p>Population: {products[0]?.population}</p>
                            <p>Capital: {products[0]?.capital}</p>
                            <p>region: {products[0]?.region}</p>
                            <p>languages: {products[0]?.languages.eng}</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;