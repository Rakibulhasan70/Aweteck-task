import React from 'react';

const Details = (props) => {
    const { area } = props.product
    return (
        <div>
            <h2>{area}</h2>
        </div>
    );
};

export default Details;