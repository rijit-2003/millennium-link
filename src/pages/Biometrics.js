import React from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';

export default function Biometrics() {
  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>Biometric Systems in Kolkata | Millennium Link</title>
        <meta
          name="description"
          content="Biometric access control in Kolkata: fingerprint, facial recognition, attendance integration, multi-site management and AMC support for offices and schools."
        />
      </Helmet>

      <div className="service-hero">
        <h1>Biometric Systems in Kolkata</h1>
        <p>Fingerprint & facial recognition with accurate attendance and secure access.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>Capabilities</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">1</div>
              <div className="feature-text">Fingerprint & facial recognition devices</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">2</div>
              <div className="feature-text">Attendance tracking with payroll integration</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">3</div>
              <div className="feature-text">Multi-site management & maintenance support</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">4</div>
              <div className="feature-text">Seamless integration with CCTV & access control</div>
            </li>
          </ul>
        </div>

        <div className="service-cta">
          <strong>Upgrade to secure, hassle-free access?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Talk to Us</button>
        </div>
      </div>
    </div>
  );
}
