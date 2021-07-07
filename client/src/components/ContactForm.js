import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
  state = {
    "first_name": "Rafael",
    "last_name": "Garcia",
    "email":"r@123.com",
    "company":"usa",
    "city":"Los Angeles, CA",
    "phone":"8187418210",
    "location":"Los Angeles",
    "service":"Residential",
    "description": "blahh",
    "locations":[
      'Los Angeles County',
      'Ventura County',
      'San Bernandino County'
    ],
    "services":[
    'Alarm Response',
    'Patrol Survalence',
    'Residential Security',
    'Private Event Escort/ Detail'
    ]
  }
    handleSubmit(e) {
    e.preventDefault()
    const { first_name, last_name, email, company, city, phone, service, location, description } = this.state
    let templateParams = {
      first_name: first_name,
      last_name:last_name,
      email: email,
      company: company,
      city: city,
      phone:phone,
      location: location,
      service: service,
      description: description,
     }
     emailjs.send(
      'service_cjqdoji',
      'template_1dm2yfm',
       templateParams,
      'user_pQsMaKVuEoXJYQNinWsxk'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      city: '',
      phone:'',
      location: '',
      service: '',
      description: ''
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Row form>
              <Col md={5}>
              <FormGroup  controlId="formBasicName">
                <Label className="text-muted">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.first_name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'first_name')}
                  placeholder="First name"
                  />
              </FormGroup>
              </Col>
              <Col md={5}>
              <FormGroup  controlId="formLastName">
                <Label className="text-muted">Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'last_name')}
                  placeholder="Last Name"
                />
              </FormGroup>
              </Col>
            </Row>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email address"
              />
            </FormGroup>
            <FormGroup controlId="formBasicCompany">
              <Label className="text-muted">Company</Label>
              <Input
                type="text"
                name="company"
                className="text-primary"
                value={this.state.company}
                onChange={this.handleChange.bind(this, 'company')}
                placeholder="Company"
              />
            </FormGroup>
            {/* <Form.Group controlId="formBasicPhone">
                <Form.Label className="text-muted">Phone Number</Form.Label>
                <Form.Input
                  type="text"
                  name="phone"
                  className="text-primary"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this,'phone')}
                  placeholder="323-123-4567"
                  />
              </Form.Group>
                <Form.Group  controlId="formBasicLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                  as="select"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange.bind(this,'location')}
                  >
                    <option value='Los Angeles'>Greater Los Angeles </option>
                    <option value='Ventura County'>Ventura County </option>
                    <option value='Riverside County'>Riverside County </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group  controlId="formBasicCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                  type="text"
                  name="city"
                className="text-primary"
                  value={this.state.city}
                  onChange={this.handleChange.bind(this,'city')}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicService">
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                  as="select"
                  name="service"
                  value="Patrol Security"
                  onChange={this.handleChange.bind(this,'service')}
                  >
                    <option value='Patrol Security'>Patrol Security </option>
                    <option value='Residential Security'>Residential Security </option>
                    <option value='Alarm Response'>Alarm Response </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      type='description'
                      placeholder='Details about the service you require'
                      value={this.state.description}
                      onChange={this.handleChange.bind(this,'description')}
                    ></Form.Control>
                  </Form.Group> */}
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </>
    )
  }
}
export default ContactForm