import { useEffect, useState } from 'react';

const UseProduct = cca2 => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all/${cca2}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])
    return [products, setProducts]
};

export default UseProduct;