import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RootspaceLogo = () => (
  <img src="/assets/rootspace_logo.png" alt="FIND" style={{ height: "40px", width: "auto", objectFit: "contain" }} />
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fillRule="evenodd" d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005" clipRule="evenodd"/>
  </svg>
);

const paperworkLinks = [
  { label: 'Operating Procedure', to: '/operating-procedure' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

const resourcesLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Press & Media', to: '/press-and-media' },
];

const aboutLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Certified Agents', to: '/certified-agents' },
];

function DropdownNav({ label, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="header_nav-item__Wn05d"
        style={{ cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span data-text={label}>{label}</span>
        <div className="header_nav-arrow__c0sU_"><ChevronDown /></div>
        {open && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: '#fff',
            border: '1px solid #eee',
            borderRadius: '8px',
            padding: '8px 0',
            minWidth: '200px',
            zIndex: 9999,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Header({ color = 'transparent' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header_wrapper__MJ5bn${color === 'transparent' ? ' header_transparent__rCyyn' : ''}`}>
      <div className="container_container__v5gtR">
        <div className="header_content__cVJDb">
          <div className="header_logo__LO_Jk">
            <Link to="/"><RootspaceLogo /></Link>
          </div>
          <nav className="header_nav__if_jI">
            <div className="header_nav-item__Wn05d">
              <Link to="/search"><span data-text="Search">Search</span></Link>
            </div>
            <div className="header_nav-item__Wn05d">
              <Link to="/agents"><span data-text="Agents">Agents</span></Link>
            </div>
            <div className="header_nav-item__Wn05d">
              <Link to="/join"><span data-text="Join">Join</span></Link>
            </div>
            <DropdownNav label="Paperwork" links={paperworkLinks} />
            <DropdownNav label="Resources" links={resourcesLinks} />
            <DropdownNav label="About" links={aboutLinks} />
          </nav>
          <div className="header_actions__Sv09J">
            <a className="button_button-round__TFjlU button_color-primary__JJ7Hh" href="https://app.findrealestate.com/authentication/sign-in" target="_blank" rel="noopener noreferrer">
              <div className="button_content__6Zh3n">
                <div className="button_button-round-text__IEwW5">
                  <span data-text="Sign In">Sign In</span>
                </div>
              </div>
            </a>
          </div>
          <button
            className={`burger-btn_btn__IvzqD header_burger-control__YR_x_${menuOpen ? ' burger-btn_active__' : ''}`}
            aria-label="Menu control"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Burger Menu */}
      <div className={`burger-menu_wrapper__gKR7D${menuOpen ? ' burger-menu_open__' : ''}`} style={{ paddingTop: 0 }}>
        <div className="burger-menu_backdrop__wfXK5" onClick={() => setMenuOpen(false)}></div>
        <div className="burger-menu_content__rv4kf">
          <nav className="burger-menu_nav__dAhwA">
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/search" onClick={() => setMenuOpen(false)}>Search</Link>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/agents" onClick={() => setMenuOpen(false)}>Agents</Link>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/join" onClick={() => setMenuOpen(false)}>Join</Link>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </div>
            <div className="burger-menu_nav-item__mCA9u">
              <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </div>
          </nav>
          <div className="burger-menu_actions__In3qE">
            <a className="button_button-round__TFjlU button_color-primary__JJ7Hh" href="https://app.findrealestate.com/authentication/sign-in" target="_blank" rel="noopener noreferrer">
              <div className="button_content__6Zh3n">
                <div className="button_button-round-text__IEwW5">
                  <span data-text="Sign In">Sign In</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
