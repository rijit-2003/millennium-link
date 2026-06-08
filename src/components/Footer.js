import React from "react";
import './Footer.css'; // 👈 import the CSS

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* Address */}
          <div className="col-md-6 mb-3">
            <p>
              <strong>Regd. Address:</strong><br />
              A/P 4/C 1 CIT SCHEME CXLIII<br />
              SANKAR BOSE ROAD, CHETLA,<br />
              KOLKATA: 700 027
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-6 mb-3 contact-info">
            <p>
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:millenniumlnk@gmail.com">millenniumlnk@gmail.com</a>
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i>
              <a href="tel:+919830375143">9830375143 : : </a>
              <i className="bi bi-telephone-fill"></i>
              <a href="tel:+919830375143">9674818803</a>
            </p>
          </div>
        </div>

        <hr />
        <p className="copyright mb-0">
          &copy; {new Date().getFullYear()} Millennium Link. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
