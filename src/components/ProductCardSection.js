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
           

            {/* <div className="">
                <div className='range-div-w border'>
                  <div className='r1-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <div className="">
                      <Link to="/piper" className='sub-img'>
                        <img src={require('../img/asset 37.jpeg')} alt="" title='Piper Sudan Grass Seed' />
                      </Link>
                    </div>
                  </div>

                  <div className='range-font'>
                    <Link to="" title='Piper Sudan Grass Seed'>Piper Sudan Grass Seed</Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r2-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 38.jpeg')} alt="" title='Alfalfa Grass Seeds' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Alfalfa Grass Seeds' >Alfalfa Grass Seeds</Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r3-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 39.jpeg')} alt="" title='Sorghum' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Sorghum'> Sorghum </Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r4-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 40.jpeg')} alt="" title='Wheat' />
                    </Link>
                  </div>
                  <div className='range-font '>
                    <Link to="" title='Wheat' >Wheat</Link>
                  </div>
                </div>
              </div>


              <div className="">
                <div className='range-div-w border'>
                  <div className='r5-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 41.jpeg')} alt="" title='Seasame Seeds' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Seasame Seeds' >Seasame Seeds</Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r6-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 42.jpeg')} alt="" title='Yellow Maize' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Yellow Maize' >Yellow Maize </Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r7-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 43.jpeg')} alt="" title='Green Millit' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Green Millit' > Green Millit </Link>
                  </div>
                </div>
              </div>

              <div className="">
                <div className='range-div-w border'>
                  <div className='r8-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <Link to="/pomegranate" className='sub-img'>
                      <img src={require('../img/asset 44.jpeg')} alt="" title='Barley' />
                    </Link>
                  </div>
                  <div className='range-font'>
                    <Link to="" title='Barley' >Barley</Link>
                  </div>
                </div>
              </div>
 */}

{/* <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f1-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/pomegranate" className='sub-img'>
                    <img src={require('../img/asset 14.jpeg')} alt="" className='img-fluid' />
                  </Link>
                </div>
                <div className='featured-font '>
                  <Link to="/pomegranate" title='Fresh Pomegranate'>Fresh Pomegranate</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f2-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/ginger" className='sub-img'>
                    <img src={require('../img/asset 15.jpeg')} alt="" />

                  </Link>
                </div>
                <div className='featured-font'>
                  <Link to="/ginger" title='Fresh Ginger'>Fresh Ginger</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f3-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/onion" className='sub-img'>
                    <img src={require('../img/asset 16.jpeg')} alt="" />
                  </Link>
                </div>
                <div className='featured-font'>
                  <Link to="/onion" title='Fresh Red Onion'>Fresh Red Onion</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f4-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/redchilli" className='sub-img4'>
                    <img src={require('../img/asset 17.jpeg')} alt="" />
                  </Link>
                </div>
                <div className='featured-font'>
                  <Link to="/redchili" title='Red Chilli Powder'>Red Chilli Powder</Link>
                </div>
              </div>
            </div>



            ----------------------------------------

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f5-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/pomegranate" className='sub-img'>
                    <img src={require('../img/asset 18.jpeg')} alt="" />
                  </Link>
                </div>
                <div className='featured-font'>
                  <Link to="/pomegranate" title='Termeric Powder'>Termeric Powdere</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <div>
                <div className='f6-img img-w'>
                  <div className="bg-blur"></div>
                  <Link to="/pomegranate" className='sub-img'>
                    <img src={require('../img/asset 19.png')} alt="" />
                  </Link>
                </div>
                <div className='featured-font'>
                  <Link to="/pomegranate" title='Basmati Rice'>Basmati Rice</Link>
                </div>
              </div>
            </div> */}

        </>
    )
}
