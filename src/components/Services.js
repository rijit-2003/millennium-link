import React from "react";
import "./Services.css";
import { FaPhoneAlt } from 'react-icons/fa';
import { GiCctvCamera } from 'react-icons/gi';
import { BsFingerprint } from 'react-icons/bs';

function Services() {
  return (
    <section id="services" className="services-section py-5 bg-light text-center" style={{ scrollMarginTop: '100px' }}>
      <h1>Our Services</h1>
      <div className="container">
        <div className="row justify-content-center">

          {/* Card 1: EPABX */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px' }}>
              <div className="icon-wrapper my-3">
                <FaPhoneAlt size={50} color="#007bff" />
              </div>
              <div className="card-body">
                <h5 className="card-title">EPABX & Intercom Systems</h5>
                <p className="card-text">
                  We specialize in Intercom and EPABX systems, providing reliable communication solutions for large institutions such as banks, schools, and corporate offices.
                </p>
                <a href="/sl2100.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                  View Brochure
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: CCTV */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px' }}>
              <div className="icon-wrapper my-3">
                <GiCctvCamera size={50} color="#007bff" />
              </div>
              <div className="card-body">
                <h5 className="card-title">CCTV Cameras</h5>
                <p className="card-text">
                  We offer advanced CCTV surveillance solutions designed to enhance security for residential complexes, commercial spaces, and institutional campuses.
                </p>
                <a href="/cameracatalogue.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                  View Catalogue
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Biometric */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px' }}>
              <div className="icon-wrapper my-3">
                <BsFingerprint size={50} color="#007bff" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Biometric Systems</h5>
                <p className="card-text">
                  Our biometric access control systems ensure secure, hassle-free authentication, ideal for offices, educational institutions, and high-security environments.
                </p>
                <a href="/essl.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                  View Catalogue
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
