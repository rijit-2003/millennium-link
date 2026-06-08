// src/pages/ContactUs.js
import React, { useState } from 'react';
import '../components/Contact.css';
import { createClient } from "@supabase/supabase-js";

// Safe reference to environment variables (Vite uses import.meta.env, CRA uses process.env)
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || "https://rqdvbtxvlrhfhrypwrkv.supabase.co";
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || "your-anon-key-here";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function ContactUs() {
  // Form values state management
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  // Handle standard input changes smoothly
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Intercept form submit and push straight to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name: form.name, email: form.email, message: form.message }]);

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" }); // Clean out the fields on completion!
    }
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container">
        <h1 className="section-title mb-4 text-center">Contact Us</h1>
        <h5 className="text-center mb-5">
          Send us a message with your requirements, and we’ll email you a detailed quotation.
        </h5>

        <div className="contact-card mx-auto">
          <form
            onSubmit={handleSubmit}
            className="contact-form p-4 rounded shadow"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={form.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message" 
                rows="4" 
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Dynamic Status Notification Banners */}
            {status === "success" && (
              <div className="alert alert-success py-2 mb-3">
                Message sent successfully! We will email you a detailed quotation shortly.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger py-2 mb-3">{errorMsg}</div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary w-100"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;