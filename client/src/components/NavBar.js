import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/logo_invert.png';
import {  Link, animatedScroll as scroll  } from 'react-scroll';
// import { LinkContiner } from "react-router-bootstrap";
import { scroller } from "react-scroll";


const NavBar = () => {
  return (
    <Navbar className="navbar-main" bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container className="nav-container">
        <Navbar.Brand id="brand" href="/">
          <img id="logo" src={Logo} alt="logo" />{''}   
          <h5 id="logo-title" > BlackJack Security</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link id="home-link" href="/">Home</Nav.Link>
            <Nav.Link id="services-link"  onClick={() => scroller.scrollTo('services', {
                  smooth: true,
                  offset: 900,
                  duration: 500,
              })}
              >Services</Nav.Link>
            <Nav.Link id="about-us-link"  onClick={() => scroller.scrollTo('services', {
                  smooth: true,
                  offset: 3700,
                  duration: 500,
              })} >About Us</Nav.Link>
            
            <Nav.Link id="contact-us-link"  onClick={() => scroller.scrollTo('services', {
                  smooth: true,
                  offset: 4100,
                  duration: 500,
              })}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
};

export default NavBar;
