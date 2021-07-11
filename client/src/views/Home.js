import {Button, Jumbotron, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import React from 'react';
import Typewriter from 'typewriter-effect';
import Services from '../components/Services'
import ContactUs from './ContactUs';
import { scroller } from "react-scroll";

const Home = () => {
    return (
        <div name='home'>
            <div className="header-wrapper">
      <Container  className="p-5 header-main" >
      <Jumbotron >
        <div className="typed-text">
        <Typewriter
            
            onInit={(typewriter)=> {
            typewriter            
            .typeString("Reduce the risk.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Protect your property.")
            .start();
            }}
            />
          <br />
        <Button size="lg" variant="danger" id="contact-us-button" block  onClick={() => scroller.scrollTo('contact-us', {
                  smooth: true,
                  offset: -35,
                  duration: 500,
              })}>Talk to a Protector
        </Button>   
        </div>
        </Jumbotron>
          {/* <Image src="https://c0.wallpaperflare.com/preview/26/502/511/best-security-company-london-uk-security-guards-in-london-best-security-company-in-uk-best-security-company-in-london.jpg" /> */}
        </Container>
    </div>            
    <Services />
    <ContactUs />
        </div>
    )
}

export default Home
