import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './views/ContactUs'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from './views/Home'
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Router>
    <NavBar />
    <ScrollToTop/>
      <Container>
        {/* <Route path="/" component={Header} /> */}
        <Route path="/" component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path='/about-us' component={AboutUs} />
      </Container>
    </Router>
    <Footer />
    </>
  );
}

export default App;
