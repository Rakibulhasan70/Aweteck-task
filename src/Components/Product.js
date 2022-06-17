import React from 'react';
import Card from 'react-bootstrap/Card';
import './Product.css'

const Product = (props) => {
    const { flags, name, population, capital } = props.product
    return (
        <div className='container'>
            <div className="">
                <div className='product-details'>
                    <Card className='card'>
                        <Card.Img variant="top" src={flags.png} style={{ height: '200px' }} />
                        <Card.Body>
                            <h4>Name: {name.common}</h4>
                            <p>Population: {population}</p>
                            <p>Capital: {capital}</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Product;