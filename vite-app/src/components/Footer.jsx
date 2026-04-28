import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RootspaceLogo = () => (
  <img src="/assets/rootspace_logo.png" alt="FIND" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="footer_wrapper__9GQwi">
      <div className="container_container__v5gtR">
        <div className="footer_content__E2ijt">
          <div className="footer_newsletter-container__POI_T">
            <div>
              <div className="footer_newsletter-title__bRCRZ">Subscribe to our Newsletter!</div>
              <div className="footer_newsletter-form__0k_h5">
                <form onSubmit={handleSubmit}>
                  <div className="footer_input-container__K2c_A">
                    <div className="form-text-input_form-input__5AJnT">
                      <div className="text-input_input-wrapper__ia6GQ form-text-input_input-wrapper__Aw_YD footer_input-wrapper__1l5CZ text-input_dark__c1u8L">
                        <input
                          type="email"
                          className="text-input_input__cs4B0"
                          placeholder="Enter address"
                          autoComplete="on"
                          name="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <button id="btn_newsletter_signup_footer" type="submit" className="footer_newsletter-submit-btn__HrC3v">
                      <ArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer_contacts__HFiAl">
              <div data-contact="address" className="footer_contact__fFxbr">
                <div className="footer_contact-label__gYKsP">Head Office</div>
                <div className="footer_contact-value__e1jbK">
                  <a href="geo:40.75104385252497,-73.98395637414475">
                    <div>A-46, Manipuram Colony, Char Imli, Bittan Market,</div>
                    <div>Bhopal - 462016</div>
                  </a>
                </div>
              </div>
              <div data-contact="email" className="footer_contact__fFxbr">
                <div className="footer_contact-label__gYKsP">Email Us</div>
                <div className="footer_contact-value__e1jbK">
                  <a href="mailto:rootspaceofficial@gmail.com">rootspaceofficial@gmail.com</a>
                </div>
              </div>
              <div data-contact="phone" className="footer_contact__fFxbr">
                <div className="footer_contact-label__gYKsP">Call Us</div>
                <div className="footer_contact-value__e1jbK">
                  <a href="tel:+919755597560"><span>+91 9755 597 560</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer_links__vib46">
            <div className="footer_nav__XkBHY">
              <Link className="footer_nav-link__LFUNG" to="/search"><span data-text="Search">Search</span></Link>
              <Link className="footer_nav-link__LFUNG" to="/agents"><span data-text="Agents">Agents</span></Link>
              <Link className="footer_nav-link__LFUNG" to="/join"><span data-text="Join">Join</span></Link>
              <Link className="footer_nav-link__LFUNG" to="/about"><span data-text="About Us">About Us</span></Link>
              <a className="footer_nav-link__LFUNG" href="https://app.findrealestate.com/authentication/sign-in" target="_blank" rel="noopener noreferrer">
                <span data-text="Agent Portal">Agent Portal</span>
              </a>
            </div>
            <div className="footer_socials__4JfcA">
              <a href="https://facebook.com/findrealestate.hq" target="_blank" rel="noopener noreferrer" className="footer_social-link__2uQBq">Facebook</a>
              <a href="https://www.instagram.com/findrealestate.hq" target="_blank" rel="noopener noreferrer" className="footer_social-link__2uQBq">Instagram</a>
              <a href="https://www.youtube.com/@findrealestate_hq" target="_blank" rel="noopener noreferrer" className="footer_social-link__2uQBq">Youtube</a>
              <a href="https://www.linkedin.com/company/oxford-property-group" target="_blank" rel="noopener noreferrer" className="footer_social-link__2uQBq">Linkedin</a>
            </div>
          </div>

          <div className="footer_logo__5ncK8">
            <RootspaceLogo />
          </div>

          <div className="footer_copyright-container__yt1ht">
            <div className="footer_sublinks__Pj_ed">
              <Link to="/terms-of-service">Terms</Link>
              <Link to="/privacy-policy">Privacy policy</Link>
              <a target="_blank" href="https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf" rel="noopener noreferrer">Fair Housing Notice</a>
              <Link to="/operating-procedure">Operating Procedure</Link>
              <Link to="/press-and-media">Press</Link>
              <span>Housing Choice Vouchers Welcome</span>
              <span>Se Aceptan Vales de Elección de Vivienda</span>
            </div>
            <div>Rootspace</div>
            <div>Copyright © 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}
