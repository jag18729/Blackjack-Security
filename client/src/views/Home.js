import {Button, Jumbotron, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div>
            <div className="header-wrapper">
      <Container  className="header-main" >
      <Jumbotron >
        <div className="typed-text">
          <Typewriter
          onInit={(typewriter) =>{
            typewriter
            .typeString("Reduce the risk.")
            .stop()
            .typeString("Protect your property.")
            .start();
          }}
          />
          <br />
        <Button size="lg" variant="danger" id="contact-us-button" block  to="">Talk to a Protector
        </Button>   
        </div>
        </Jumbotron>
          <Image src="https://c0.wallpaperflare.com/preview/26/502/511/best-security-company-london-uk-security-guards-in-london-best-security-company-in-uk-best-security-company-in-london.jpg" />
        </Container>
    </div>            
        </div>
    )
}

export default Home
