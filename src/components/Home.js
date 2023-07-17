import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Carouse from "react-multi-carousel";
import Gotoup from './Gotoup';
import Collapse from 'react-bootstrap/Collapse';

export default function Home() {

  const [isActive, setIsActive] = useState(false); // for accordian

  // ---------------------- for product card Slider
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };


  return (

    <>

      <Navbar />
      <Gotoup />
      {/*---------------------------- Start Banner ----------------------- */}

      <div className='banner'>
        <Carousel activeIndex={index} onSelect={handleSelect}  >

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/asset 2.jpeg')}
              alt="First slide"
            />
            <Carousel.Caption className='bg'>
              <div className='cap-text'>
                <p>WELCOME TO </p>
                <p className='h'>MUKHI OVERSEAS</p>
                <p>We are leading suppliers of animal fodder seeds</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/asset 3.jpeg')}
              alt="Second slide"
            />

            <Carousel.Caption className='bg'>
              <div className='cap-text'>
                <p>MUKHI OVERSEAS</p>
                <p className='h'> Spices</p>
                <p>We are leading processor of spices in India</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/asset 4.jpeg')}
              alt="Third slide"
            />

            <Carousel.Caption className='bg'>
              <div className='cap-text'>
                <p>MUKHI OVERSEAS</p>
                <p className='h'>Fruits</p>
                <p>We are leading supplier of fruits in India</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../img/asset 5.jpeg')}
              alt="Third slide"
            />

            <Carousel.Caption className='bg'>
              <div className='cap-text'>
                <p>MUKHI OVERSEAS</p>
                <p className='h'>Rice</p>
                <p>We are trader of basmati & non basmati rice in India</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        <div className='cross'>
          <div className=''></div>
        </div>
      </div>

      {/*  One : for cut  */}
      {/*---------------------------- End Banner ----------------------- */}

      {/*---------------------------- Start QUALITY SPEAKS FOR US! ----------------------- */}
      <section>
        <div className='spacer-speaks full-pad'>
          <div className=''>
            <h1 className='text-center '>QUALITY SPEAKS FOR US!</h1>
          </div>
          <div className='fonts-speacks'>
            <p className='pb-2'>Mukhi Overseas has earned the trust and confidence of our global customers/buyers by providing best-in-class products, delivering it at the right time, round the clock and across the globe! We are into Export & Import of agricultural produce like Hulled Sesame Seeds, Spices, Rice, Food grains, Fruits & Vegetables and Animal Feed range worldwide. We focus on quality rather than quantity. For us, <b>“Quantity is not the criteria rather Quality is the parameter!”</b></p>

            <p>Mukhi Overseas is a Government of India Recognized Merchant Cum Export House, having diversified business into areas of Agricultural Commodities, Food Grains, Rice, Fruits & Vegetables and Animal Feed. Since 2018, the group has been making progress in leaps and bounds for exporting products and commodities to even the far-reaching corners of the world. Every day, we create sustainable models of adhering to the best practices in the industry. We have always endeavoured to offer the best of the quality products in the International markets. A truly remarkable export track record has earned us several prestigious Customers. Mukhi Overseas offers the best of Agricultural Commodities & Food Products. <br />
              <b fw-semibold><Link to="/about" className='font-cyan text-decoration-none ps-2'>Read more...</Link></b>
            </p>

          </div>
        </div>
      </section>
      {/*---------------------------- End QUALITY SPEAKS FOR US! ----------------------- */}

      {/*---------------------------- Start Product Range ----------------------- */}
      <section>

        
      </section>

      <section className='range-sec'>
        <div className='container'>
          <div>
            <h1 className='font-cyan text-center prod-range'>Product <span className='text-black'>Range</span></h1>
          </div>

          <div className='range-section d-flex justify-content-around container'>
            <div className="container1 container">

              <div className="justify-center end-justify">
                <div className='range-div-w border'>
                  <div className='r1-img range-img-w div-hover'>
                    <div className="bg-blur"></div>
                    <div className="">
                      <Link to="/pomegranate" className='sub-img'>
                        <img src={require('../img/asset 37.jpeg')} alt="" title='Piper Sudan Grass Seed' />
                      </Link>
                    </div>
                  </div>

                  <div className='range-font'>
                    <Link to="" title='Piper Sudan Grass Seed'>Piper Sudan Grass Seed</Link>
                  </div>
                </div>
              </div>

              <div className="justify-center start-justify">
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

              <div className="justify-center end-justify">
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

              <div className="justify-center start-justify">
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


              <div className="justify-center end-justify">
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

              <div className="justify-center start-justify">
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

              <div className="justify-center end-justify">
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

              <div className="justify-center start-justify">
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

            </div>
          </div>

          <div className='mt-5 justify-center'>
            <Link to="/products">
              <input type="button" value='View All Products' className='view-all-btn bg-white font-cyan fw-semibold border py-2 px-4' />
            </Link>
          </div>
        </div>
      </section>


      {/*---------------------------- End Product Range ----------------------- */}


      {/*---------------------------- Start Featured Products ----------------------- */}
      <section className='featured-main'>
        <div className=' container fruit-div'>
          <div>
            <h1 className='text-center feature-title'>Featured Products</h1>
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-end justify-center">
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

            <div className="col-lg-3 col-md-4 col-sm-6 justify-start justify-center">
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
          <div className='div-2'>
            <h5 className='fw-semibold'>Products</h5>
          </div>
          <div className="row product-text p-3">
            <div className="col-4 ">
              <Link to="/indian rices" >Indian Rices</Link><br />
              <Link to="/indian rices" >Fresh Fruits</Link>
            </div>
            <div className="col-4">
              <Link to="/indian rices" >Grains</Link><br />
              <Link to="/indian rices" >Fresh Vegetables</Link>
            </div>
            <div className="col-4">
              <Link to="/indian rices" >Fodder seeds</Link><br />
              <Link to="/indian rices" >Indian Spices</Link>
            </div>
          </div>
        </div>

        {/* accordian */}
        <div className="accordion border accord-p">
          <div className="bottom-border align-center"
            onClick={() => setIsActive(!isActive)}
            aria-controls="example-collapse-text"
            aria-expanded={isActive}
          >
            <div className='product-name-title'><h1 className='fw-semibold'>Products</h1></div>
            <div className='arrow-plus'>{isActive ? '-' : '+'}</div>
          </div>
          <Collapse in={isActive}>
            <div className='font-black product-text px-3 py-2'>
              <Link to="/indian rices" >Indian Rices</Link><br />
              <Link to="/indian rices" >Fresh Fruits</Link><br />
              <Link to="/indian rices" >Grains</Link><br />
              <Link to="/indian rices" >Fresh Vegetables</Link><br />
              <Link to="/indian rices" >Fodder seeds</Link><br />
              <Link to="/indian rices" >Indian Spices</Link>
            </div>
          </Collapse>
        </div>

      </section>


      {/*---------------------------- End Products Name ----------------------- */}

      {/* <section className='container m-5 container-fluid'>
        <Carouse responsive={responsive} className='sli' >
          <div className="border pad-div">
            <div className='img-w d-flex align-items-center justify-content-center'>
              <Link to="/pomegranate" className='sub-img' >
                <img src={require('../img/asset 14.jpeg')} alt="" />
              </Link>
            </div>
            <div className='text-center py-3'>
              <h6>Seaseme Seeds</h6>
              <input type="button" value="Get best Quote" />
            </div>
          </div>


          <div className="border pad-div">
            <div className='img-w d-flex align-items-center justify-content-center'>
              <Link to="/pomegranate" className='sub-img' >
                <img src={require('../img/asset 19.png')} alt="" />
              </Link>
            </div>
            <div className='text-center py-3'>
              <h6>Seaseme Seeds</h6>
              <input type="button" value="Get best Quote" />
            </div>
          </div>

          <div className="border pad-div">
            <div className='img-w d-flex align-items-center justify-content-center'>
              <Link to="/pomegranate" className='sub-img' >
                <img src={require('../img/asset 16.jpeg')} alt="" />
              </Link>
            </div>
            <div className='text-center py-3'>
              <h6>Seaseme Seeds</h6>
              <input type="button" value="Get best Quote" />
            </div>
          </div>

          <div className="border pad-div">
            <div className='img-w d-flex align-items-center justify-content-center'>
              <Link to="/pomegranate" className='sub-img' >
                <img src={require('../img/asset 17.jpeg')} alt="" />
              </Link>
            </div>
            <div className='text-center py-3'>
              <h6>Seaseme Seeds</h6>
              <input type="button" value="Get best Quote" />
            </div>
          </div>

          <div className="border pad-div">
            <div className='img-w d-flex align-items-center justify-content-center'>
              <Link to="/pomegranate" className='sub-img' >
                <img src={require('../img/asset 9.jpeg')} alt="" />
              </Link>
            </div>
            <div className='text-center py-3'>
              <h6>Seaseme Seeds</h6>
              <input type="button" value="Get best Quote" />
            </div>
          </div>
          
        </Carouse>
      </section> */}

      <Footer />

    </>
  )
}
