import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { flags, name, population, capital, ccn3 } = props.product

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/details/${ccn3}`)
    }
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
                            <button className='btn btn-primary' onClick={() => handleNavigate(ccn3)}>Details</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Product;