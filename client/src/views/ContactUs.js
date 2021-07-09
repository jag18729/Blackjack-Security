import React, { useState  } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Container, Button, Image, Row, Col} from 'react-bootstrap';
import Form from '../components/Form';
import ContactForm from '../components/ContactForm'
import { FaQuoteLeft } from "react-icons/fa";


const ContactUs = () => {
  const [errors, setErrors] = useState({});
  const createQuote = quote => {
    axios.post('http://localhost:8000/api/quote', quote)
      .then(res => navigate('/'))
      .catch(err => {
        console.log(errors.response);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }
  return (
      <Container  id="contact-us-container">
        <Image src="https://wallpapercave.com/wp/wp7618626.jpg" fluid />
        <Row>
          <Col md={12}  className="p-5" id="contact-us-col-1" >
            
            <h2 className="display-1">Why Choose <span className="name">Us</span></h2>
            <p className="display-6" md={6} >
            Our mission is to provide our clientele with superior service that is in line with their ever changing security and protection needs. Our firm will go above and beyond what is promised to our clients to ensure that they are provided with superior, professional services. It is our belief that in order to assure the best quality of service that we stand by, we must keep close relationships with our personnel both on and off duty.
            </p>

          </Col>
        </Row >
        <Row>
          <Col md={5} className="p-1 m-2" id="contact-us-col-2">
          {/* <ContactForm errors={errors} onSubmitProp={createQuote}  /> */}
          </Col>
          <Col md={6} className="p-1 m-1" id="bulletpoints">
            <h1 className="display-2">
              <FaQuoteLeft />Free Quote
              </h1>
            <i class="fas fa-quote-left"></i>

              <p className="m-1">Request a 100% hassle free comprehensive quote custom tailored to your security needs!
              </p>
              <p className="m-1">
              24/7 Services
              We are available to all clients 24 hours a day, 7 days a week, & 365 days a year.
              </p>
              <p className="m-1">
              Technology
              Our company stays up to date with our most advanced digital patrol and reporting software.
              </p>
          </Col>
          </Row>
          <Form errors={errors} onSubmitProp={createQuote} />
      </Container>
  )
}

export default ContactUs
