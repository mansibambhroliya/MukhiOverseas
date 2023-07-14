import React from 'react'
// import './ProductCardSection.css';

export default function ProductCardSection() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10',
            image: require('../img/asset 37.jpeg'),
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$15',
            image: require('../img/asset 37.jpeg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 37.jpeg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 37.jpeg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 37.jpeg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 37.jpeg'),
        },
    ];
    return (
        <>
            <section>
                <div className="product-card-section container">
                    {
                        products.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
