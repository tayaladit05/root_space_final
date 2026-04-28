import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children, headerColor }) {
  return (
    <>
      <div className="loading-line_loadingLine__br2iU"></div>
      <Header color={headerColor} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
