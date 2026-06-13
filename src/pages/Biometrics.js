import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';
import InfoBanner from "../components/InfoBanner";

export default function Biometrics() {
  const [activeModal, setActiveModal] = useState(null);

  const terminals = [
    {
      id: "essl-attendance",
      title: "eSSL Standalone Fingerprint Terminals",
      type: "Time Attendance Console",
      desc: "High capacity fingerprint and proximity card auditing registers optimized for corporate office shifts and clear reporting records.",
      img: "/images/biometrics/fingerprint.jpg",
      brands: "eSSL Security Hardware",
      features: [
        "Scratch-Resistant 500 DPI Optical Scan Sensor",
        "Massive Memory Logs (Up to 10,000 Fingerprint Templates)",
        "Push Data Network Link Architecture (TCP/IP & USB Host)",
        "Fully Syncs with eTimeTrackLite Software Infrastructure"
      ]
    },
    {
      id: "essl-access",
      title: "eSSL Integrated Face Recognition Access Control",
      type: "Touchless Access Node",
      desc: "Next-gen biometrics featuring instant identity verification combined with direct electromagnetic lock controllers.",
      img: "/images/biometrics/facial.png",
      brands: "eSSL Identity Infrastructure",
      features: [
        "Sub-1 Second Visible Light Facial Recognition Response",
        "Deep-Learning Anti-Spoofing Visual Print Attack Filter",
        "Direct Interface Relay for 3rd Party EM Door Locks",
        "Built-In Battery Backup Configurations for Power Uptime"
      ]
    }
  ];

  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>Biometric Access Control & Attendance Kolkata | Millennium Link</title>
        <meta name="description" content="Secure biometric fingerprint and facial recognition access links in Kolkata. Full integration for eSSL terminals, electromagnetic door locks, and attendance systems." />
      </Helmet>

      <div className="service-hero">
        <h1>Biometric Identification & Access Controls</h1>
        <p>Authorized corporate eSSL system deployments with synchronized automated door controls.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>Identity & Entryway Terminals</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '30px' }}>
            {terminals.map((term) => (
              <div key={term.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' }}>
                    <img src={term.img} alt={term.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                         onError={(e) => { e.target.src = "https://placehold.co/320x180?text=Biometric+Terminal"; }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#4f46e5', background: '#e0e7ff', padding: '3px 8px', borderRadius: '4px' }}>{term.type}</span>
                  <h3 style={{ fontSize: '19px', margin: '10px 0 5px 0', color: '#1e293b' }}>{term.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{term.desc}</p>
                </div>
                
                <button className="btn" style={{ marginTop: '15px', width: '100%', padding: '10px' }} onClick={() => setActiveModal(term)}>
                  View Device Profiles
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL LAYOUT FOR TERMINALS */}
        {activeModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,23,42,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }} onClick={() => setActiveModal(null)}>×</button>
              <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '5px' }}>{activeModal.title}</h3>
              <p style={{ fontSize: '13px', color: '#4f46e5', fontWeight: '600', marginBottom: '15px' }}>Device Class: {activeModal.brands}</p>
              <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', marginBottom: '15px' }} />
              <h4 style={{ fontSize: '15px', marginBottom: '10px', color: '#334155' }}>Technical Specifications:</h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {activeModal.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: '1.4' }}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <section style={{ backgroundColor: '#f8fafc', padding: '40px 20px', borderRadius: '8px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '18px', color: '#4338ca', margin: '0 0 10px 0' }}>How do biometric access systems improve office stability?</h3>
          <p style={{ color: '#475569', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
            By pairing physical electromagnetic locking mechanisms directly with authenticated digital profiles (Face/Fingerprint/RFID), businesses can manage exact entry logs, protect high-security server rooms, and eliminate proxy attendance tracking entirely.
          </p>
        </section>

        <div className="service-cta" style={{ marginTop: '40px' }}>
          <strong>Upgrade to secure, hassle-free access?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Talk to Us</button>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}