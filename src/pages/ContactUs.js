// src/pages/ContactUs.js
import React from 'react';
import '../components/Contact.css';


function ContactUs() {
  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container">
        <h1 className="section-title mb-4 text-center">Contact Us</h1>
        <h5 className="text-center mb-5">
          Send us a message with your requirements, and we’ll email you a detailed quotation.
        </h5>

        <div className="contact-card mx-auto">
          <form
            action="https://formsubmit.co/millenniumlnk@gmail.com"
            method="POST"
            className="contact-form p-4 rounded shadow"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
