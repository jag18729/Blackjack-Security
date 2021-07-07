import React, { useState  } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Container, Button, Image, Row, Col} from 'react-bootstrap';
import Form from '../components/Form';
import ContactForm from '../components/ContactForm'

const ContactUs = (props) => {
  const [errors, setErrors] = useState({});
  const [quote, setQuote] = useState();
  const createQuote = quote => {
    axios.post('http://localhost:8000/api/quote', quote)
      .then(res => navigate('/'))
      .catch(error => {
        console.log(error.response);
        setErrors(error.response.data.errors)
      }
      );
  }
  return (
      <Container className="md-1" fluid id="contact-us-container">
        <Image src="https://wallpapercave.com/wp/wp7618626.jpg" fluid />
        <Row>
          <Col className="p-5 m-2" id="contact-us-col-1" >
            
            <h2 className="display-2">Why Choose <span className="name">Us</span></h2>
            <h4 className="display-7">
            Our mission is to provide our clientele with superior service that is in line with their ever changing security and protection needs. Our firm will go above and beyond what is promised to our clients to ensure that they are provided with superior, professional services. It is our belief that in order to assure the best quality of service that we stand by, we must keep close relationships with our personnel both on and off duty.
            </h4>

            <i class="fas fa-quote-left"></i>
              Free Quote
              Request a 100% hassle free comprehensive quote custom tailored to your security needs!

              24/7 Services
              We are available to all clients 24 hours a day, 7 days a week, & 365 days a year.

              Technology
              Our company stays up to date with our most advanced digital patrol and reporting software.
          </Col>
          <Col  className="p-5 m-2" id="contact-us-col-2">
          {/* <Form errors={errors} onSubmitProp={createQuote} /> */}
          <ContactForm />
          </Col>
        </Row>
      </Container>
  )
}

export default ContactUs
