
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import logo from '../assets/logo-ictak.png';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Login from './Login';




const Appbar = () => {
    const [activeLink, setActiveLink] =useState('home');
    // const [scrolled,setScrolled]=useState(false);

    // useEffect(()=>{
    //     if(window.scrollY >50){
    //         setScrolled(true);
    //     }else{
    //         setScrolled(false)
    //     }
    //     window.addEventListener("scroll",onScroll);
    //     return ()=>window.removeEventListener("scroll",onScroll)
    // },[])
    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }
  return (
   


    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className='logo' >
            <img src={logo } alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className='navbar-toggler-icon'></span></Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navabr-link':'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
            {/* <Nav.Link href="#About Us"className={activeLink === 'link'? 'active navabr-link':'navbar-link'}onClick={() =>onUpdateActiveLink('link')}>About Us</Nav.Link> */}
            
          </Nav>
          <span className='navbar-text'>
                <div className='social-icon'>
                <a href='#'><FaFacebookF className='icon' /></a>
                <a href='#'><MdEmail className='icon'/></a>
                
                </div>
                <button className='vvd' onClick={()=>console.log('connect')}> <span> <Link  to={"/login"} style={{ textDecoration: "none" }}>Login <FaUser /></Link></span></button>
                </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Appbar