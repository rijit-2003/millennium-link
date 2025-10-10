import React from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';
import InfoBanner from "../components/InfoBanner";

export default function EpabxIntercom() {
  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>EPABX & Intercom Systems in Kolkata | Millennium Link</title>
        <meta
          name="description"
          content="Millennium Link provides reliable EPABX and Intercom systems in Kolkata for banks, schools, housing societies and corporate offices with AMC support."
        />
      </Helmet>

      <div className="service-hero">
        <h1>EPABX & Intercom Systems in Kolkata</h1>
        <p>Seamless internal communication for banks, schools, housing societies & offices.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>What we deliver</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">1</div>
              <div className="feature-text">Multi-tenant PBX & Intercom setup</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">2</div>
              <div className="feature-text">VoIP & PSTN integration</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">3</div>
              <div className="feature-text">Annual Maintenance Contracts (24-hour response)</div>
            </li>
            <li className="feature-item">
              <div className="feature-icon">4</div>
              <div className="feature-text">System upgrades, repairs & troubleshooting</div>
            </li>
          </ul>
        </div>

        <div className="service-cta">
          <strong>Need an intercom/PBX audit or new setup?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Get a Quote</button>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}
