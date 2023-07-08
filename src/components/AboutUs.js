import React from 'react'
import Top_Line from './Top_Line'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import MIniFooter from './MIniFooter';
import Gotoup from './Gotoup';

export default function AboutUs() {
  return (
    <>
      <Top_Line />
      <Navbar />
      <Gotoup />

      {/* --------------------------- Start About Name bar ------------------------------ */}
      <section>
        <div className='about-sec theme-bg full-pad'>
          <div className="row about-space container-fluid">
            <div className="col-md-6 col-sm-12 d-flex align-items-md-center">
              <h2 className='fs-4 text-white'>About Us</h2>
            </div>

            <div className="col-md-6 col-sm-12  d-flex justify-content-md-end align-items-md-center mini-name fw-bold text-white ">
              <span><Link to="/" className='text-decoration-none text-white'>Home</Link></span>
              <span className='mx-1 '><BiChevronRight></BiChevronRight></span>
              <span>About Us</span>
            </div>

          </div>
        </div>
      </section>
      {/* --------------------------- End About Name bar ------------------------------ */}

      {/* --------------------------- Start Description About us ------------------------------ */}
      <section>
        <div className='disc-about-sec full-pad my-3 container-fluid'>
          <div className="row">
            <div className="col-md-9 col-sm-12 a1-font">
              <div className='p-2 pb-0'>
                <p>Mukhi Overseas has earned the trust and confidence of our global customers/buyers by providing best-in-class products, delivering it at the right time, round the clock and across the globe! We are into Export & Import of agricultural produce like Hulled Sesame Seeds, Spices, Rice, Food grains, Fruits & Vegetables and Animal Feed range worldwide. We focus on quality rather than quantity. For us, “Quantity is not the criteria rather Quality is the parameter!”</p>
                <p>Mukhi Overseas is a Government of India Recognized Merchant Cum Export House, having diversified business into areas of Agricultural Commodities, Food Grains, Rice, Fruits & Vegetables and Animal Feed. Since 2018, the group has been making progress in leaps and bounds for exporting products and commodities to even the far-reaching corners of the world. Every day, we create sustainable models of adhering to the best practices in the industry. We have always endeavoured to offer the best of the quality products in the International markets. A truly remarkable export track record has earned us several prestigious Customers. Mukhi Overseas offers the best of Agricultural Commodities & Food Products.
                </p>
                <p>Mukhi Overseas, is a supplier of food grain and animal feed grain products for customers in the Middle East, African and European Countries. Our multinational trading company is registered in Rajasthan, India. We are responsible to supply agriculture products for our customers based on their demands. Through extensive research and cooperation with a variety of farmers and producers of grain and vegetable products in each of the mentioned categories. We have selected the most vetted sources in each of the mentioned categories in each given field and have evaluated their terms and conditions and deemed them as efficient and in harmony with international & domestic business practices and standards.</p>
                <p>Day after day we are in closed contact with our customers in over 50 Countries. We realize that every customer is unique. By really taking a good look at their businesses and working together with them, we understand exactly what matters to them and to their sector. Besides we have a wide orientation in the complete food and feed chain. It is this knowledge and experience that we translate into tailored advice, business services and products which fit our customers’ needs optimally. Whatever nutritional solution they need, no matter how big their business is and no matter where they are active. In this regard, Mukhi Overseas is proud to become your strategic partner, ready and able to source grain products through evaluated sources based on its customers requirements.</p>

                <b>How Mukhi Overseas Can Assist You?</b>
                <p>We are ready and able to offer you the best possible grains price based on market price, but not fictitious price! Your suggestion to new customers before contacting us is that to update themselves with the market price, otherwise we do not response to inquiries which are not based on the real market price.</p>

                <b>Company Strategy</b>
                <ul className='mt-4'>
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

            <div className="col-md-3 col-sm-12 a2-font ">

              <div className='border mb-3'>
                <div className='pt-2 ps-3 font-darkcyan fw-bold fs-6 prod-div'>
                  <p><Link to="/products" className='font-darkcyan'>Products</Link></p>
                </div>

                <div className='px-3 pt-3 link-col '>
                  <div>
                    <p><Link to="/indianrice">Indian Rice</Link></p>
                    <span><Link to="/basmatirice"><BiChevronRight></BiChevronRight>Basmatirice</Link></span><br />
                    <span><Link to="/nonbasmatirice"><BiChevronRight></BiChevronRight>Non Basmatirice</Link></span>
                  </div>

                  <div>
                    <p><Link to="/grains">Grains</Link></p>
                    <span><Link to="/greenmillet"><BiChevronRight></BiChevronRight>Green Millet </Link></span><br />
                    <span><Link to="/yellowmaize"><BiChevronRight></BiChevronRight>Yellow Maize </Link></span><br />
                    <span><Link to="/barly"><BiChevronRight></BiChevronRight>Barly</Link></span><br />
                    <span><Link to="/sorgum"><BiChevronRight></BiChevronRight>Sorgum </Link></span><br />
                    <span><Link to="/wheat"><BiChevronRight></BiChevronRight>Wheat </Link></span><br />
                    <span><Link to="sesameseeds"><BiChevronRight></BiChevronRight>Sesame Seeds </Link></span><br />
                  </div>

                  <div>
                    <p><Link to="/foddderseeds">Fodder Seeds</Link></p>
                    <span><Link to="/alfalfagrassseeds"><BiChevronRight></BiChevronRight>Alfalfa Grass Seeds </Link></span><br />
                    <span><Link to="/pipersudangrassseeds"><BiChevronRight></BiChevronRight>Piper Sudan Grass Seeds </Link></span><br />
                  </div>

                  <div>
                    <p><Link to="/freshfruits">Fresh Fruits</Link></p>
                    <span><Link to="/freshpomegrants"><BiChevronRight></BiChevronRight>Pomegrants </Link></span><br />
                  </div>

                  <div>
                    <p><Link to="/freshvegetable">Fresh Vegetables</Link></p>
                    <span><Link to="/freshginger"><BiChevronRight></BiChevronRight>Fresh Ginger</Link></span><br />
                    <span><Link to="freshredonion"><BiChevronRight></BiChevronRight>Fresh Red Onion</Link></span><br />
                  </div>

                  <div>
                    <p><Link to="/indianspices">Indian Spices</Link></p>
                    <span><Link to="/ajwainseeds"><BiChevronRight></BiChevronRight>Ajwain Seeds </Link></span><br />
                    <span><Link to="/aselioseeds"><BiChevronRight></BiChevronRight>Aselio Seeds </Link></span><br />
                    <span><Link to="/corianderseeds"><BiChevronRight></BiChevronRight>Coriander Seeds </Link></span><br />
                    <span><Link to="cuminseeds"><BiChevronRight></BiChevronRight>Cumin Seeds </Link></span><br />
                    <span><Link to="/fennelseeds"><BiChevronRight></BiChevronRight>Fennel seeds </Link></span><br />
                    <span><Link to="/fenugreekseeds"><BiChevronRight></BiChevronRight>Fenugreek Seeds </Link></span><br />
                    <span><Link to="/bayleaves"><BiChevronRight></BiChevronRight>Bay Leaves </Link></span><br />
                    <span><Link to="/sennaleaves"><BiChevronRight></BiChevronRight>Senna Leaves  </Link></span><br />
                    <span><Link to="/redchillipowder"><BiChevronRight></BiChevronRight>Red Chilli Powder </Link></span><br />
                    <span><Link to="/turmericpowder"><BiChevronRight></BiChevronRight>Termeric Powder </Link></span><br />
                  </div>

                </div>
              </div>

              <div className='border con-div'>
                <div className='pt-2 ps-3 font-darkcyan fw-bold fs-6 prod-div'>
                  <p><Link to="/products" className='font-darkcyan'>Contact Us</Link></p>
                </div>

                <div className='px-md-3 contain'>
                  <p className='font-darkcyan py-2 fw-bold'>Mukhi Overseas</p>
                  <p className='pb-2'>B9 SHIROMANI COMPLEX OPP BARODA EXPRESS HIGHWAY CTM, Ghodasar, Ahmedabad, Gujarat - 380026, India </p>
                  <p className='pb-2'><b>Mobile :</b> <span>+91-8866606069, +91-9328585464</span></p>
                  <p className='pb-2'><b>Call Us :</b> <span className='font-darkcyan fw-bold fs-6'>08048784470</span></p>
                  <span><b>E-mail:</b><a href="#" className='font-darkcyan fw-semibold mail-wrap'> mukhioverseas@gmail.com </a></span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* --------------------------- End Description About us ------------------------------ */}

      <section className='about-section px-2 disc-about-sec'>

        <Accordion defaultActiveKey="0" className='p-accord'>

          {/* --------------- products */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p><Link to="/products" className='font-darkcyan fw-bold fs-6'>Products</Link></p>
            </Accordion.Header>
            <Accordion.Body className='accord-p'>
              <div className='px-3 pt-3 link-col '>
                <div>
                  <p><Link to="/indianrice">Indian Rice</Link></p>
                  <span><Link to="/basmatirice"><BiChevronRight></BiChevronRight>Basmatirice</Link></span><br />
                  <span><Link to="/nonbasmatirice"><BiChevronRight></BiChevronRight>Non Basmatirice</Link></span>
                </div>

                <div>
                  <p><Link to="/grains">Grains</Link></p>
                  <span><Link to="/greenmillet"><BiChevronRight></BiChevronRight>Green Millet </Link></span><br />
                  <span><Link to="/yellowmaize"><BiChevronRight></BiChevronRight>Yellow Maize </Link></span><br />
                  <span><Link to="/barly"><BiChevronRight></BiChevronRight>Barly</Link></span><br />
                  <span><Link to="/sorgum"><BiChevronRight></BiChevronRight>Sorgum </Link></span><br />
                  <span><Link to="/wheat"><BiChevronRight></BiChevronRight>Wheat </Link></span><br />
                  <span><Link to="sesameseeds"><BiChevronRight></BiChevronRight>Sesame Seeds </Link></span><br />
                </div>

                <div>
                  <p><Link to="/foddderseeds">Fodder Seeds</Link></p>
                  <span><Link to="/alfalfagrassseeds"><BiChevronRight></BiChevronRight>Alfalfa Grass Seeds </Link></span><br />
                  <span><Link to="/pipersudangrassseeds"><BiChevronRight></BiChevronRight>Piper Sudan Grass Seeds </Link></span><br />
                </div>

                <div>
                  <p><Link to="/freshfruits">Fresh Fruits</Link></p>
                  <span><Link to="/freshpomegrants"><BiChevronRight></BiChevronRight>Pomegrants </Link></span><br />
                </div>

                <div>
                  <p><Link to="/freshvegetable">Fresh Vegetables</Link></p>
                  <span><Link to="/freshginger"><BiChevronRight></BiChevronRight>Fresh Ginger</Link></span><br />
                  <span><Link to="freshredonion"><BiChevronRight></BiChevronRight>Fresh Red Onion</Link></span><br />
                </div>

                <div>
                  <p><Link to="/indianspices">Indian Spices</Link></p>
                  <span><Link to="/ajwainseeds"><BiChevronRight></BiChevronRight>Ajwain Seeds </Link></span><br />
                  <span><Link to="/aselioseeds"><BiChevronRight></BiChevronRight>Aselio Seeds </Link></span><br />
                  <span><Link to="/corianderseeds"><BiChevronRight></BiChevronRight>Coriander Seeds </Link></span><br />
                  <span><Link to="cuminseeds"><BiChevronRight></BiChevronRight>Cumin Seeds </Link></span><br />
                  <span><Link to="/fennelseeds"><BiChevronRight></BiChevronRight>Fennel seeds </Link></span><br />
                  <span><Link to="/fenugreekseeds"><BiChevronRight></BiChevronRight>Fenugreek Seeds </Link></span><br />
                  <span><Link to="/bayleaves"><BiChevronRight></BiChevronRight>Bay Leaves </Link></span><br />
                  <span><Link to="/sennaleaves"><BiChevronRight></BiChevronRight>Senna Leaves  </Link></span><br />
                  <span><Link to="/redchillipowder"><BiChevronRight></BiChevronRight>Red Chilli Powder </Link></span><br />
                  <span><Link to="/turmericpowder"><BiChevronRight></BiChevronRight>Termeric Powder </Link></span><br />
                </div>

              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* --------------- contact us */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p><Link to="/products" className='font-darkcyan font-darkcyan fw-bold fs-6'>Contact Us</Link></p>
            </Accordion.Header>
            <Accordion.Body className='accord-c'>
              <div className='px-md-3 contain'>
                <p className='font-darkcyan py-2 fw-bold'>Mukhi Overseas</p>
                <p className='pb-2'>B9 SHIROMANI COMPLEX OPP BARODA EXPRESS HIGHWAY CTM, Ghodasar, Ahmedabad, Gujarat - 380026, India </p>
                <p className='pb-2'><b>Mobile :</b> <span>+91-8866606069, +91-9328585464</span></p>
                <p className='pb-2'><b>Call Us :</b> <span className='font-darkcyan fw-bold fs-6'>08048784470</span></p>
                <span><b>E-mail:</b><a href="#" className='font-darkcyan fw-semibold mail-wrap'> mukhioverseas@gmail.com </a></span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </section>

      <MIniFooter />
    </>
  )
}
