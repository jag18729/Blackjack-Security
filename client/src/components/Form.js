import React, { useState } from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap';


export default props => {
  const { quote, onSubmitProp, errors } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');

  const locations = [
    'Los Angeles County',
    'Ventura County',
    'San Bernandino County'
  ];
  const services = [
    'Alarm Response',
    'Patrol Survalence',
    'Residential Security',
    'Private Event Escort/ Detail'
  ];
  const [location, setSelectedLocation] = useState(locations[0]);
  const [service, setSelectedService] = useState(services[0]);
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log('sent')
    onSubmitProp({ firstName, lastName, email, company , location, description, city, service })
  }

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
          <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="John"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Doe"/>
                </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="email" placeholder="Enter company name" />
              </Form.Group>
              </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="323-123-4567" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Location</Form.Label>
                  <Form.Control/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Service</Form.Label>
                  <Form.Control placeholder="Patrol Survalence" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Details about the service you require" />
              </Form.Group>
              </Row>
        <Button className="pt-1" size="lg" variant="success" type="submit" width="40em">
          Submit
        </Button>
          </Form>
    </Container >
  )
}