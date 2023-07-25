import React from 'react'
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import Top_Line from './Top_Line';
import Navbar2 from './Navbar2';
import Collapse from 'react-bootstrap/Collapse';
import MIniFooter from './MIniFooter';
import { useState } from 'react';
import Gotoup from './Gotoup';

export default function Enquiry() {
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
                            <h2 className='m-0'>Enquiry</h2>
                        </div>

                        <div className="col2 mini-name">
                            <span><Link to="/" className='text-decoration-none font-white'>Home</Link></span>
                            <span className='mx-1'><BiChevronRight></BiChevronRight></span>
                            <span>Enquiry</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------- End About Name bar ------------------------------ */}

            {/* --------------------------- Start Enquiry section ------------------------------ */}
            <section>
                <div className='disc-about-sec  full-pad container-fluid' id='main-about-dis'>
                    <div className="row row-4">
                        <div className="col1 a1-font">
                            <p>Thank you for inquiry.</p>
                            <p>We have received your business request. Our Sales Team will soon get in touch with you.</p>
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
            </section>
            {/* --------------------------- Start Enquiry section ------------------------------ */}
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
