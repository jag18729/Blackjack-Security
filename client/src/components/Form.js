import React, { useState } from 'react';
import { Alert, Container, Form, Button, Row, Col} from 'react-bootstrap';
import emailjs from 'emailjs-com';

// first_name": "Rafael",
//     "last_name": "Garcia",
//     "email":"r@123.com",
//     "company":"usa",
//     "city":"Los Angeles, CA",
//     "phone":"8187418210",
//     "location":"Los Angeles",
//     "service":"Residential",
//     "description": "blahh"

export default props => {
  const { quote, onSubmitProp, errors } = props;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState("");

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
  // const [errors, setErrors]= useState()
  var [sent, setSent] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('sent');
    emailjs.sendForm('service_cjqdoji', 'template_ypari0h', e.target, 'user_pQsMaKVuEoXJYQNinWsxk')
      .then((result) => {
          console.log(result.text);
          alert('Sent!');
      }, (err) => {
          console.log(err.text);
          alert(JSON.stringify(err));
      });
      e.target.reset();
    onSubmitProp({ first_name, last_name, email, company , location, description, city, service })
  }
  // "Quote validation failed: phone: Please enter the best phone number to reach out you."
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
          <Row>
            <Form.Group controlId='first_name'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='First Name'
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group  controlId={last_name}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name"
              type="name"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="company">
              <Form.Label>Company</Form.Label>
                <Form.Control
                  type='company'
                  placeholder='Enter Company name'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></Form.Control>
            </Form.Group>
              </Row>

            <Row className="mb-3">
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            </Row>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  placeholder="323-123-4567"
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                  as="select"
                  value={location}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                  {locations.map((location, index) => <option key={index} >{location}</option>)}
                  </Form.Control>
                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                  as="select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  >
                  {locations.map((location, index) => <option key={index} >{location}</option>)}
                  </Form.Control>
                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="service">
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                  as="select"
                  value={service}
                  onChange={(e) => setSelectedService(e.target.value)}
                  >
                  {services.map((service, index) => <option key={index}>{service}</option>)}
                  </Form.Control>
                </Form.Group>

              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      type='description'
                      placeholder='Details about the service you require'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Row>
                <Button className="pt-1" size="lg" variant="success" type="submit" width="40em">
                  Submit
                </Button>
          </Form>
      <Alert variant="success" onClose={() => setSent(true)} dismissible>
        <Alert.Heading>Quote has been sent!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </Container >
  )
}