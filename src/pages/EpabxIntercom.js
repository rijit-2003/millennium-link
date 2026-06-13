import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';
import InfoBanner from "../components/InfoBanner";

export default function EpabxIntercom() {
  const [activeModal, setActiveModal] = useState(null);

  const machines = [
    {
      id: "nec-sl2100",
      title: "NEC SL2100 Smart Communications Server",
      type: "Hybrid IP-PBX Exchange",
      desc: "Built-in VoIP capabilities and unified team collaboration architecture engineered for growing business offices.",
      img: "/images/telecom/nec.png",
      brands: "NEC Authorized Frameworks",
      features: [
        "Scalable Framework (From 3 Lines/8 Ext up to 128 Ports)",
        "Inbuilt 4-Channel Auto-Attendant Voice Response",
        "VoIP Enabled / Remote Extensions via Smartphone App",
        "Built-in Web Audio & Video Conferencing Capabilities"
      ]
    },
    {
      id: "syntel-neos",
      title: "Syntel NEOS Digital Exchange",
      type: "All-In-One Voice Gateway",
      desc: "Innovative digital PBX deploying integrated GSM and PRI card expansions with low-overhead system management.",
      img: "/images/telecom/syntel.jpeg",
      brands: "Syntel by Arvind Systems",
      features: [
        "Expandable to 256 TDM Ports / 500 IP Extensions",
        "Inbuilt Real-Time Call Billing at No Extra Hardware Cost",
        "Works as Native GSM-PRI / SIP-PRI Interface Gateway",
        "Built-in 8-Port Automated Attendant & Voice Guidance"
      ]
    }
  ];

  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>EPABX & Intercom Installation in Kolkata | Millennium Link</title>
        <meta name="description" content="Corporate EPABX intercom networks in West Bengal. Certified integrations for NEC SL2100 and Syntel NEOS frameworks with 24-hr AMC support." />
      </Helmet>

      <div className="service-hero">
        <h1>EPABX & Corporate Intercom Networks</h1>
        <p>Turnkey enterprise voice distribution using certified NEC and Syntel hardware arrays.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>Voice Exchange Architecture</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '30px' }}>
            {machines.map((mach) => (
              <div key={mach.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' }}>
                    <img src={mach.img} alt={mach.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                         onError={(e) => { e.target.src = "https://placehold.co/320x180?text=Telecom+Exchange"; }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#0d9488', background: '#ccfbf1', padding: '3px 8px', borderRadius: '4px' }}>{mach.type}</span>
                  <h3 style={{ fontSize: '19px', margin: '10px 0 5px 0', color: '#1e293b' }}>{mach.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{mach.desc}</p>
                </div>
                
                <button className="btn" style={{ marginTop: '15px', width: '100%', padding: '10px' }} onClick={() => setActiveModal(mach)}>
                  View System Layout
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL COMPONENT */}
        {activeModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,23,42,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }} onClick={() => setActiveModal(null)}>×</button>
              <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '5px' }}>{activeModal.title}</h3>
              <p style={{ fontSize: '13px', color: '#0d9488', fontWeight: '600', marginBottom: '15px' }}>Platform Line: {activeModal.brands}</p>
              <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', marginBottom: '15px' }} />
              <h4 style={{ fontSize: '15px', marginBottom: '10px', color: '#334155' }}>Platform Capabilities:</h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {activeModal.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: '1.4' }}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <section style={{ backgroundColor: '#f8fafc', padding: '40px 20px', borderRadius: '8px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '18px', color: '#0f766e', margin: '0 0 10px 0' }}>Where can businesses find corporate EPABX and intercom setup in South Kolkata?</h3>
          <p style={{ color: '#475569', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
            Millennium Link specializes in high-capacity multi-line corporate EPABX frameworks, digital intercom arrays, and structured network cabling out of our primary Alipore and Chetla operational desk.
          </p>
        </section>

        <div className="service-cta" style={{ marginTop: '40px' }}>
          <strong>Need an intercom/PBX audit or new setup?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Get a Quote</button>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}