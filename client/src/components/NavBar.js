import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/logo_invert.png';

const NavBar = () => {
  return (
    <Navbar className="navbar-main" bg="dark" variant='dark' expand="lg" collapseOnSelect fixed>
      <Container className="nav-container">
        <Navbar.Brand id="brand" href="#home">
          <img id="logo" src={Logo} alt="logo" />{''}   
          <h5 id="logo-title" > BlackJack Security</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-1">
            <Nav.Link id="home-link" href="#home" active>Home</Nav.Link>
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
