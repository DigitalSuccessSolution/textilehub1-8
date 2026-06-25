import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';
import FloatingChatbot from '../ui/FloatingChatbot';
import WelcomePopup from '../ui/WelcomePopup';

const Layout = ({ children }) => {
  const [showFloaters, setShowFloaters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloaters(true);
    }, 2800); // 1.8s preloader + 1.0s exit transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showFloaters && (
        <>
          <FloatingWhatsApp />
          <FloatingChatbot />
        </>
      )}
      <WelcomePopup />
    </div>
  );
};

export default Layout;
