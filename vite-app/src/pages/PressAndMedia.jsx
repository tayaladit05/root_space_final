import React from 'react';
import MainLayout from '../layouts/MainLayout';

const html = `<div className="press-and-media-page_wrapper___ZODE"><div className="container_container__v5gtR"><div style="visibility:visible"><div className="press-and-media-page_title__KV88d"><h1>Press &amp; Media</h1></div><div className="press-and-media-page_subtitle___IZes">FIND is making waves in the real estate industry with our client-focused approach, innovative agent empowerment, and commitment to excellence. Explore our latest media mentions, press releases, and features that highlight how we’re moving the real estate experience forward.</div></div><div className="press-and-media-page_cards__TFfDU"><div className="card_wrapper__uP5TJ"><a href="press-and-media/find-real-estate-launch.html"><div className="image_container__RA4p4 card_image__Uh7h8 image_loaded__kIqzn"><img src="https://fresh-boot-3c0a0dc212.media.strapiapp.com/Screenshot_2026_01_04_at_16_37_08_dfe379afee.png" alt="" className="image_image__xwoGQ" fetchPriority="low"/></div></a><div className="card_date__5oPa5">December 1, 2025</div><a className="card_title__rSW5k" href="press-and-media/find-real-estate-launch.html">Oxford, Spire, &amp; Level Group Unite to Launch FIND, Creating One of NYC’s Largest Independent Brokerages</a><div className="card_controls__bZOeb"><button type="button" className="button_button-round__TFjlU button_color-secondary__FZDOG"><div className="button_content__6Zh3n"><div className="button_button-round-text__IEwW5"><span data-text="Read More">Read More</span></div><span className="button_icon-after__vljdM"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.75.75 0 0 1 0 1.061"></path></svg></span></div></button></div></div></div></div></div>`;

export default function PressAndMedia() {
  return (
    <MainLayout>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </MainLayout>
  );
}
