import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';
import FloatingChatbot from '../ui/FloatingChatbot';
import WelcomePopup from '../ui/WelcomePopup';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingChatbot />
      <WelcomePopup />
    </div>
  );
};

export default Layout;
