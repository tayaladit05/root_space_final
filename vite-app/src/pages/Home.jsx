import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const RootspaceLogo = () => (
  <img src="/assets/rootspace_logo.png" alt="FIND" style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "contain" }} />
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061" />
  </svg>
);

const testimonials = [
  { quote: '"Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He\'s a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!"', author: 'Bernadette Hogan' },
  { quote: '"Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams."', author: 'Tyleen' },
  { quote: '"Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself who may feel overwhelmed by the process."', author: 'Johanna Nieto' },
];

const blogPosts = [
  { slug: 'Q1-2026-NYC-Market-Report', date: '2026-04-13', title: 'Q1 2026 NYC Market Report', brief: "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market.", thumb: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/medium_nyc_604e40fa02.png' },
  { slug: 'blog-post-1', date: '2026-04-01', title: 'Philly Real Estate: A Winter Chill or a Spring Opportunity?', brief: 'Record-low listings and steady price growth define a unique February for the Philadelphia Metro.', thumb: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/medium_jonathan_gong_tl3jdt_Z_u_YM_unsplash_5f055e7e75.jpg' },
  { slug: 'What-1M-Buys-in-Different-NYC-Neighborhoods', date: '2026-03-09', title: 'What $1M Buys in Different NYC Neighborhoods', brief: "Curious what $1M can still buy in today's NYC market? Explore a snapshot of available listings across Manhattan.", thumb: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/medium_gregreese_building_6662138_1920_96e6ea69b1.jpg' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [arrowsInView, setArrowsInView] = React.useState(false);
  const arrowsSectionRef = React.useRef(null);
  const heroSectionRef = React.useRef(null);
  const whyVideoRef = React.useRef(null);
  const whySectionRef = React.useRef(null);
  const servicesListRef = React.useRef(null);
  const [serviceModal, setServiceModal] = React.useState(null);

  const services = [
    {
      img: '/assets/buy3959.jpg',
      label: 'Common Workstations',
      text: 'Flexible shared seating—walk in and work.',
      longText: "Our Common Workstation service offers a flexible, shared seating setup where members can work comfortably on a first-come, first-served basis. Simply walk in, choose any available chair and workspace, plug in, and get started—no fixed desks, no long-term commitment.",
      duration: '1 MONTH',
      price: '₹ 5,000/-',
      bullets: [
        'Clean table and a chair',
        'High speed internet',
        'Unlimited coffee & water',
        'House keeping service',
        'Separate Clean washrooms for male and female',
        '24/7 security',
        'Common telecom service',
      ],
      related: ['/assets/sell2cef.jpg', '/assets/rent23cd.jpg'],
    },
    {
      img: '/assets/sell2cef.jpg',
      label: 'Dedicated Workstations',
      text: 'Reserved desk + personal workspace.',
      longText: 'Reserved desks and chairs exclusively for you, with bigger desks than commons, high-speed internet, power backup, and access to common amenities for a stable, professional experience.',
      duration: '1 MONTH',
      price: '₹ 10,000/-',
      bullets: [
        'Dedicated table and a chair',
        'High speed internet',
        'Unlimited coffee & water',
        'House keeping service',
        'Separate Clean washrooms for male and female',
        '24/7 security',
        'Common telecom service',
        'Small storage cabinets',
        'Free 20 prints/month',
        'Free PS5 gaming time of 5 hours',
      ],
      related: ['/assets/buy3959.jpg', '/assets/rent23cd.jpg'],
    },
    {
      img: '/assets/rent23cd.jpg',
      label: 'Private Cabins',
      text: 'Fully enclosed cabins for teams.',
      longText: 'Private Cabins are designed for teams and professionals who need privacy and exclusivity. Each cabin offers a fully enclosed space with dedicated desks and chairs, providing a quiet and professional environment for daily operations and meetings.',
      duration: '1 MONTH',
      price: '₹ 20,000/-',
      bullets: [
        'Private cabin',
        'High speed internet',
        'Unlimited coffee & water',
        'House keeping service',
        'Separate Clean washrooms for male and female',
        '24/7 security',
        'Dedicated Telecom',
        'Large storage cabinets',
        'Free 50 prints/month',
        'Free PS5 gaming time of 10 hours',
        'Common assistant to ease your work',
      ],
      related: ['/assets/buy3959.jpg', '/assets/sell2cef.jpg'],
    },
    {
      img: '/assets/rent23cd.jpg',
      label: 'Executive Cabin',
      text: 'Premium private office for leaders.',
      longText: 'The Executive Cabin is our most premium cabin designed for leaders and senior professionals. It features a large executive table with comfortable seating, privacy, and refined ambience.',
      duration: '1 MONTH',
      price: '₹ 40,000/-',
      bullets: [
        'Boss table and chair',
        'High speed internet',
        'Unlimited coffee & water',
        'House keeping service',
        'Separate Clean washrooms for male and female',
        '24/7 security',
        'Dedicated Telecom',
        'Large storage cabinets',
        'Free 50 prints/month',
        'Free PS5 gaming time of 10 hours',
        'Common assistant to ease your work',
        '2 extra work stations for staff',
        'Couches and small table',
      ],
      related: ['/assets/buy3959.jpg', '/assets/sell2cef.jpg'],
    },
  ];

  React.useEffect(() => {
    const node = arrowsSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setArrowsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!arrowsInView) return undefined;

    const titleEm = arrowsSectionRef.current?.querySelector('.arrows-section_title__a4gyt .em');
    if (!titleEm || titleEm.dataset.split) return undefined;

    const text = titleEm.textContent || '';
    const letters = Array.from(text);
    titleEm.innerHTML = letters.map((ch, i) => `<span style="--i:${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
    titleEm.dataset.split = '1';

    return undefined;
  }, [arrowsInView]);

  React.useEffect(() => {
    const node = heroSectionRef.current;
    if (!node) return undefined;

    let rafId = null;

    const updateHeroProgress = () => {
      rafId = null;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? (window.innerHeight - rect.top) / total : 0;
      const progress = Math.min(1, Math.max(0, raw));
      node.style.setProperty('--hero-scroll-progress', progress.toFixed(4));
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(updateHeroProgress);
    };

    updateHeroProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  React.useEffect(() => {
    const node = whyVideoRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = whySectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('visible');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const node = servicesListRef.current;
    if (!node) return undefined;

    const items = Array.from(node.querySelectorAll('.services_item__D_u7g'));
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((el, i) => {
              el.style.transitionDelay = `${i * 120}ms`;
              el.classList.add('service-visible');
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!serviceModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServiceModal(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [serviceModal]);

  return (
    <MainLayout headerColor="transparent">
      {/* Hero */}
      <section
        ref={heroSectionRef}
        className="hero_root__N0Loz hero_scroll-anim"
        style={{ visibility: 'visible' }}
      >
        <div className="hero_top__WegWw">
          <div className="hero_bg__S_r_n">
            <div className="hero_back__8ReFI">
              <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/backdd66.jpg" />
            </div>
            <div className="hero_house__aJy7p">
              <img alt="" loading="eager" decoding="async" style={{ color: 'transparent' }} src="/assets/house8df6.png" />
            </div>
            <div className="hero_composite__3blHB">
              <div className="hero_house__aJy7p">
                <img alt="" loading="eager" decoding="async" style={{ color: 'transparent' }} src="/assets/house8df6.png" />
              </div>
            </div>
            <div className="hero_clouds__bC7V4">
              <div className="hero_cloud__TvA3o"><img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/cloudf791.png" /></div>
              <div className="hero_cloud__TvA3o"><img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src="/assets/cloudf791.png" /></div>
            </div>
            <div className="hero_smoke__8za_R">
              <img alt="" decoding="async" style={{ color: 'transparent' }} src="/assets/smokee68c.png" />
            </div>
          </div>
          <div className="hero_content__DK_Ny">
            <div className="container_container__v5gtR">
              <div className="hero_title__JpmHS"><h1>Work Connect & Belong</h1></div>


            </div>
          </div>
        </div>
        <div>
          
        </div>
      </section>

      {/* Why Us */}
      <section ref={whySectionRef} className="why-us_root__aGsFp">
        <div className="container_container__v5gtR">
          <div className="why-us_grid__RSZoF">
            <div className="why-us_title__N3aCA"><h2>Why Rootspace ?</h2></div>
            <div className="why-us_text__rT1u9">Rootspace is a co working space in Bhopal,{' '}<span className="em">We help you with just opened, one of the best and biggest co working in bhopal.</span></div>
          </div>
          <div className="why-us_preview__OofJt video-anim" ref={whyVideoRef}>
            <video src="/videos/why-us.mp4" autoPlay playsInline loop muted></video>
          </div>
        </div>
      </section>

      {/* Arrows Section */}
      <section
        ref={arrowsSectionRef}
        className={`arrows-section_root__yyPBl ${arrowsInView ? 'arrows-section_visible' : ''}`}
      >
        <div className="container_container__v5gtR">
          <div className="arrows-section_title__a4gyt">
            <h2>This isn't just <span className="em">about desk.</span></h2>
          </div>
          <div className="arrows-section_arrows__BPayV">
            {['/assets/151f4.jpg', '/assets/205bb.jpg', '/assets/38776.jpg', '/assets/4f8fb.jpg'].map((src, i) => (
              <div key={i} className="arrows-section_arrow___KXxg" style={{ transitionDelay: `${i * 120}ms` }}>
                <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src={src} />
              </div>
            ))}
          </div>
          <div className="arrows-section_text__Z1Oii">
            <p>It’s about clarity. Direction. Momentum. Getting unstuck. You’re not just finding a place to work —{' '}<span className="em">You’re finding where you fit.That’s what Rootspace helps you build.</span></p>
          </div>
        </div>
      </section>


     

   
      

      {/* Services */}
      <section className="services_root__Ch_WM">
        <div className="container_container__v5gtR">
          <div className="services_hgrid__9FHyx">
            <div className="services_hgrid-col__9VVDn"><div className="services_caption__Q_j1k">Services</div></div>
            <div className="services_hgrid-col__9VVDn">
              <div className="services_title__eMyhw"><h2><div className="services_title__eMyhw">Rootspace  <br />{' '}<span className="em">helps you RENT</span></div></h2></div>
            </div>
          </div>
        </div>
        <div className="services_items__PESAO" ref={servicesListRef}>
          {services.map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              className="services_item__D_u7g"
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
              onClick={() => setServiceModal(s)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setServiceModal(s);
                }
              }}
            >
              <div className="container_container__v5gtR">
                <div className="services_item-bg___wJGg">
                  <img alt="" loading="lazy" decoding="async" src={s.img} style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover', color: 'transparent' }} />
                </div>
                <div className="services_item-num__QGde9"></div>
                <div className="services_item-text__uKETL"><h3>{s.text}</h3></div>
                <div className="services_item-more__pkhNR">
                  <span>{s.label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.315 10.996h16.623l-.884.707-8.084-8.135h2.526l8.261 8.337-8.286 8.337h-2.526l8.11-8.135.883.708H3.315z" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container_container__v5gtR">
          <div className="services_brief__OJqWD">
            <div>At Rootspace, we support you at every step—with thoughtfully designed spaces,{' '}<span className="em">a driven community, and an environment built for real progress.</span></div>
          </div>
        </div>
      </section>

      {serviceModal && (
        <div className="services-modal_backdrop" role="dialog" aria-modal="true" onClick={() => setServiceModal(null)}>
          <div className="services-modal_panel" onClick={(event) => event.stopPropagation()}>
            <button className="services-modal_close" type="button" onClick={() => setServiceModal(null)} aria-label="Close image">
              ✕
            </button>
            <div className="services-modal_header">
              <div className="services-modal_title">{serviceModal.label}</div>
              <div className="services-modal_text">{serviceModal.longText || serviceModal.text}</div>
            </div>
            <div className="services-modal_media">
              <div style={{ maxWidth: 720, width: '100%' }}>
                <img className="services-modal_image" src={serviceModal.img} alt="" />

                <div style={{ marginTop: '1.6rem' }}>
                  {serviceModal.bullets && (
                    <div>
                      <h4 style={{ margin: '0 0 0.6rem' }}>Includes:</h4>
                      <ul style={{ margin: 0, paddingLeft: '1.4rem' }}>
                        {serviceModal.bullets.map((b, i) => (
                          <li key={i} style={{ marginBottom: '0.4rem' }}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.6rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
                    <div style={{ opacity: 0.9 }}>{serviceModal.duration}</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{serviceModal.price}</div>
                  </div>

                  <div style={{ marginTop: '0.8rem', opacity: 0.7, fontSize: '0.95rem' }}>For single person. 18% GST is additional. Personalised quotations are made based on different time periods and number of people.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <section className="features_root__CCic6">
        <div className="container_container__v5gtR">
          <div className="features_grid__wL0aQ">
            <div>
              <div className="features_title__vVo3d">
                <h2><div>Built<br /> for Work. <span className="em">Designed</span><br /> <span className="em">for Life.</span></div></h2>
              </div>
            </div>
            <div>
              <div className="features_text__Wp8am"><p>Rootspace isn’t just where you work—{' '}<span className="em">it’s where productivity meets comfort,
and ideas grow with the right environment.</span></p></div>
              <div className="features_actions__f8ehB">
                <div>
                  <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh button_inversed__slQcI" to="/services" style={{ display: 'inline-flex' }}>
                    <div className="button_content__6Zh3n">
                      <div className="button_button-round-text__IEwW5"><span data-text="Discover Our Services">Book a Tour </span></div>
                      <span className="button_icon-after__vljdM"><ArrowRight /></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="features_items__oPgtQ">
            {[
              { img: '/assets/mortgage-servicesbcea.jpg', title: 'Private Cabins & Workspaces', text: 'Focus-driven cabins, high-speed WiFi, and a distraction-free setup.' },
              { img: '/assets/property-managementbd2e.jpg', title: 'Conference & Meeting Rooms', text: 'Fully equipped spaces for meetings, presentations, and collaboration.' },
              { img: '/assets/development95f9.jpg', title: 'Amenities & Lifestyle', text: 'PS5 gaming 🎮, cafeteria ☕, chill zones, and a community that keeps you energized.' },
            ].map(f => (
              <div key={f.title} className="features_item__IPG1i">
                <div className="features_item-bg__gntQ1"><img alt={f.title} loading="lazy" decoding="async" style={{ color: 'transparent', width: '100%', height: 'auto' }} src={f.img} /></div>
                <div className="features_item-title__uXmdj"><h3>{f.title}</h3></div>
                <div className="features_item-text__X8po0"><p>{f.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Outro */}
      <section className="outro_root__stMHm">
        <div className="outro_bg__9kU9x">
          <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent', width: '100%', height: 'auto' }} src="/assets/bg786b.jpg" />
        </div>
        <div className="container_container__v5gtR">
          <div className="outro_title__Eqbbj"><h2>Find You. <span className="em">We'll Help You Get There.</span></h2></div>
          <div className="outro_actions__qfUxG">
            <div style={{ visibility: 'visible' }}>
              <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh button_inversed__slQcI" to="/search" style={{ display: 'inline-flex' }}>
                <div className="button_content__6Zh3n">
                  <div className="button_button-round-text__IEwW5"><span>Let's Get Started</span></div>
                  <span className="button_icon-after__vljdM"><ArrowRight /></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
