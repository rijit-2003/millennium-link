import React from 'react'
import "./Contact.css";
function ContactUs() {
    return (
        <section id="contact" className="contact-section py-5 bg-light" style={{ scrollMarginTop: '100px' }}>
            <div className="container">
                <h1 className="section-title mb-4 text-center">Contact Us</h1>
                <h5 className="text-center mb-5">Not sure what's right for you? Write a message or call us and we will ensure you get the best experience.</h5>

                <div className="contact-card mx-auto">
                    <form action="https://formsubmit.co/millenniumlnk@gmail.com" method="POST" className="contact-form p-4 rounded shadow" style={{ backgroundColor: '#f8f9fa' }}>
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

                        {/* Optional: Redirect after submit */}
                        {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}

                        {/* Optional: Disable CAPTCHA */}
                        <input type="hidden" name="_captcha" value="false" />

                        <button type="submit" className="btn btn-info w-100">Send Message</button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;

