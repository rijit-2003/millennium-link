// src/App.js
import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Typewriter } from 'react-simple-typewriter';
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import StatsCounter from './components/StatsCounter';

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import ContactUs from './pages/ContactUs';
import SocialComingSoon from './pages/SocialComingSoon';
import EpabxIntercom from './pages/EpabxIntercom';
import Cctv from './pages/Cctv';
import Biometrics from './pages/Biometrics';

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

// 👇 New helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // always scroll to top on route change
  }, [pathname]);

  return null;
}

// Home Component
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="hero-title">Millennium Link</h1>
        <h2 className="hero-subtitle">
          <Typewriter
            words={['A Biometrics, CCTV and Telecom Solution Company']}
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
          onClick={() => window.open("https://www.linkedin.com/company/millennium-link/", "_blank")}
          className="bounce-icon"
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
          className="bounce-icon"
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
          className="bounce-icon"
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

      {/* Floating CTA – Home page only */}
      <button
        aria-label="Book Now"
        onClick={() => navigate('/contact')}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
          color: 'white',
          border: 'none',
          padding: '15px 25px',
          borderRadius: '50px',
          fontSize: '16px',
          fontWeight: '600',
          boxShadow: '0 5px 15px rgba(0,0,0,0.25)',
          zIndex: 1100,
          cursor: 'pointer',
          transition: 'filter .2s ease, transform .05s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
        onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        📅 Get a free Quotation
      </button>
    </>
  );
}

// Layout wrapper
function Layout({ children }) {
  const location = useLocation();
  const { pathname } = location;

  // Pages where Navbar should be hidden
  const hideNavbarOn = [
    '/services/epabx',
    '/services/cctv',
    '/services/biometric',
  ];

  const hideNavbar = hideNavbarOn.includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 ensures scroll resets on route change */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Services index (shows navbar) */}
          <Route path="/services" element={<Services />} />

          {/* Individual service pages (hide navbar, keep footer) */}
          <Route path="/services/epabx" element={<EpabxIntercom />} />
          <Route path="/services/cctv" element={<Cctv />} />
          <Route path="/services/biometric" element={<Biometrics />} />

          {/* Contact and other pages */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/coming-soon" element={<SocialComingSoon />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
