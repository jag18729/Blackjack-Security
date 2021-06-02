import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {  Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';
import AboutUs from './components/AboutUs';


function App() {

  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Services />
    </>
  );
}

export default App;
