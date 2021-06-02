import React from 'react';
import { Container, Col, Row, Carousel, Image, Card } from 'react-bootstrap';
import aboutUsPic from "../images/whyUs.png";
const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
        <h1 className="display-6 text-center"> About Us</h1>
      <div className="about-us-container" >
      <Card bg="light" style={{ width: '38rem' }} id="about-us-card">
      <img variant="bottom" id="about-us-picture" src={aboutUsPic} fluid />
  <Card.Body >
    <Card.Text >
      <h6 className="display-1"> Lorem directly</h6>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    </div>
    </div>
  )
}

export default AboutUs
