import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Affix } from 'rsuite';

export default function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Affix>
        <header className='full-pad'>

          {/* --------------------------------  offcanvas ------------------------- */}

          <Button type='' variant="" className='off-btn fw-bold canvas' onClick={handleShow}>
            <HiBars3CenterLeft></HiBars3CenterLeft>
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>

            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav class="canva">
                <ul className=''>
                  <li className='nav-item'><Link to="/" >home</Link></li>
                  <li><Link to="/about" >About Us</Link></li>
                  <li><Link to="/" >Products <span><FiChevronDown className=''></FiChevronDown></span></Link>
                    <ul class="sub-menu font-black">
                      <li><Link to="/indianrice" >Indian Rice</Link>

                      </li>
                      <li><Link to="/grains" >Grains</Link></li>
                      <li><Link to="/fodderseeds" >Fodder Seeds</Link></li>
                      <li><Link to="/freshfruits" >Fresh Fruits</Link></li>
                      <li><Link to="/freshegetables" >Fresh Vegetables</Link></li>
                      <li><Link to="/indianspices" >Indian Spices</Link></li>
                    </ul>
                  </li>

                  <li><Link to="/contact" >Contact Us</Link></li>
                </ul>
              </nav>
            </Offcanvas.Body>
          </Offcanvas>

          {/* ------------------------------------------------ */}

          <Link to="/" class="logo">
            <img src={require('../img/asset 1.png')} alt="" />
          </Link>
          <nav class="navbar float" data-spy="affix" data-offset-top="197">
            <ul className=''>
              <li className=''><NavLink to="/" >home</NavLink></li>
              <li><NavLink to="/about" >about Us</NavLink></li>
              <li><Link to="/" >Product <span><FiChevronDown className=''></FiChevronDown></span></Link>
                <ul class="sub-menu font-black">
                  <li><Link to="/rice" >Indian Rice</Link></li>
                  <li><Link to="/grains" >Grains</Link></li>
                  <li><Link to="/fodderseeds" >Fodder Seeds</Link></li>
                  <li><Link to="/fruits" >Fresh Fruits</Link></li>
                  <li><Link to="/vegetables" >Fresh Vegetables</Link></li>
                  <li><Link to="/spices" >Indian Spices</Link></li>
                </ul>
              </li>

              <li><NavLink to="/contact" >Contact Us</NavLink></li>
            </ul>
          </nav>



        </header>
      </Affix>
    </>
  )
}
