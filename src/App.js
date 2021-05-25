import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
// import Particles from 'react-particles-js';
import Services from './components/Services';


function App() {
  return (
    <>
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "tan",
              }
            }
          }
        }
        }
      /> */}
      <NavBar />
      <Header />
      <Services />
    </>
  );
}

export default App;
