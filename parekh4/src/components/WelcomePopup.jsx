import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 500ms after it mounts (preloader just finished)
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-sapphire-900/40 backdrop-blur-sm z-[200]"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Card */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center z-[201] px-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#2d0a4e] via-[#d8a5ad] to-[#2d0a4e]" />

              {/* Header */}
              <div className="bg-[#2d0a4e] px-6 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#d8a5ad]/20 rounded-xl flex items-center justify-center">
                    <Sparkles size={18} className="text-[#d8a5ad]" />
                  </div>
                  <span className="text-[#d8a5ad] text-[10px] font-bold uppercase tracking-[0.25em]">Welcome</span>
                </div>

                <h2 className="font-playfair text-2xl sm:text-3xl text-white font-bold leading-snug">
                  Welcome to <span className="text-[#d8a5ad]">TEXMART</span>
                </h2>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1 font-outfit">Textile Retail Mall</p>
              </div>

              {/* Body */}
              <div className="px-6 sm:px-8 py-5 sm:py-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover India's finest textile marketplace — from premium Sarees and Kurtis to exclusive Suiting & Shirting. 
                  Whether you're a retailer, trader, or individual buyer, <span className="font-semibold text-[#2d0a4e]">TEXMART</span> brings the very best of textile craftsmanship to your fingertips.
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex gap-3">
                <a
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-[#2d0a4e] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-[#d8a5ad] transition-colors shadow-md"
                >
                  Explore Now
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 border-2 border-gray-200 text-gray-500 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-[#2d0a4e] hover:text-[#2d0a4e] transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
