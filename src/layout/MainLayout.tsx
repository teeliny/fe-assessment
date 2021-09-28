import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

interface iProps {
  children: React.ReactChild;
}

function MainLayout({ children }: iProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout;

