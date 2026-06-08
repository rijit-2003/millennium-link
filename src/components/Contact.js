import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { createClient } from "@supabase/supabase-js";

// Best Practice: Use environment variables instead of hardcoding keys
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL 
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY 

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function ContactUs() {
  const [teamOpen, setTeamOpen] = useState(false);
  const dialogRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Fixed useEffect to properly manage adding and removing event listeners
  useEffect(() => {
    if (!teamOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setTeamOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [teamOpen]);

  useEffect(() => {
    if (teamOpen && dialogRef.current) dialogRef.current.focus();
  }, [teamOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
      setForm({ name: "", email: "", message: "" });
    }
  };

  const team = [
    { name: "Bulti Banerjee", role: "Proprietor", img: "/team/broja.jpg", blurb: "" },
    { name: "Rijit Banerjee", role: "Head of Operations", img: "/team/nidhi.jpg", blurb: "" },
    { name: "Sk Sirajul Islam", role: "Lead Engineer (EPABX)", img: "/team/ritwik.jpg", blurb: "" },
    { name: "Goutam Sarkar", role: "Cable Operator", img: "/team/ananya.jpg", blurb: "" },
    { name: "Biswanath Parui", role: "CCTV and Biometrics Engineer", img: "/team/soumen.jpg", blurb: "" },
    { name: "Prosanta Naskar", role: "Logistics and Cable Operator", img: "/team/priya.jpg", blurb: "" },
  ];

  return (
    <section id="contact" className="contact-section py-5 bg-light" style={{ scrollMarginTop: "100px" }}>
      <div className="container">
        <h1 className="section-title mb-3 text-center">Contact Us</h1>
        <h5 className="text-center mb-4">
          Not sure what's right for you? Write a message or call us and we'll guide you.
        </h5>

        <div className="contact-card mx-auto">
          <form
            onSubmit={handleSubmit}
            className="contact-form p-4 rounded shadow"
            style={{ backgroundColor: "#f8f9fa" }}
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

            {status === "success" && (
              <div className="alert alert-success py-2 mb-3">
                Message sent! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger py-2 mb-3">{errorMsg}</div>
            )}

            <button
              type="submit"
              className="btn btn-info w-100"
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

      <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap mt-5">
        <button
          type="button"
          className="btn btn-info meet-team-btn"
          onClick={() => setTeamOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={teamOpen ? "true" : "false"}
          aria-controls="contact-team-dialog"
        >
          Meet our team
        </button>
        
        {/* FIXED: Added missing opening <a> tag here */}
        <a
          href="https://g.page/r/Cb5Nmau1DpUxEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info meet-team-btn"
        >
          Leave us a review
        </a>
      </div>

      {teamOpen && (
        <div
          className="ct-team-overlay"
          role="dialog"
          id="contact-team-dialog"
          aria-modal="true"
          aria-label="Our Team"
          onClick={() => setTeamOpen(false)}
        >
          <div
            className="ct-team-window"
            ref={dialogRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="ct-team-close" aria-label="Close team window" onClick={() => setTeamOpen(false)}>
              ×
            </button>
            <div className="ct-team-header">
              <h2 className="ct-team-title">Meet the Team</h2>
              <p className="ct-team-subtitle">The people behind secure, reliable installations.</p>
            </div>
            <div className="ct-team-grid">
              {team.map((m, idx) => (
                <article
                  key={m.name}
                  className="ct-team-card no-avatar"
                  style={{ animationDelay: `${120 + idx * 90}ms` }}
                >
                  <div className="ct-team-info">
                    <h3 className="ct-team-name">{m.name}</h3>
                    <p className="ct-team-role">{m.role}</p>
                    <p className="ct-team-blurb">{m.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactUs;