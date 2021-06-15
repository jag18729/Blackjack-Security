import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ContactUs from './views/ContactUs'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Router>
    <NavBar />
      <Container>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/contact-us" component={ContactUs} />
        <Route path='/about-us' component={AboutUs} />
      </Container>
    </Router>
  );
}

export default App;
