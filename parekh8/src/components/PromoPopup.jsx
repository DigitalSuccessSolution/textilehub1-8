import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 800ms after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.6, bounce: 0.15 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl p-8 border"
            style={{
              background: '#FAF4EE',
              borderColor: 'rgba(225, 77, 42, 0.2)',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle, #E14D2A 0%, transparent 70%)',
              }}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full transition-colors hover:bg-black/5 text-[#303030] hover:text-[#E14D2A]"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Icon badge */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-inner"
                style={{ background: 'rgba(225, 77, 42, 0.12)' }}>
                <Sparkles size={24} color="#E14D2A" />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold tracking-wide mb-3 text-[#303030]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                SAMRIDDHI
              </h2>
              
              <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#E14D2A] mb-4">
                Premium Textile Retail Chain
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B6B' }}>
                Discover our latest season collections, hand-woven fabrics, and elegant attire across 1200+ outlets in India. Experience premium quality crafted to inspire generations.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-widest text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #C93E1D 0%, #E14D2A 100%)',
                }}
              >
                Explore Collections
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
