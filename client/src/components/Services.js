import React from 'react';
import { Card, CardDeck, Container, CardColumns } from 'react-bootstrap';


const Services = () => {
  return (
    <div>
      <Container className='services-title' > 
        <h2 className='services-title-text'>Services</h2>
        
        <CardDeck className="card-deck-services">
          <Card bg='light' border='dark' text='dark' className="mr-5">
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
            <Card.Body>
              <Card.Title>Patrol</Card.Title>
              <Card.Text>
                Patrol Security available for <strong>On site and Off Site</strong> details. Communities and private property.
              </Card.Text>
            <Card.Img variant="bottom" src="https://preview.redd.it/h0ouclf0ncy01.jpg?width=960&crop=smart&auto=webp&s=255482d009ce4720f11128ad36f1c6e99a682152" />
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
          </Card>
        </CardDeck>
        <CardColumns>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="holder.js/100px160" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
      </Container >
    </div>
  );
};

export default Services;
