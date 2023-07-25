import React from 'react'
import Top_Line from './Top_Line'
import { Link } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineUser, AiOutlineMail, AiOutlineRight } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import MIniFooter from './MIniFooter';
import Gotoup from './Gotoup';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Navbar2 from './Navbar2';

export default function AboutUs() {

  const [isActive, setIsActive] = useState(false); // for accordian
  const [isLink, setIsLink] = useState(false); // for accordian

  const products = [
    {
      link: "/indianrice",
      name: "Indian Rice",
      sub_products: [
        {
          sub_link: "/basmati",
          sub_name: "Basmati Rice"
        },
        {
          sub_link: "/nonbasmati",
          sub_name: "Non Basmati Rice"
        }
      ]
    },
    {
      link: "/grains",
      name: "Grains",
      sub_products: [
        {
          sub_link: "/greenmellet",
          sub_name: "Green Mellet"
        },
        {
          sub_link: "/yellomaize",
          sub_name: "Yellow Maize"
        },
        {
          sub_link: "/barley",
          sub_name: "Barley"
        },
        {
          sub_link: "/sorghum",
          sub_name: "Sourghum"
        }
      ]
    },
    {
      link: "/fodderseeds",
      name: "Fodder Seeds",
      sub_products: [
        {
          sub_link: "/alfalfagrassseeds",
          sub_name: "Alfalfa Grass Seeds"
        },
        {
          sub_link: "/pipersudangrassseeds",
          sub_name: "Piper Sudan Grass Seeds"
        }
      ]
    },
    {
      link: "/freshfruits",
      name: "Fresh Fruits",
      sub_products: [
        {
          sub_link: "/freshpomegrants",
          sub_name: "Fresh Pomegrants"
        }
      ]
    },
    {
      link: "/freshvegetable",
      name: "Fresh Vegetables",
      sub_products: [
        {
          sub_link: "/freshginger",
          sub_name: "Fresh Ginger"
        },
        {
          sub_link: "/freshredonion",
          sub_name: "Fresh Red Onion"
        }
      ]
    },
    {
      link: "/indianspices",
      name: "Indian Spices",
      sub_products: [
        {
          sub_link: "/ajwainseeds",
          sub_name: "Ajwain Seeds"
        },
        {
          sub_link: "/aselioseeds",
          sub_name: "Aselio Seeds"
        },
        {
          sub_link: "/corianderseeds",
          sub_name: "Coriander Seeds"
        },
        {
          sub_link: "/cuminseeds",
          sub_name: "Cumin Seeds"
        },
        {
          sub_link: "/fennelseeds",
          sub_name: "Fennel seeds"
        },
        {
          sub_link: "/fenugreekseeds",
          sub_name: "Fenugreek Seeds"
        },
        {
          sub_link: "/bayleaves",
          sub_name: "Bay Leaves"
        },
        {
          sub_link: "/sennaleaves",
          sub_name: "Senna Leaves"
        },
        {
          sub_link: "/redchillipowder",
          sub_name: "Red Chilli Powder"
        },
        {
          sub_link: "/turmericpowder",
          sub_name: "Turmeric Powder"
        }
      ]
    }

  ]

  return (
    <>
      <Top_Line />
      <Navbar2 />
      <Gotoup />

      {/* --------------------------- Start About Name bar ------------------------------ */}
      <section className='theme-bg'>
        <div className='about-sec full-pad '>
          <div className="row row-4 about-space font-white container-fluid">

            <div className="col1">
              <h2 className='m-0'>About Us</h2>
            </div>

            <div className="col2 mini-name">
              <span><Link to="/" className='text-decoration-none font-white'>Home</Link></span>
              <span className='mx-1'><BiChevronRight></BiChevronRight></span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- End About Name bar ------------------------------ */}

      {/* --------------------------- Start Description About us ------------------------------ */}
      <section>
        <div className='disc-about-sec  full-pad container-fluid' id='main-about-dis'>
          <div className="row row-4">
            <div className="col1 a1-font ">
              <div>
                <p>Mukhi Overseas has earned the trust and confidence of our global customers/buyers by providing best-in-class products, delivering it at the right time, round the clock and across the globe! We are into Export & Import of agricultural produce like Hulled Sesame Seeds, Spices, Rice, Food grains, Fruits & Vegetables and Animal Feed range worldwide. We focus on quality rather than quantity. For us, “Quantity is not the criteria rather Quality is the parameter!”</p>
                <p>Mukhi Overseas is a Government of India Recognized Merchant Cum Export House, having diversified business into areas of Agricultural Commodities, Food Grains, Rice, Fruits & Vegetables and Animal Feed. Since 2018, the group has been making progress in leaps and bounds for exporting products and commodities to even the far-reaching corners of the world. Every day, we create sustainable models of adhering to the best practices in the industry. We have always endeavoured to offer the best of the quality products in the International markets. A truly remarkable export track record has earned us several prestigious Customers. Mukhi Overseas offers the best of Agricultural Commodities & Food Products.
                </p>
                <p>Mukhi Overseas, is a supplier of food grain and animal feed grain products for customers in the Middle East, African and European Countries. Our multinational trading company is registered in Rajasthan, India. We are responsible to supply agriculture products for our customers based on their demands. Through extensive research and cooperation with a variety of farmers and producers of grain and vegetable products in each of the mentioned categories. We have selected the most vetted sources in each of the mentioned categories in each given field and have evaluated their terms and conditions and deemed them as efficient and in harmony with international & domestic business practices and standards.</p>
                <p>Day after day we are in closed contact with our customers in over 50 Countries. We realize that every customer is unique. By really taking a good look at their businesses and working together with them, we understand exactly what matters to them and to their sector. Besides we have a wide orientation in the complete food and feed chain. It is this knowledge and experience that we translate into tailored advice, business services and products which fit our customers’ needs optimally. Whatever nutritional solution they need, no matter how big their business is and no matter where they are active. In this regard, Mukhi Overseas is proud to become your strategic partner, ready and able to source grain products through evaluated sources based on its customers requirements.</p>

                <b>How Mukhi Overseas Can Assist You?</b>
                <p>We are ready and able to offer you the best possible grains price based on market price, but not fictitious price! Your suggestion to new customers before contacting us is that to update themselves with the market price, otherwise we do not response to inquiries which are not based on the real market price.</p>

                <b>Company Strategy</b>
                <ul className='ct-margin'>
                  <li>
                    <b>Purpose : </b>
                    <span>To be a leader in the food and animal feed grain products supplying by providing enhanced services, relationship and profitability.</span>
                  </li>
                  <li>
                    <b>Vision : </b>
                    <span>To provide quality products and services that exceeds the expectations of our valued customers.</span>
                  </li>
                  <li>
                    <b>Mission : </b>
                    <span>To build long ter relationship with our customers and business partners and providing stability and exceptional customer services from initial to finalize of transactions.</span>
                  </li>
                  <li>
                    <b>Core Values : </b>
                    <span>To treat our customers with respect, dignity and faith. To grow through our customers advice, and suggestions. To ingrate honesty, integrity and business ethics into all aspects of our business functions.</span>
                  </li>
                  <li>
                    <b>Goals : </b>
                    <span>To further develop our sourcing capabilities for key products in the agriculture industry through vetted sources and develop our relationship with our customers and present them with future opportunities. To build good reputation in the field of grain products market; In conclusion, become a key player in the industry.</span>
                  </li>
                </ul>

                <div>
                  <table className='w-100 '>
                    <tr>
                      <th>Name of Owner</th>
                      <td>Mr. M. D. Sharma</td>
                    </tr>
                    <tr>
                      <th>Year of Establishment</th>
                      <td>2011</td>
                    </tr>
                    <tr>
                      <th >Nature of Business	</th>
                      <td>Manufacturer, Exporter & Supplier</td>
                    </tr>
                    <tr>
                      <th>Number of Employees</th>
                      <td>30</td>
                    </tr>
                    <tr>
                      <th>Market Covered</th>
                      <td>Worldwide</td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>

            <div className="col2 px-1 a2-font ">

              <div className='border mb-3'>
                <div className='prod-div align-center'>
                  <h1 className='font-darkcyan'><Link to="/products">Products</Link></h1>
                </div>

                <div className='link-col'>
                  {
                    products.map((product) => (
                      <ul className='ul-style'>
                        <li><Link to={product.link}>{product.name}</Link>
                          {
                            product.sub_products.map((items) => (
                              <ul>
                                <li className='d-flex'>
                                  <b className='me-3px'><BiChevronRight></BiChevronRight></b>
                                  <p className='m-0'><Link to={items.sub_link}> {items.sub_name} </Link></p>
                                </li>
                              </ul>
                            ))
                          }
                        </li>
                      </ul>
                    ))
                  }
                </div>
              </div>

              <div className='border con-div'>
                <div className='prod-div'>
                  <h1 className='font-darkcyan'>Contact Us</h1>
                </div>

                <div className='text-left'>
                  <ul className='mb-2'>
                    <li className='font-darkcyan fw-semibold'>Mukhi Overseas</li>
                    <li>B9 SHIROMANI COMPLEX OPP BARODA EXPRESS HIGHWAY CTM, Ghodasar, Ahmedabad, Gujarat - 380026, India </li>
                    <li><b>Mobile:</b> <span>+91-8866606069, +91-9328585464</span></li>
                    <li><b>Call Us :</b> <span className='font-darkcyan fw-bold fs-6'>08048784470</span></li>
                    <li className='font-black'>
                      <b>Email : </b>
                      <Link href="#" className='mail-wrap'>mukhioverseas@gmail.com </Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section >

      {/* --------------------------- End Description About us ------------------------------ */}

      <section className='disc-about-sec' id='about-section'>
        <div>
          <div className="accordion border mb-3 p-0">
            <div className="bottom-border align-center"
              onClick={() => setIsActive(!isActive)}
              aria-controls="example-collapse-text"
              aria-expanded={isActive}
            >
              <div className='product-name-title p1-about font-darkcyan'><h1 className='fw-semibold'><Link to="/products">Products</Link></h1></div>
              <div className='arrow-plus'>{isActive ? '-' : '+'}</div>
            </div>
            <Collapse in={isActive}>
              <div className='example-collapse-text font-black link-col px-3 py-2'>
                <div className='link-col'>
                  {
                    products.map((product) => (
                      <ul className='ul-style'>
                        <li><Link to={product.link}>{product.name}</Link>
                          {
                            product.sub_products.map((items) => (
                              <ul>
                                <li className='d-flex'>
                                  <b className='me-3px'><BiChevronRight></BiChevronRight></b>
                                  <p className='m-0'><Link to={items.sub_link}> {items.sub_name} </Link></p>
                                </li>
                              </ul>
                            ))
                          }
                        </li>
                      </ul>
                    ))
                  }
                </div>
              </div>
            </Collapse>
          </div>

          <div className="accordion border">
            <div className="bottom-border align-center"
              onClick={() => setIsLink(!isLink)}
              aria-controls="example-collapse-text"
              aria-expanded={isLink}
            >
              <div className='product-name-title'><h1 className='fw-semibold'>Contact Us</h1></div>
              <div className='arrow-plus'>{isLink ? '-' : '+'}</div>
            </div>
            <Collapse in={isLink}>
              <div className='example-collapse-text con-div px-3 py-2'>
                <ul>
                  <li>Mukhi Overseas</li>
                  <li>B9 SHIROMANI COMPLEX OPP BARODA EXPRESS HIGHWAY CTM, Ghodasar, Ahmedabad, Gujarat - 380026, India </li>
                  <li><b>Mobile:</b> <span>+91-8866606069, +91-9328585464</span></li>
                  <li><b>Call Us :</b> <span className='font-darkcyan fw-bold fs-6'>08048784470</span></li>
                  <li className='font-black'>
                    <b>Email: </b>
                    <Link href="#" className='mail-wrap'>mukhioverseas@gmail.com </Link>
                  </li>
                </ul>

              </div>
            </Collapse>
          </div>

        </div>
      </section >

      <MIniFooter />
    </>
  )
}
