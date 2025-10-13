import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * The RootLayout serves as the main application shell.
 * It includes the global Header, Footer, and the ScrollToTop utility.
 * The <Outlet /> component renders the specific page content for the current route.
 */
const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-white min-h-screen flex flex-col font-sans">
        <Header />
        <main className="pt-[70px] flex-1">
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;