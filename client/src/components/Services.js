import React from 'react';
import { Card, CardDeck, Container, CardColumns } from 'react-bootstrap';


const Services = () => {
  return (
    < >
      <Container className="services-wrapper"> 
        <h2 className='services-title-text'>Services</h2>
        
        <CardDeck className="card-deck-services">
          <Card bg='light' border='dark' text='dark' className="card">
            <Card.Img variant="top" src="https://www.securityusainc.com/Images/SecurityUSA/Divisions/Res.jpg" className="card-image" />
            <Card.Body>
              <Card.Title >
                <h1 className="title">Residential Security</h1>
                </Card.Title>
              <Card.Text>
                <h4>
                <strong>On site</strong> skilled and equipped security protectors. Our team designs and creates tailored protocols to best protect your property and loved ones. 
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card bg='light' border='dark' text='dark' className="card">
            <Card.Body>
              <Card.Title>
                <h1 className="title">Patrol Response</h1>
              </Card.Title>
              <Card.Text>
                <h4 >
                Patrol Security focuses on property checks, <strong>responding to alarms</strong> and conducting property inspections so you don't have to worry.
                </h4>
              </Card.Text>
            <Card.Img variant="bottom" src="https://preview.redd.it/h0ouclf0ncy01.jpg?width=960&crop=smart&auto=webp&s=255482d009ce4720f11128ad36f1c6e99a682152" className="card-image"/>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg='light' border='dark' text='dark' className="card">
            <Card.Img variant="top" src="https://securitytoday.com/articles/2020/03/25/-/media/SEC/Security-Products/Images/2020/03/AlarmResponseCenter.jpg" className="card-image"/>
            <Card.Body>
            <Card.Title>
                <h1 className="title">Alarm Response</h1>
              </Card.Title>
              <Card.Text>
                Fast and reliable alarm monitoring system.
      </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        
      </Container >
    </>
  );
};

export default Services;
