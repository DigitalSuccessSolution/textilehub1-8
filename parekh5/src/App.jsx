import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Premium preloader timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const shown = sessionStorage.getItem('welcome_popup_shown');
      if (!shown) {
        const popupTimer = setTimeout(() => {
          setShowPopup(true);
          sessionStorage.setItem('welcome_popup_shown', 'true');
        }, 300);
        return () => clearTimeout(popupTimer);
      }
    }
  }, [loading]);

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

          {/* Welcome Modal Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[200] px-4 backdrop-blur-sm">
              <div className="bg-[#fcfbf9] rounded-3xl p-8 max-w-md w-full border border-gray-100 shadow-2xl relative text-center">
                <h2 className="font-playfair text-3xl font-bold text-[#1B484E] mb-4">Welcome to Textile Mall</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-outfit font-medium">
                  Experience the finest collection of premium traditional sarees, designer ethnic apparel, and luxury home furnishings crafted with years of trust and quality.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#1B484E] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#A8C6B6] hover:text-[#1B484E] transition-all duration-300 shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
