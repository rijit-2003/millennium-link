// src/components/AboutUs.jsx
import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

function AboutUs() {
  const [visionOpen, setVisionOpen] = useState(false);
  const visionDialogRef = useRef(null);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setVisionOpen(false);
    if (visionOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visionOpen]);

  // Focus modal on open
  useEffect(() => {
    if (visionOpen && visionDialogRef.current) visionDialogRef.current.focus();
  }, [visionOpen]);

  return (
    <section id="about" className="about-section py-5" style={{ scrollMarginTop: "100px" }}>
      <div className="container text-center">
        <div className="col-md-8 mx-auto">
          <h1>About Us</h1>
          {/* Company Credentials & Expertise Section */}
          <div className="company-highlight mt-5">
            <h3 className="company-title">Our Expertise & Achievements</h3>
            <p className="company-text">
              Millennium Link is a registered <strong>MSME (Micro, Small, and Medium Enterprise)</strong>
              under the Government of India and holds all the necessary trade licenses to operate in telecom,
              security, and automation domains. Our compliance with industry standards ensures that every
              project we deliver is backed by professionalism, accountability, and reliability.
            </p>
            <p className="company-text">
              With over two decades of experience, we’ve successfully implemented solutions across
              <strong> residential complexes, businesses, and institutions</strong>. Our expertise spans
              <strong> intercom systems, EPABX, CCTV surveillance, biometric access control,</strong> and
              <strong> telephone infrastructure</strong>. Numerous repeat customers and long-standing
              partnerships testify to our reputation for quality, innovation, and customer-first service.
            </p>
          </div>

          {/* Founder’s Vision Highlight Box (stays below About text) */}
          <div className="founder-highlight mt-5">
            <h3 className="founder-title">Our Founder’s Vision</h3>
            <p className="founder-quote">
              .
              .
              .
            </p>
            <button
              type="button"
              className="btn btn-info founder-btn"
              onClick={() => setVisionOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={visionOpen ? "true" : "false"}
              aria-controls="vision-dialog"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* FOUNDER'S VISION WINDOW */}
      {visionOpen && (
        <div
          className="vision-overlay"
          role="dialog"
          id="vision-dialog"
          aria-modal="true"
          aria-label="Founder’s Vision"
          onClick={() => setVisionOpen(false)}
        >
          <div
            className="vision-window"
            ref={visionDialogRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="team-close" aria-label="Close vision window" onClick={() => setVisionOpen(false)}>
              ×
            </button>

            <div className="team-header">
              <h2 className="team-title">Our Founder’s Vision</h2>
              <p className="team-subtitle">
                Carrying forward the principles of precision, professionalism, and long-term trust.
              </p>
            </div>

            <div className="vision-body">

              <div className="vision-text">
                <h3 className="vision-name">Mr. Broja Madhab Banerjee</h3>
                <p className="vision-years">Founder • Established 2000</p>
                <p className="vision-paragraph">
                  We deliver reliable telecom and security solutions that actually work in the
                  field — from clean EPABX installations and intercom networks to robust CCTV systems and biometric
                  access setups. Every project was built to last, with practical designs, neat wiring, and timely
                  support, values we continue to follow today.
                </p>
              </div>


            </div>

            <div className="team-footer">
              <button className="btn btn-outline-light" onClick={() => setVisionOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs;
