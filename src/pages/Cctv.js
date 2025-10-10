import React from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';

export default function Cctv() {
  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>CCTV Installation in Kolkata | Millennium Link</title>
        <meta
          name="description"
          content="HD & 4K CCTV camera installation in Kolkata with night vision, motion alerts, mobile viewing and AMC support for homes, apartments and businesses."
        />
      </Helmet>

      <div className="service-hero">
        <h1>CCTV Camera Solutions in Kolkata</h1>
        <p>HD/4K cameras, mobile viewing, night vision, and reliable AMC support.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>Our CCTV solutions</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">1</div>
              <div className="feature-text">HD & 4K cameras with remote mobile access</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">2</div>
              <div className="feature-text">Night vision, motion detection & real-time alerts</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">3</div>
              <div className="feature-text">Integration with existing security systems</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">4</div>
              <div className="feature-text">Professional installation & 24-hour AMC support</div>
            </li>
          </ul>
        </div>

        <div className="service-cta">
          <strong>Looking to secure your premises?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Request Site Survey</button>
        </div>
      </div>
    </div>
  );
}
