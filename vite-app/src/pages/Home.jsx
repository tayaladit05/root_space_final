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
            <h2>This isn't just <span className="em">about real estate.</span></h2>
          </div>
          <div className="arrows-section_arrows__BPayV">
            {['/assets/151f4.jpg', '/assets/205bb.jpg', '/assets/38776.jpg', '/assets/4f8fb.jpg'].map((src, i) => (
              <div key={i} className="arrows-section_arrow___KXxg">
                <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent' }} src={src} />
              </div>
            ))}
          </div>
          <div className="arrows-section_text__Z1Oii">
            <p>It's about identity. Progress. Getting unstuck. You're not just looking for a place.{' '}<span className="em">You're looking for alignment. That's what we help you find.</span></p>
          </div>
        </div>
      </section>

      {/* Real Estate Rewired */}
      <section>
        <div className="rewired_wrapper__mqx1v">
          <div className="container_container__v5gtR">
            <div className="assymetric-cols_row__tAyrs">
              <div className="assymetric-cols_col__yB8jY">
                <div className="rewired_left-col__vLphn">
                  <div>
                    <h2 className="rewired_title__1_3e9">
                      <div>Real Estate,</div>
                      <div className="em">Rewired.</div>
                    </h2>
                  </div>
                  <Link to="/search" className="button_button-round__TFjlU button_color-primary__JJ7Hh" style={{ display: 'inline-flex' }}>
                    <div className="button_content__6Zh3n">
                      <div className="button_button-round-text__IEwW5"><span data-text="Start Your Search">Start Your Search</span></div>
                      <span className="button_icon-after__vljdM"><ArrowRight /></span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="assymetric-cols_col__yB8jY">
                <div>
                  <div className="rewired_label__db93N">Steps:</div>
                  <div>
                    <div className="rewired_list-item__R5lrq" data-index="01"><span>Talk to a Real Human. <span className="em">We match you with an expert who actually listens.</span></span></div>
                    <div className="rewired_list-item__R5lrq" data-index="02"><span>Get Clarity. <span className="em">We define what you really need, not just what's available.</span></span></div>
                    <div className="rewired_list-item__R5lrq" data-index="03"><span>Move Forward. <span className="em">We find what fits — and make it happen.</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Agents */}
      <section>
        <div className="for-agents_wrapper__Os8to">
          <div className="container_container__v5gtR">
            <div className="assymetric-cols_row__tAyrs">
              <div className="assymetric-cols_col__yB8jY assymetric-cols_hide-left-col-on-mobile__BXT8l">
                <div className="assymetric-image-split_label__4qblS">For Agents</div>
                <div className="assymetric-image-split_small-img__199s0" style={{ position: 'relative', visibility: 'visible', minHeight: '200px' }}>
                  <img alt="" loading="lazy" decoding="async" src="/assets/1464e.jpg" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover', color: 'transparent' }} />
                </div>
              </div>
              <div className="assymetric-cols_col__yB8jY">
                <div className="assymetric-image-split_right-col__HoO1A">
                  <div className="for-agents_above-text__SVOzq">Don't Rent Your Career. <span className="em">Own It.</span></div>
                  <div className="assymetric-image-split_image___yxAD" style={{ position: 'relative', visibility: 'visible', minHeight: '300px' }}>
                    <img alt="" loading="lazy" decoding="async" src="/assets/272cd.jpg" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, objectFit: 'cover', color: 'transparent' }} />
                  </div>
                  <div>
                    <div className="for-agents_below-text__DBjLv">At FIND, our agents don't just work for the brand—they own a part of it.{' '}<span className="em">We give top performers real equity, so they're invested in more than just your transaction.</span></div>
                    <div className="for-agents_controls__pBRRC">
                      <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh" to="/join" style={{ display: 'inline-flex' }}>
                        <div className="button_content__6Zh3n">
                          <div className="button_button-round-text__IEwW5"><span data-text="Join The Movement">Join The Movement</span></div>
                          <span className="button_icon-after__vljdM"><ArrowRight /></span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials_root__PiYLZ">
        <div className="container_container__v5gtR">
          <div className="testimonials_title__V_61W"><h2>Don't Take <span className="em">Our Word for It.</span></h2></div>
          <div className="testimonials_grid__S3Kng">
            <div className="testimonials_grid-col__LIQw1">
              <div className="testimonials_divider__j4fVS"></div>
              <div className="testimonials_carousel__EBBTD">
                <div className="testimonials_quote__877vg"><p>{testimonials[activeTestimonial].quote}</p></div>
                <div className="testimonials_info__9SF7C">
                  <div className="testimonials_author__5Drje">{testimonials[activeTestimonial].author}</div>
                  <div className="testimonials_separator__tLCPg">/</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', background: i === activeTestimonial ? '#333' : '#ccc', cursor: 'pointer', padding: 0 }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonials_grid-col__LIQw1">
              <div className="testimonials_preview___uhyO">
                <img alt="" loading="lazy" decoding="async" style={{ color: 'transparent', width: '100%', height: 'auto' }} src="/assets/16de5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services_root__Ch_WM">
        <div className="container_container__v5gtR">
          <div className="services_hgrid__9FHyx">
            <div className="services_hgrid-col__9VVDn"><div className="services_caption__Q_j1k">Services</div></div>
            <div className="services_hgrid-col__9VVDn">
              <div className="services_title__eMyhw"><h2><div className="services_title__eMyhw">How FIND<br />{' '}<span className="em">Can Help You</span></div></h2></div>
            </div>
          </div>
        </div>
        <div className="services_items__PESAO">
          {[
            { img: '/assets/buy3959.jpg', label: 'Buy', text: 'Buy smarter with expert agents backed by mortgage, legal, and appraisal pros.' },
            { img: '/assets/sell2cef.jpg', label: 'Sell', text: 'Sell fast, sell high. Your listing gets pro staging, strategic pricing, and agents who never stop working.' },
            { img: '/assets/rent23cd.jpg', label: 'Rent', text: 'Access hidden rentals before they hit the market through agents who know every landlord in town.' },
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

      {/* Blog */}
      <section className="latest-posts_root__W0OHF">
        <div className="container_container__v5gtR">
          <div className="latest-posts_grid__OkkdQ">
            <div>
              <div className="latest-posts_title__BvrE_"><h2><div>Blog <span className="em">&amp;</span><br /> <span className="em">Resources</span></div></h2></div>
            </div>
            <div>
              <div className="latest-posts_text__1m3Av"><p>See how we've helped clients achieve their real estate dreams, one successful move at a time.</p></div>
              <div className="latest-posts_actions__ZwOlM">
                <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh" to="/blog" style={{ display: 'inline-flex' }}>
                  <div className="button_content__6Zh3n">
                    <div className="button_button-round-text__IEwW5"><span>Visit Our Blog</span></div>
                    <span className="button_icon-after__vljdM"><ArrowRight /></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="latest-posts_items__LcqgW">
            {blogPosts.map(p => (
              <div key={p.slug} className="latest-posts_item__zlarM">
                <div className="post-entry_root__QwbHf">
                  <div className="post-entry_grid__FQEYN">
                    <div className="post-entry_grid-col__tD_KO">
                      <Link className="post-entry_thumbnail__AD3RU" to={`/blog/${p.slug}`}>
                        <div className="image_container__RA4p4">
                          <img alt={p.title} src={p.thumb} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </Link>
                    </div>
                    <div className="post-entry_grid-col__tD_KO">
                      <div className="post-entry_date__zuyY6">{p.date}</div>
                      <div>
                        <Link to={`/blog/${p.slug}`} className="post-entry_title__JBO73">{p.title}</Link>
                        <div className="post-entry_text__Xeca_"><p>{p.brief}</p></div>
                      </div>
                      <div className="post-entry_action__LwmZk">
                        <Link to={`/blog/${p.slug}`}>
                          <button type="button" className="button_button-round__TFjlU button_color-secondary__FZDOG">
                            <div className="button_content__6Zh3n">
                              <div className="button_button-round-text__IEwW5"><span>Read More</span></div>
                              <span className="button_icon-after__vljdM"><ArrowRight /></span>
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
