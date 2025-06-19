import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5 py-4 text-dark" style={{ backgroundColor: '#0be8f6' }}>
  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-md-6 mb-3">
        <p><strong>Regd. Address:</strong><br />
          A/P 4/C 1 CIT SCHEME CXLIII<br />
          SANKAR BOSE ROAD, CHETLA,<br />
          KOLKATA: 700 027
        </p>
      </div>
      <div className="col-md-6 mb-3">
        {/* <h5>Contact Info</h5> */}
        <p><i className="bi bi-envelope-fill me-2"></i>millenniumlnk@gmail.com</p>
        <p><i className="bi bi-telephone-fill me-2"></i>9830375143</p>
      </div>
    </div>
    <hr className="border-dark" />
    <p className="mb-0">&copy; {new Date().getFullYear()} Millennium Link. All rights reserved.</p>
  </div>
</footer>

  );
}

export default Footer;
