import React from "react";
import "./AboutUs.css";

function AboutUs() {
  const values = [
    "Clean Engineering", "Zero-Downtime Infra",
    "Brand Partnerships", "Active SLA Support"
  ];

  const verticals = [
    { icon: "🏦", title: "Banking & Financial", desc: "Secure vaults, server surveillance, multi-point biometric authentication." },
    { icon: "🏫", title: "Educational Institutions", desc: "Campus-wide intercom networks, perimeter monitoring, student-safety tracking." },
    { icon: "🏢", title: "Corporate & Real Estate", desc: "High-capacity commercial PBX infrastructure and residential access setups." },
  ];

  return (
    <section id="about" className="ab-section" style={{ scrollMarginTop: "100px" }}>
      <div className="ab-wrap">

        {/* Header */}
        <div className="ab-header">
          <div>
            <div className="ab-eyebrow">Since 2000 · Kolkata, West Bengal</div>
            <h1 className="ab-title">About<br /><span>Millennium</span> Link</h1>
          </div>
          <p className="ab-desc">
            We design, deploy, and maintain <strong>engineering-grade communication and surveillance</strong> network architectures for high-traffic environments across West Bengal.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="ab-badges">
          <div className="ab-badge">
            <span className="ab-badge-icon">🛡️</span>
            <h5>Government Registered</h5>
            <p>Officially recognized vendor with full statutory compliance.</p>
            <div className="ab-badge-tag">UDYAM-WB-10-0196820</div>
            <div className="ab-badge-tag">GSTIN: 19FNAPB6459N1ZH</div>
          </div>
          <div className="ab-badge">
            <span className="ab-badge-icon">🏛️</span>
            <h5>GeM Registered</h5>
            <p>Onboarded on the Government e-Marketplace for seamless public sector procurement.</p>
          </div>
          <div className="ab-badge">
            <span className="ab-badge-icon">📍</span>
            <h5>Pan-Bengal Presence</h5>
            <p>Headquartered in Kolkata with a dedicated post-sales support engineer network statewide.</p>
          </div>
        </div>

        {/* Profile + Verticals */}
        <div className="ab-bottom">
          <div className="ab-profile">
            <h2>Who We Are</h2>
            <p className="ab-lead">Turnkey project executions spanning complex EPABX arrays, corporate CCTV structures, biometric security, and telephone line infrastructures.</p>
            <p className="ab-body">With over 25 years of field experience, our team delivers end-to-end solutions — from initial site survey to commissioning and active SLA maintenance.</p>
            <div className="ab-values">
              {values.map(v => (
                <div className="ab-value" key={v}>
                  <span className="ab-value-dot"></span>{v}
                </div>
              ))}
            </div>
          </div>

          <div className="ab-verticals">
            <h4>Vertical Solutions</h4>
            {verticals.map(v => (
              <div className="ab-vertical" key={v.title}>
                <div className="ab-vert-icon">{v.icon}</div>
                <div className="ab-vert-text">
                  <h6>{v.title}</h6>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;