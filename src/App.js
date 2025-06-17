import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StatsCounter from './components/StatsCounter';
function App() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <h1 className="hero-title">Millennium Link</h1>
        <h2 className="hero-subtitle">
  <Typewriter
    words={['A Telecom Solution Company']}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h2>
      </div>
      <StatsCounter />
      <AboutUs/>
      <Customers />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
