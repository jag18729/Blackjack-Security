import React from 'react';
import { Container, Col, Row, Carousel, Image, Card, Button } from 'react-bootstrap';
import aboutUsPic from "../images/vet_owned.JPG";
const AboutUs = () => {
  return (
    <div className="about-us-wrapper" id="about-us">
        <h1 className="display-6 text-center py-3"> About Us</h1>
      <div className="about-us-container">
        <img class="about-us-picture" src={aboutUsPic} />
        <div class="about-us-text">
        <h5 className="display-6 text-center"> Blackjack Security continually strives to deliver professional services to customers throughout the greater Los Angeles area. We are insured and licensed through the Bureau of Security & Investigative Services in California. PPO License #120913</h5>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
