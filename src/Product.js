import React from 'react';

function Product ({image, label, product, price}) {
    return (
        <article>
            <span> {label} </span>
            <img src={image}/>
                <p>
                    {product}
                </p>
                <h4>
                    {price}
                </h4>
        </article>
    );
}

export default Product;