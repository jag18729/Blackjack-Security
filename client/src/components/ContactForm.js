import axios  from 'axios'
import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
class ContactForm extends Component {
  state = {
    // "first_name": "Rafael",
    // "last_name": "Garcia",
    // "email":"r@123.com",
    // "company":"usa",
    // "city":"Los Angeles, CA",
    // "phone":"8187418210",
    // "location":"Los Angeles",
    // "service":"Residential",
    // "location": 'Los Angeles County',
    // "services": 'Alarm Response',
    // "description": "blahh",
    visible: false
  }
  toggle(){
    this.setState({
      visible: ! this.state.visible
    })
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
      'template_ypari0h',
       templateParams,
      'user_pQsMaKVuEoXJYQNinWsxk'
     )
     .then((result) => {
         console.log(result.text);
         alert('Sent!');
     }, (err) => {
         console.log(err.text);
         alert(JSON.stringify(err));
     });
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
          <h1 className="p-heading1">Request a Quote!</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Row >
              <Col md={6}>
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
              <Col md={6}>
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
            <FormGroup controlId="formBasicPhone">
                <Label className="text-muted">Phone Number</Label>
                <Input
                  type="phone"
                  name="phone"
                  className="text-primary"
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this,'phone')}
                  placeholder="323-123-4567"
                  />
              </FormGroup>
                <FormGroup  controlId="formBasicLocation">
                  <Label>Location</Label>
                  <Input 
                  type="select"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange.bind(this,'location')}
                  >
                    <option value='Los Angeles'>Greater Los Angeles </option>
                    <option value='Ventura County'>Ventura County </option>
                    <option value='Riverside County'>Riverside County </option>
                  </Input>
                </FormGroup>
                <FormGroup  controlId="formBasicCity">
                  <Label>City</Label>
                  <Input
                  type="text"
                  name="city"
                className="text-primary"
                  value={this.state.city}
                  onChange={this.handleChange.bind(this,'city')}
                  placeholder="City"
                  >
                  </Input>
                </FormGroup>
                <FormGroup controlId="formBasicService">
                  <Label>Service</Label>
                  <Input
                  type="select"
                  name="service"
                  value="Patrol Security"
                  onChange={this.handleChange.bind(this,'service')}
                  >
                    <option value='Patrol Security'>Patrol Security </option>
                    <option value='Residential Security'>Residential Security </option>
                    <option value='Alarm Response'>Alarm Response </option>
                  </Input>
                </FormGroup>
                <FormGroup controlId="formBasicDescription">
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      placeholder='Details about the service you require'
                      value={this.state.description}
                      onChange={this.handleChange.bind(this,'description')}
                    ></Input>
                  </FormGroup>
                  <Button
                    block
                    className="m-2" 
                    color="success" 
                    type="submit"
                    onClick={this.toggle.bind(this)}
                    >Submit</Button>
                    <Alert color="success" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>
                    Your quote have been sent! A representative will contact you shortly.
                  </Alert>
          </Form>
      </>
    )
  }
}
export default ContactForm