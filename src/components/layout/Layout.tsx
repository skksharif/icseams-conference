import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Navbar />
      <AnnouncementBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;