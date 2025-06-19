// src/components/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // optional for custom styling

function AboutUs() {
  return (
    <section id="about" className="about-section py-5" style={{ scrollMarginTop: '100px' }}>
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
<p className="fs-5">At Millennium Link, we take pride in being a registered <strong>MSME</strong> (Micro, Small, and Medium Enterprise) under the Government of India. This recognition not only reflects our commitment to quality and growth but also empowers us to deliver innovative and affordable technology solutions to our clients. As an MSME, we are eligible for various government-backed benefits, which help us stay competitive and continuously improve our offerings. Whether it’s telecommunications, surveillance, or biometric systems, we bring the same passion and precision to every project — with the agility and dedication that define successful MSMEs.

</p>

          
        </div>
      </div>
    </section>
  );
}


export default AboutUs;
