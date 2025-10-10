// src/components/InfoBanner.js
import React from "react";
import "./InfoBanner.css"; // separate CSS file for banner

export default function InfoBanner() {
  return (
    <div className="info-banner">
      <p>
        To know more about the product categories, visit-----{"    "}
        <a
          href="https://www.millenniumlink.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.millenniumlink.info
        </a>
      </p>
    </div>
  );
}
