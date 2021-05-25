import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';


const Services = () => {
  return (
    <div>
      <Container class='services-title' fluid>
        <h2>Services</h2>

        <CardDeck class="card-deck-services">
          <Card bg='light' border='dark' text='dark' className="p-1">
            <Card.Img variant="top" src="https://www.securityusainc.com/Images/SecurityUSA/Divisions/Res.jpg" />
            <Card.Body>
              <Card.Title >Residential Security</Card.Title>
              <Card.Text>
                24-hour protection with our highly trained security officers, ready to respond at a moments notice.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg='light' border='dark' text='dark' className="p-1">
            <Card.Img variant="bottom" src="https://preview.redd.it/h0ouclf0ncy01.jpg?width=960&crop=smart&auto=webp&s=255482d009ce4720f11128ad36f1c6e99a682152" />
            <Card.Body>
              <Card.Title>Patrol</Card.Title>
              <Card.Text>
                Patrol Security available for <strong>On site and Off Site</strong> details. Communities and private property.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg='light' border='dark' text='dark' className="p-1">
            <Card.Img variant="top" src="https://securitytoday.com/articles/2020/03/25/-/media/SEC/Security-Products/Images/2020/03/AlarmResponseCenter.jpg" />
            <Card.Body>
              <Card.Title>Alarm Response</Card.Title>
              <Card.Text>
                Fast and reliable alarm monitoring system.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container >
    </div>
  );
};

export default Services;
