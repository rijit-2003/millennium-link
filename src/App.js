import React, { useState } from 'react';
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
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import SocialComingSoon from './pages/SocialComingSoon';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';

const iconBaseStyle = {
  position: 'fixed',
  right: '20px',
  zIndex: 1000,
  borderRadius: '50%',
  padding: '12px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  color: 'white',
  backgroundColor: '#007bff',
  textAlign: 'center',
  cursor: 'pointer',
};

function Home() {
  const navigate = useNavigate();

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

        {/* LinkedIn */}
        <div
          onClick={() => navigate('/coming-soon')}
          style={{
            ...iconBaseStyle,
            bottom: '200px',
            backgroundColor: '#0077b5'
          }}
          title="Connect on LinkedIn"
        >
          <FaLinkedin size={26} />
        </div>

        {/* Facebook */}
        <div
          onClick={() => navigate('/coming-soon')}
          style={{
            ...iconBaseStyle,
            bottom: '140px',
            backgroundColor: '#1877f2'
          }}
          title="Visit us on Facebook"
        >
          <FaFacebook size={26} />
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9830375143"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            bottom: '260px',
            backgroundColor: '#25D366'
          }}
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>

      <StatsCounter />
      <AboutUs />
      <Customers />
      <Services />
      <Partners />
      <Contact />
      <Footer />

      {/* Book Now Button */}
      <button
        onClick={() => navigate('/contact')}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '15px 20px',
          borderRadius: '50px',
          fontSize: '16px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        Get a Quotation for Free
      </button>
    </>
  );
}

// ✅ Only ONE App function
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/coming-soon" element={<SocialComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
