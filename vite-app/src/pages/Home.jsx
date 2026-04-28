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

  return (
    <MainLayout headerColor="transparent">
      {/* Hero */}
      <section className="hero_root__N0Loz" style={{ visibility: 'visible' }}>
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
            <div className="hero_logo__FxgRj"><RootspaceLogo /></div>
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
          <div className="hero_overlap__d3EJV">
            <div className="hero_smoke__8za_R"><img alt="" decoding="async" style={{ color: 'transparent' }} src="/assets/smokee68c.png" /></div>
            <div className="hero_overlay__7ubgG"></div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us_root__aGsFp">
        <div className="container_container__v5gtR">
          <div className="why-us_grid__RSZoF">
            <div className="why-us_title__N3aCA"><h2>Why Rootspace ?</h2></div>
            <div className="why-us_text__rT1u9">Rootspace is a co working space in Bhopal,{' '}<span className="em">We help you with just opened, one of the best and biggest co working in bhopal.</span></div>
          </div>
          <div className="why-us_preview__OofJt">
            <video src="/videos/why-us.mp4" autoPlay playsInline loop muted></video>
          </div>
        </div>
      </section>

      {/* Arrows Section */}
      <section className="arrows-section_root__yyPBl">
        <div className="container_container__v5gtR">
          <div className="arrows-section_title__a4gyt">
            <h2>This isn't just <span className="em">about desk.</span></h2>
          </div>
          <div className="arrows-section_arrows__BPayV">
            {['/assets/151f4.jpg', '/assets/205bb.jpg', '/assets/38776.jpg', '/assets/4f8fb.jpg'].map((src, i) => (
              <div key={i} className="arrows-section_arrow___KXxg">
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
        <div className="services_items__PESAO">
          {[
            { img: '/assets/buy3959.jpg', label: 'Common Workstations', text: 'Buy smarter with expert agents backed by mortgage, legal, and appraisal pros.' },
            { img: '/assets/sell2cef.jpg', label: 'Dedicated Workstations', text: 'Sell fast, sell high. Your listing gets pro staging, strategic pricing, and agents who never stop working.' },
            { img: '/assets/rent23cd.jpg', label: 'Private Cabins', text: 'Access hidden rentals before they hit the market through agents who know every landlord in town.' },
          ].map(s => (
            <div key={s.label} className="services_item__D_u7g" style={{ cursor: 'default' }}>
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
            <div>Our certified agents guide you through every stage of real estate{' '}<span className="em">with expert knowledge and reliable support.</span></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features_root__CCic6">
        <div className="container_container__v5gtR">
          <div className="features_grid__wL0aQ">
            <div>
              <div className="features_title__vVo3d">
                <h2><div>Support<br /> Beyond <span className="em">Buying</span><br /> <span className="em">and Selling</span></div></h2>
              </div>
            </div>
            <div>
              <div className="features_text__Wp8am"><p>The real estate market never stands still — and neither do we.{' '}<span className="em">Our experts offer continued support beyond the sale.</span></p></div>
              <div className="features_actions__f8ehB">
                <div>
                  <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh button_inversed__slQcI" to="/services" style={{ display: 'inline-flex' }}>
                    <div className="button_content__6Zh3n">
                      <div className="button_button-round-text__IEwW5"><span data-text="Discover Our Services">Discover Our Services</span></div>
                      <span className="button_icon-after__vljdM"><ArrowRight /></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="features_items__oPgtQ">
            {[
              { img: '/assets/mortgage-servicesbcea.jpg', title: 'Mortgage Services', text: 'Helping you secure your dream home with flexible mortgage options.' },
              { img: '/assets/property-managementbd2e.jpg', title: 'Property Management', text: 'Let us handle the details so you can enjoy the rewards.' },
              { img: '/assets/development95f9.jpg', title: 'Construction and Real Estate Development', text: 'Guiding you through the intricacies of building and developing properties.' },
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
