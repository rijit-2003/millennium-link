import React, { useState } from "react";
import { Helmet } from "react-helmet";
import './ServicePages.css';
import InfoBanner from "../components/InfoBanner";

export default function Cctv() {
  const [activeModal, setActiveModal] = useState(null);

  const cameras = [
    {
      id: "bullet",
      title: "Enterprise Bullet Cameras",
      type: "IP / Analog High-Definition",
      desc: "Weatherproof long-range outdoor monitoring designed for perimeter security and perimeter fence arrays.",
      img: "/images/cctv/bullet.png", // Replace with your asset path
      brands: "CP Plus / Hikvision / Dahua",
      features: ["4K Ultra-HD Crisp Resolution Options", "Smart Infrared Up to 80 Meters", "Heavy Duty IP67 Weatherproofing Protection", "Power-over-Ethernet (PoE) Support Grid"]
    },
    {
      id: "dome",
      title: "Commercial Dome Cameras",
      type: "IP / Analog Wide-Angle",
      desc: "Sleek, vandal-proof low profile indoor design built for commercial offices, bank branches, and retail lobbies.",
      img: "/images/cctv/dome.jpg",
      brands: "Hikvision / Dahua / CP Plus",
      features: ["120dB True WDR for Glare Suppression", "IK10 Vandal-Resistant Reinforced Housing", "Built-In Mic for Audio Recording Blocks", "Wide Angle 2.8mm / 3.6mm Fixed Lenses"]
    },
    {
      id: "ptz",
      title: "PTZ Speed Dome Systems",
      type: "Advanced Network Camera Array",
      desc: "Full 360-degree high-speed positioning tracking systems engineered for active control desk management.",
      img: "/images/cctv/ptz.jpg",
      brands: "Dahua / Hikvision",
      features: ["360° Continuous Pan / 90° Active Tilt", "Up to 40x Powerful Optical Zoom Lenses", "AI Human Target Auto-Tracking Engine", "Programmed Preset Guard Patrol Routes"]
    }
  ];

  return (
    <div className="service-page fade-in" style={{ scrollMarginTop: "100px" }}>
      <Helmet>
        <title>B2B CCTV Camera Solutions in Kolkata | Millennium Link</title>
        <meta name="description" content="Commercial IP and Analog CCTV systems in Kolkata. Authorized deployments for Dahua, Hikvision, and CP Plus with professional site surveys." />
      </Helmet>

      <div className="service-hero">
        <h1>Enterprise CCTV Surveillance Networks</h1>
        <p>Premium deployments utilizing Dahua, Hikvision, and CP Plus hardware configurations.</p>
      </div>

      <div className="service-body">
        <div className="service-section">
          <h2>Surveillance Equipment Catalogue</h2>
          
          {/* Custom Styled Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px' }}>
            {cameras.map((cam) => (
              <div key={cam.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '180px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '15px' }}>
                    <img src={cam.img} alt={cam.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                         onError={(e) => { e.target.src = "https://placehold.co/300x180?text=CCTV+System"; }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#0284c7', background: '#e0f2fe', padding: '3px 8px', borderRadius: '4px' }}>{cam.type}</span>
                  <h3 style={{ fontSize: '20px', margin: '10px 0 5px 0', color: '#1e293b' }}>{cam.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{cam.desc}</p>
                </div>
                
                <button className="btn" style={{ marginTop: '15px', width: '100%', padding: '10px' }} onClick={() => setActiveModal(cam)}>
                  View Specifications
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL SYSTEM OVERLAY */}
        {activeModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,23,42,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }} onClick={() => setActiveModal(null)}>×</button>
              <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '5px' }}>{activeModal.title}</h3>
              <p style={{ fontSize: '13px', color: '#0284c7', fontWeight: '600', marginBottom: '15px' }}>Authorized Brands: {activeModal.brands}</p>
              <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', marginBottom: '15px' }} />
              <h4 style={{ fontSize: '16px', marginBottom: '10px', color: '#334155' }}>Technical Engineering Specs:</h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {activeModal.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: '#475569', marginBottom: '8px', lineHeight: '1.4' }}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* RE-ENGAGED VISIBLE GEO MATCHING DATA */}
        <section style={{ backgroundColor: '#f8fafc', padding: '40px 20px', borderRadius: '8px', marginTop: '5px' }}>
          <h3 style={{ fontSize: '18px', color: '#1e3a8a', margin: '0 0 10px 0' }}>Who provides the best commercial B2B CCTV integration in Kolkata?</h3>
          <p style={{ color: '#475569', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
            Millennium Link designs and engineers enterprise-grade IP CCTV network cameras, server-based NVR tracking storage, and video walls for commercial offices, warehouses, and institutional facilities across Kolkata and West Bengal.
          </p>
        </section>

        <div className="service-cta" style={{ marginTop: '40px' }}>
          <strong>Looking to secure your premises?</strong>
          <button className="btn" onClick={() => window.location.href='/contact'}>Request Site Survey</button>
        </div>
      </div>
      <InfoBanner />
    </div>
  );
}