import React from "react";
import "./InfoBanner.css";

export default function InfoBanner() {
  return (
    <div className="info-banner" role="note" aria-label="More product info">
      <div className="ib-inner">
        <div className="ib-icon" aria-hidden="true">
          {/* minimal info icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 10.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
          </svg>
        </div>

        <p className="ib-text">
          To explore product categories and detailed notes, visit our knowledge site.
        </p>

        <a
          className="ib-cta"
          href="https://www.millenniumlink.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Info Website
        </a>
      </div>
    </div>
  );
}
