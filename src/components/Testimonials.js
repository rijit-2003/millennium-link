import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Installation was neat and completed on time. Support after installation was very responsive.",
      name: "Apartment Secretary",
      location: "Salt Lake"
    },
    {
      text: "Reliable CCTV setup with proper guidance. The team ensured everything worked smoothly.",
      name: "Office Admin",
      location: "Kolkata"
    },
    {
      text: "Professional EPABX installation and clear communication throughout the project.",
      name: "School Management",
      location: "South Kolkata"
    },
    {
      text: "Very clean wiring and proper explanation of the system. Highly recommended.",
      name: "Retail Store Owner",
      location: "North Kolkata"
    }
  ];

  // duplicate for infinite effect
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section">
      <div className="container">

        <h2 className="testimonials-title">What Our Clients Say</h2>

        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {loop.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">“{t.text}”</p>

                <div className="testimonial-author">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}