import React from "react";
import "./Services.css";

function Services() {
    return (
        <section id="services" className="services-section py-5 bg-light text-center" style={{ scrollMarginTop: '100px' }}>
  <h1>Our Services</h1>
  <div className="container">
    <div className="row justify-content-center">

      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px' }}>
          <img src="/telephone.png" className="card-img-top" alt="..." style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">EPABX & Intercom Systems</h5>
            <p className="card-text">
              We specialize in Intercom and EPABX systems, providing reliable communication solutions for large institutions such as banks, schools, and corporate offices.
            </p>
            <a
              href="/sl2100.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info"
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px'}}>
          <img src="/cctv.png" className="card-img-top" alt="..." style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">CCTV Cameras</h5>
            <p className="card-text">
              We offer advanced CCTV surveillance solutions designed to enhance security for residential complexes, commercial spaces, and institutional campuses.
            </p>
            <a
              href="/cameracatalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info"
            >
              View Catalogue
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm card-hover" style={{ borderRadius: '20px'}}>
          <img src="/biometric.png" className="card-img-top" alt="..." style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">Biometric Systems</h5>
            <p className="card-text">
              Our biometric access control systems ensure secure, hassle-free authentication, ideal for offices, educational institutions, and high-security environments.
            </p>
            <a
              href="/essl.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info"
            >
              View Catalogue
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    );
}

export default Services;