import React from 'react'
// import './ProductCardSection.css';

export default function ProductCardSection() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: '$10',
            image: require('../img/asset 6.jpeg'),
        },
        {
            id: 2,
            name: 'Product 2',
            price: '$15',
            image: require('../img/asset 7.jpeg'),
        },
        {
            id: 3,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 8.jpeg'),
        },
        {
            id: 4,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 9.jpeg'),
        },
        {
            id: 5,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 10.jpeg'),
        },
        {
            id: 6,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 11.jpeg'),
        },
        {
            id: 7,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 12.jpeg'),
        },
        {
            id: 8,
            name: 'Product 3',
            price: '$20',
            image: require('../img/asset 13.jpeg'),
        }
    ];
    return (
        <>

            <section>
                <div className="container">
                    <div>
                        <h1 className='font-cyan text-center'>Product <span className='text-black'>Range</span></h1>
                    </div>
                    <div className="border product-card-section">
                        {
                            products.map((product) => (

                                <div className="product-card" key={product.id} style={{ backgroundImage: `url(${product.image})` }}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section >
        </>
    )
}
