import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

function ContactUs() {
  const [teamOpen, setTeamOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setTeamOpen(false);
    if (teamOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [teamOpen]);

  useEffect(() => {
    if (teamOpen && dialogRef.current) dialogRef.current.focus();
  }, [teamOpen]);

  // Edit / expand freely
  const team = [
    {
      name: "Bulti Banerjee",
      role: "Proprietor",
      img: "/team/broja.jpg",
      blurb: ""
    },
    {
      name: "Rijit Banerjee",
      role: "Head of Operations",
      img: "/team/nidhi.jpg",
      blurb: ""
    },
    {
      name: "Sk Sirajul Islam",
      role: "Lead Engineer (EPABX)",
      img: "/team/ritwik.jpg",
      blurb: ""
    },
    {
      name: "Goutam Sarkar",
      role: "Cable Operator",
      img: "/team/ananya.jpg",
      blurb: ""
    },
    {
      name: "Biswanath Parui",
      role: "CCTV and Biometrics Engineer",
      img: "/team/soumen.jpg",
      blurb: ""
    },
    {
      name: "Prosanta Naskar",
      role: "Logistics and Cable Operator",
      img: "/team/priya.jpg",
      blurb: ""
    }
  ];

  return (
    <section id="contact" className="contact-section py-5 bg-light" style={{ scrollMarginTop: "100px" }}>
      <div className="container">
        <h1 className="section-title mb-3 text-center">Contact Us</h1>
        <h5 className="text-center mb-4">
          Not sure what's right for you? Write a message or call us and we’ll guide you.
        </h5>

        {/* CTA row with Meet our team (animated modal) */}
        

        <div className="contact-card mx-auto">
          <form
            action="https://formsubmit.co/millenniumlnk@gmail.com"
            method="POST"
            className="contact-form p-4 rounded shadow"
            style={{ backgroundColor: "#f8f9fa" }}
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

            {/* Optional: <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn btn-info w-100">Send Message</button>
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

  <a
    href="https://g.page/r/Cb5Nmau1DpUxEAE/review"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-info meet-team-btn"
  >
    Leave us a review
  </a>
</div>

      {/* Light themed floating Team Window */}
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
