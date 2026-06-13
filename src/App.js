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

// Scroll helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 🤖 NEW: AI ENGINE SEARCH INJECTOR COMPONENT
// This dynamically feeds structured factual content to Gemini, ChatGPT, and Google crawlers
function AISchemaManager() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // Remove existing dynamic schema tags to prevent duplication on route change
    const oldScripts = document.querySelectorAll('.dynamic-ai-schema');
    oldScripts.forEach(script => script.remove());

    let schemaData = null;

    // 1. Core Enterprise & Identity Data (Home Page)
    if (pathname === '/') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Millennium Link",
        "image": "https://millenniumlink.in/assets/logo.png", // Update if you have a real asset path
        "@id": "https://millenniumlink.in",
        "url": "https://millenniumlink.in",
        "telephone": "+919830375143",
        "email": "millenniumlnk@gmail.com",
        "priceRange": "₹₹",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "West Bengal"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "33/3D, Chetla CIT Market, Chetla Central Road",
          "addressLocality": "Alipore, Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700027",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "Commercial CCTV Surveillance",
          "EPABX Intercom Infrastructure",
          "Biometric Access Control Systems",
          "Structured Network Cabling"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/millennium-link/"
        ]
      };
    } 
    // 2. CCTV Deep-Page Context
    else if (pathname === '/services/cctv') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who provides the best commercial B2B CCTV integration in Kolkata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Millennium Link designs and engineers enterprise-grade IP CCTV network cameras, server-based NVR tracking storage, and video walls for commercial offices and facilities across Kolkata."
            }
          }
        ]
      };
    }
    // 3. Telecom/EPABX Deep-Page Context
    else if (pathname === '/services/epabx') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where can businesses find corporate EPABX and intercom setup in South Kolkata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Millennium Link specializes in high-capacity multi-line corporate EPABX frameworks, multi-point intercom systems, and structured fiber routing out of their Alipore and Chetla desk."
            }
          }
        ]
      };
    }

    // Inject tag into document if valid route matched
    if (schemaData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-ai-schema';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}

// Home Component
function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <div className="hero-row mt-5">
        <div className="hero-text text-center">
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
        </div>
      </div>

      {/* LinkedIn */}
      <div
        onClick={() => window.open("https://www.linkedin.com/company/millennium-link/", "_blank")}
        className="bounce-icon"
        style={{ ...iconBaseStyle, bottom: '200px', backgroundColor: '#0077b5' }}
        title="Connect on LinkedIn"
      >
        <FaLinkedin size={26} />
      </div>

      {/* Facebook */}
      <div
        onClick={() => navigate('/coming-soon')}
        className="bounce-icon"
        style={{ ...iconBaseStyle, bottom: '140px', backgroundColor: '#1877f2' }}
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
        style={{ ...iconBaseStyle, bottom: '260px', backgroundColor: '#25D366' }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      <StatsCounter />
      <AboutUs />
      <Customers />
      <Services />
      <Partners />
      <Contact />

      {/* Floating CTA */}
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
      <ScrollToTop />
      <AISchemaManager /> {/* 🤖 Monitors navigation and drops data metrics to search indexers */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/epabx" element={<EpabxIntercom />} />
          <Route path="/services/cctv" element={<Cctv />} />
          <Route path="/services/biometric" element={<Biometrics />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/coming-soon" element={<SocialComingSoon />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;