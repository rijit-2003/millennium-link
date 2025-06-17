// src/components/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // optional for custom styling

function AboutUs() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container text-center">
        <div className="col-md-8 mx-auto">
            {/* <img src="/hero.png"/> */}
          <h1>About Us</h1>
          <p className="fs-5">
  Millennium Link was founded in the year 2000 by <strong>Mr. Broja Madhab Banerjee</strong>, a seasoned expert with over a decade of experience in voice communication and office automation. His vision and leadership laid the groundwork for a company built on precision, professionalism, and long-lasting customer relationships.
</p>
<p className="fs-5">
  Over the past two decades, we’ve become a trusted provider of telecom and security solutions. From intercom and EPABX systems to CCTV cameras, biometric devices, and telephone installations, our services are tailored to meet the unique needs of homes, businesses, and institutions. A consistently high repeat customer rate reflects the satisfaction and confidence our clients place in us.
</p>

          
        </div>
      </div>
    </section>
  );
}


export default AboutUs;
