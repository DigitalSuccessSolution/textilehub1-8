import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RetailManagement from './pages/RetailManagement';
import TradeEnquiry from './pages/TradeEnquiry';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import TradeCircular from './pages/TradeCircular';
import Blog from './pages/Blog';
import NoticeBoard from './pages/NoticeBoard';
import Career from './pages/Career';
import CustomerReview from './pages/CustomerReview';
import BusinessMediaGallery from './pages/BusinessMediaGallery';
import FAQ from './pages/FAQ';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait another 600ms to show the popup after loading finishes
      const popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 600);
      return () => clearTimeout(popupTimer);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products" element={<Products />} />
              <Route path="retail-management" element={<RetailManagement />} />
              <Route path="trade-enquiry" element={<TradeEnquiry />} />
              <Route path="e-quotation" element={<EQuotation />} />
              <Route path="e-auction" element={<EAuction />} />
              <Route path="trade-circular" element={<TradeCircular />} />
              <Route path="blog" element={<Blog />} />
              <Route path="notice-board" element={<NoticeBoard />} />
              <Route path="career" element={<Career />} />
              <Route path="reviews" element={<CustomerReview />} />
              <Route path="gallery" element={<BusinessMediaGallery />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>

          {/* Welcome Popup Overlay */}
          <AnimatePresence>
            {showPopup && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl p-8"
                  style={{
                    background: '#FFFBF5',
                    border: '2px solid #C9A227',
                  }}
                >
                  {/* Decorative top strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227)' }} />

                  {/* Close button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-[#A68B7C] hover:text-[#B83227] hover:rotate-90 transition-all duration-200 focus:outline-none"
                    aria-label="Close welcome popup"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="text-3xl font-bold text-[#2C1810] mb-3 mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Welcome to Textile Mall
                  </h3>
                  
                  <div className="w-12 h-[2px] mb-5" style={{ background: '#C9A227' }} />

                  <p className="text-sm leading-relaxed text-[#7D5A4F] mb-6">
                    Explore India's grandest textile destination. Get premium designs, live quotation bidding, wholesale circulars, and custom manufacturing solutions all in one platform.
                  </p>

                  <Link
                    to="/products"
                    onClick={() => setShowPopup(false)}
                    className="block text-center w-full py-3.5 rounded-xl font-bold text-white text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-98"
                    style={{
                      background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 100%)',
                      boxShadow: '0 4px 14px rgba(44,24,16,0.3)',
                      border: '1px solid rgba(201,162,39,0.3)'
                    }}
                  >
                    Explore Collections
                  </Link>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </Router>
  );
}

export default App;
