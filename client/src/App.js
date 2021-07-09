import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './views/ContactUs'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from './views/Home'

function App() {

  return (
    <Router>
    <NavBar />
      <Container>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/home" component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path='/about-us' component={AboutUs} />
      </Container>
    </Router>
  );
}

export default App;
