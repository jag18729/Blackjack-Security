import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Logo from '../images/logo_invert.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect fixed>
      <Container >
        <Navbar.Brand id="brand" href="#home">
          <img id="logo" src={Logo} alt="logo" />{''}   BlackJack Security
          <h5 id="logo-title" ></h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FontAwesomeIcon />
          <Nav className="ms-auto">
            <Nav.Link id="home-link" href="#home" >Home</Nav.Link>
            <Nav.Link id="services-link" href="#services">Services</Nav.Link>
            <Nav.Link id="about-us-link" href="#" >About Us</Nav.Link>
            <Nav.Link id="contact-us-link" href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
};

export default NavBar;
