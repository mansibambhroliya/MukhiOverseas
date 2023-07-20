import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Gotoup from './Gotoup';
import Collapse from 'react-bootstrap/Collapse';

export default function Home() {

  const [isActive, setIsActive] = useState(false); // for accordian

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const Slide = [
    {
      img: require('../img/asset 2.jpeg'),
      alt: "First slide",
      p_1: "WELCOME TO",
      p_2: "MUKHI OVERSEAS",
      p_3: "We are leading suppliers of animal fodder seeds"
    },
    {
      img: require('../img/asset 3.jpeg'),
      alt: "Second slide",
      p_1: "MUKHI OVERSEAS",
      p_2: "Spices",
      p_3: "We are leading processor of spices in India"
    },
    {
      img: require('../img/asset 4.jpeg'),
      alt: "Third slide",
      p_1: "MUKHI OVERSEAS",
      p_2: "Fruits",
      p_3: "We are leading supplier of fruits in India"
    },
    {
      img: require('../img/asset 5.jpeg'),
      alt: "Fourth slide",
      p_1: "MUKHI OVERSEAS",
      p_2: "Rice",
      p_3: "We are trader of basmati & non basmati rice in India"
    }
  ]
  const Range_Product = [
    {
      img: require('../img/asset 37.jpeg'),
      link: "/pipersudangrass",
      name: "Piper Sudan Grass Seed"
    },
    {
      img: require('../img/asset 38.jpeg'),
      link: "/alfafagrass",
      name: "Alfalfa Grass Seeds"
    },
    {
      img: require('../img/39.jpeg'),
      link: "/sorghum",
      name: "Sorghum"
    },
    {
      img: require('../img/asset 40.jpeg'),
      link: "/wheat",
      name: "Wheat"
    }, {
      img: require('../img/41.jpeg'),
      link: "/seasemseeds",
      name: "Seasem Seeds"
    },
    {
      img: require('../img/42.jpeg'),
      link: "/yellowmaize",
      name: "Yellow Maize"
    },
    {
      img: require('../img/asset 43.jpeg'),
      link: "/greenmillet",
      name: "Green Millet"
    },
    {
      img: require('../img/asset 44.jpeg'),
      link: "/barley",
      name: "Barley"
    }
  ]


  return (

    <>

      <Navbar />
      <Gotoup />

      {/*---------------------------- Start Banner ----------------------- */}
      <div className='banner'>
        <Carousel activeIndex={index} onSelect={handleSelect}  >

          {
            Slide.map((items) => (
              <Carousel.Item>
                <img className="d-block w-100" src={items.img} alt={items.alt} />

                <Carousel.Caption className='bg'>
                  <div className='cap-text caption-div'>
                    <p> {items.p_1} </p>
                    <p className='h'> {items.p_2} </p>
                    <p> {items.p_3} </p>
                  </div>
                </Carousel.Caption>

              </Carousel.Item>
            ))
          }
        </Carousel>

        <div className='cross'>
          <div className=''></div>
        </div>
      </div>
      {/*---------------------------- End Banner ----------------------- */}

      {/*---------------------------- Start QUALITY SPEAKS FOR US! ----------------------- */}
      <section>
        <div className='spacer-speaks full-pad'>
          <div className='speake-title text-center'>
            <h1>QUALITY SPEAKS FOR US!</h1>
          </div>
          <div className='fonts-speacks'>
            <p className='pb-2'>Mukhi Overseas has earned the trust and confidence of our global customers/buyers by providing best-in-class products, delivering it at the right time, round the clock and across the globe! We are into Export & Import of agricultural produce like Hulled Sesame Seeds, Spices, Rice, Food grains, Fruits & Vegetables and Animal Feed range worldwide. We focus on quality rather than quantity. For us, <b>“Quantity is not the criteria rather Quality is the parameter!”</b></p>

            <p>Mukhi Overseas is a Government of India Recognized Merchant Cum Export House, having diversified business into areas of Agricultural Commodities, Food Grains, Rice, Fruits & Vegetables and Animal Feed. Since 2018, the group has been making progress in leaps and bounds for exporting products and commodities to even the far-reaching corners of the world. Every day, we create sustainable models of adhering to the best practices in the industry. We have always endeavoured to offer the best of the quality products in the International markets. A truly remarkable export track record has earned us several prestigious Customers. Mukhi Overseas offers the best of Agricultural Commodities & Food Products. <br />
              <b className='fw-semibold'><Link to="/about" className='font-cyan text-decoration-none ps-2'>Read more...</Link></b>
            </p>

          </div>
        </div>
      </section>
      {/*---------------------------- End QUALITY SPEAKS FOR US! ----------------------- */}

      {/*---------------------------- Start Product Range ----------------------- */}

      <section className='range-sec full-pad'>
        <div className=''>
          <div>
            <h1 className='font-cyan text-center prod-range'>Product <span className='text-black'>Range</span></h1>
          </div>

          <div className='range-section d-flex justify-content-around'>
            <div className="container1">
              {
                Range_Product.map((product) => (
                  <div className="d-flex justify-content-center">
                    <div className='range-div-w border'>
                      <div className='range-img-w div-hover' style={{ backgroundImage: `url(${product.img})`}} >
                        <div className="bg-blur"></div>
                        <div>
                          <Link to={product.link} className='sub-img'>
                            <img src={product.img} alt="" title={product.name} className=''/>
                          </Link>
                        </div>
                      </div>

                      <div className='range-font'>
                        <Link to="" title={product.name}>{product.name}</Link>
                      </div>
                    </div>
                  </div>
                ))
              }              
            </div>
          </div>

          <div className='mt-4 justify-center'>
            <Link to="/products">
              <input type="button" value='View All Products' className='view-all-btn bg-white font-cyan fw-semibold border py-2 px-4' />
            </Link>
          </div>
        </div>
      </section>

      {/*---------------------------- End Product Range ----------------------- */}


      {/*---------------------------- Start Featured Products ----------------------- */}
      <section className='featured-main'>
        <div className=' container   fruit-div'>
          <div>
            <h1 className='text-center feature-title '>Featured Products</h1>
          </div>

          <div className="row mb-5">

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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



            {/* ---------------------------------------- */}

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-center">
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
            </div>

          </div>

        </div>
      </section>
      {/*---------------------------- End Featured Products ----------------------- */}

      {/*---------------------------- Start Products Name ----------------------- */}
      <section className='container-fluid spacer-p-name full-pad '>

        <div className='border pname-div '>
          <div className='div-2 div:hover'>
            <h5>Products</h5>
          </div>
          <div className='product-text'>
            <ul className='row m-0 p-0'>
              <li><Link to="/indianrices" >Indian Rices</Link><br /></li>
              <li><Link to="/frshfruits" >Fresh Fruits</Link></li>
              <li><Link to="/grains" >Grains</Link><br /></li>
              <li><Link to="/freshvegetables" >Fresh Vegetables</Link></li>
              <li><Link to="/fodderseeds" >Fodder seeds</Link><br /></li>
              <li><Link to="/indianspices" >Indian Spices</Link></li>
            </ul>
          </div>
        </div>

        {/* accordian */}
        <div className="accordion border accord-p">
          <div className="bottom-border align-center"
            onClick={() => setIsActive(!isActive)}
            aria-controls="example-collapse-text"
            aria-expanded={isActive}
          >
            <div><h1>Products</h1></div>
            <div className='arrow-plus'>{isActive ? '-' : '+'}</div>
          </div>
          <Collapse in={isActive}>
            <div className='font-black product-text px-3 py-2'>
              <Link to="/indian rices" >Indian Rices</Link><br />
              <Link to="/freshfruits" >Fresh Fruits</Link><br />
              <Link to="/grains" >Grains</Link><br />
              <Link to="/freshvegetables" >Fresh Vegetables</Link><br />
              <Link to="/fodderseeds" >Fodder seeds</Link><br />
              <Link to="/indianspices" >Indian Spices</Link>
            </div>
          </Collapse>
        </div>

      </section>
      {/*---------------------------- End Products Name ----------------------- */}

      <Footer />

    </>
  )
}
