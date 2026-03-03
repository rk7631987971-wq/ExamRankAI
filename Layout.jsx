import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const HIDE_FOOTER = ['/login','/signup'];

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      {!HIDE_FOOTER.includes(pathname) && <Footer />}
    </div>
  );
};
export default Layout;
