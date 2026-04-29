import React, { useState } from 'react';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061" />
  </svg>
);

export default function Footer() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({ fullName: '', email: '', message: '' });
  };

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  return (
    <footer className="rootspace-footer">
      <div className="container_container__v5gtR">
        <div className="rootspace-footer__panel">
          <div className="rootspace-footer__intro">
            <div className="rootspace-footer__eyebrow">Contact Us</div>
            <h2>Let's Connect</h2>
            <form className="rootspace-footer__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                autoComplete="name"
                value={form.fullName}
                onChange={updateField('fullName')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                value={form.email}
                onChange={updateField('email')}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={updateField('message')}
              />
              <button type="submit" aria-label="Submit email">
                <span>Send Message</span>
                <ArrowRight />
              </button>
            </form>
          </div>

          <div className="rootspace-footer__details">
            <div className="rootspace-footer__detail rootspace-footer__detail--phone">
              <div className="rootspace-footer__label">Call Now</div>
              <a href="tel:+919755597560">+91 9755 597 560</a>
            </div>
            <div className="rootspace-footer__detail rootspace-footer__detail--address">
              <div className="rootspace-footer__label">Address</div>
              <a href="geo:40.75104385252497,-73.98395637414475">
                A-46, Manipuram Colony, Char Imli, Bittan Market, Bhopal - 462016
              </a>
            </div>
            <div className="rootspace-footer__detail rootspace-footer__detail--email">
              <div className="rootspace-footer__label">Email</div>
              <a href="mailto:rootspaceofficial@gmail.com">rootspaceofficial@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="rootspace-footer__bottom">
          <nav className="rootspace-footer__socials" aria-label="Social links">
            <a href="https://facebook.com/findrealestate.hq" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/findrealestate.hq" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@findrealestate_hq" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://www.linkedin.com/company/oxford-property-group" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </nav>

          <div className="rootspace-footer__logo-wrap">
            <img src="/assets/rootspace_logo.png" alt="Rootspace" className="rootspace-footer__logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
