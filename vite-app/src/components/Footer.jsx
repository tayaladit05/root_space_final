import React, { useState } from 'react';

const ROOTSPACE_EMAIL = 'rootspaceofficial@gmail.com';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.1a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M5.35 8.72H2.24V22h3.11V8.72ZM3.8 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm7 6.72H7.82V22h3.1v-6.57c0-1.74.33-3.42 2.49-3.42 2.12 0 2.15 1.98 2.15 3.53V22h3.1v-7.29c0-3.58-.77-6.33-4.95-6.33-2.01 0-3.36 1.1-3.91 2.15h-.04l.04-1.81Z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12.04 2a9.82 9.82 0 0 0-8.5 14.76L2.18 22l5.36-1.33A9.85 9.85 0 1 0 12.04 2Zm0 1.98a7.87 7.87 0 1 1 0 15.74 7.8 7.8 0 0 1-3.98-1.09l-.38-.22-3.05.76.78-2.97-.25-.4a7.87 7.87 0 0 1 6.88-11.82Zm-3.3 3.86c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.76 2.82 4.35 3.84 2.15.84 2.6.67 3.07.63.47-.04 1.52-.62 1.73-1.22.22-.6.22-1.11.15-1.22-.06-.11-.24-.17-.51-.3-.28-.14-1.62-.8-1.87-.89-.25-.09-.44-.13-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.74-1.38-1.65-1.54-1.93-.16-.27-.02-.42.12-.56.13-.12.28-.32.42-.48.14-.16.18-.27.27-.45.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.86-2.06-.22-.54-.45-.46-.62-.47h-.53Z" />
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
    const fullName = form.fullName.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!fullName || !email || !message) {
      return;
    }

    const subject = encodeURIComponent('Rootspace website enquiry');
    const body = encodeURIComponent(
      [
        `Name: ${fullName}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n')
    );

    window.location.href = `mailto:${ROOTSPACE_EMAIL}?subject=${subject}&body=${body}`;
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
                required
                value={form.fullName}
                onChange={updateField('fullName')}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                required
                value={form.email}
                onChange={updateField('email')}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                required
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
              <a href="#">
                A-46, Manipuram Colony, Char Imli, Bittan Market, Bhopal - 462016
              </a>
            </div>
            <div className="rootspace-footer__detail rootspace-footer__detail--email">
              <div className="rootspace-footer__label">Email</div>
              <a href={`mailto:${ROOTSPACE_EMAIL}`}>{ROOTSPACE_EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="rootspace-footer__bottom">
          <nav className="rootspace-footer__socials" aria-label="Social links">
            <a href="https://www.instagram.com/the_root_space/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/root-space-official/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
              <span>Linkedin</span>
            </a>
            <a href="https://wa.me/919755597560" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
              <span>WhatsApp</span>
            </a>
          </nav>

          <div className="rootspace-footer__logo-wrap">
            <img src="/assets/rootspace_logo.png" alt="Rootspace" className="rootspace-footer__logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
