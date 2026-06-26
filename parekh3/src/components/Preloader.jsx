import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    let popupTimer;
    const timer = setTimeout(() => {
      setLoading(false);
      popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 800);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      if (popupTimer) clearTimeout(popupTimer);
    };
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
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: '#060F22' }}
          >
            {/* Background decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ rotate: { repeat: Infinity, duration: 8, ease: 'linear' }, scale: { repeat: Infinity, duration: 3, ease: 'easeInOut' } }}
                className="absolute w-72 h-72 rounded-full border border-[#D4A853]/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute w-56 h-56 rounded-full border border-[#D4A853]/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                className="absolute w-40 h-40 rounded-full border-t-2 border-[#D4A853]/60"
              />
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Amber diamond ornament */}
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-3 h-3 bg-[#D4A853] mb-5"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center"
              >
                <h1 className="text-5xl font-serif font-light text-white tracking-[0.3em] mb-1">
                  LUMINA
                </h1>
                <p className="text-[0.65rem] uppercase tracking-[0.5em] text-[#D4A853] font-light">
                  Premium Textiles
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 w-48"
              >
                <div className="w-full h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[#D4A853] origin-left"
                    style={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>
                <p className="text-center text-[0.6rem] text-white/30 mt-2 tracking-widest font-light">
                  {Math.min(progress, 100)}%
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setShowPopup(false)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#0B1C3E] border border-[#D4A853]/30 p-8 text-center overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Gold decorative borders in corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4A853]/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4A853]/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4A853]/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4A853]/40" />

              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-[#D4A853] transition-colors p-1"
                aria-label="Close popup"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-10 py-2">
                {/* Gold diamond ornament */}
                <div className="w-2.5 h-2.5 bg-[#D4A853] rotate-45 mx-auto mb-4" />
                
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#D4A853] font-medium mb-1">
                  Welcome to
                </h3>
                <h2 className="text-3xl font-serif text-white tracking-[0.1em] mb-4">
                  Lumina Textiles
                </h2>
                
                <div className="w-12 h-[1px] bg-[#D4A853]/40 mx-auto mb-5" />
                
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-6 px-2">
                  Experience the fine art of premium fabrics. From exquisite Banarasi silk sarees to custom suiting and luxury furnishings, discover elegance crafted for generations.
                </p>
                
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#D4A853] hover:bg-[#c29642] text-[#0B1C3E] text-xs uppercase tracking-widest font-semibold px-8 py-3 transition-colors duration-300"
                >
                  Explore Collection
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
