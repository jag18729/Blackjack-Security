import { Button } from 'react-bootstrap';
import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h3>Blackjack Security continually strives to deliver professional services to customers throughout the greater Los Angeles area</h3>
        <Typed
          className="typed-text"
          strings={["Residential Security", "Personal Detail Security", "Property Security", "We can arrange it to protect you and your business"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <a href="">
          <Button variant="outline-danger" class="btn-main-offer" to="">Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
