import { useState } from "react";
import { profile } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import { EmailIcon, PhoneIcon, LinkedInIcon } from "./Icons";

export default function Contact({ onToast }) {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    onToast("Opening your email app…");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-desc">
          Interested in hiring or collaborating? I&apos;d love to hear from you.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-item">
              <EmailIcon />
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="contact-item">
              <PhoneIcon />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                className="contact-item"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-resume-icon" aria-hidden="true">
                  PDF
                </span>
                Download Resume
              </a>
            )}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
