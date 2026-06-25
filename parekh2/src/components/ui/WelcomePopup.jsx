import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the popup exactly after the preloader finishes (1.8s + 1s fade-out = 2.8s)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
            className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col items-center p-8 md:p-10 text-center"
          >

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#064e3b] transition-colors p-1 rounded-full hover:bg-gray-50"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Decorative Icon */}
            <div className="w-16 h-16 bg-[#C48B5D]/10 rounded-2xl flex items-center justify-center mb-6 mt-2 border border-[#C48B5D]/20 shadow-[0_8px_20px_rgba(196,139,93,0.15)]">
              <Sparkles className="w-8 h-8 text-[#C48B5D]" />
            </div>

            {/* Small Badge */}
            <span className="text-[10px] md:text-xs font-bold text-[#C48B5D] tracking-[0.2em] uppercase mb-3">
              New Season Inspiration
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-darkbrown mb-4">
              Experience SutraTex
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Explore our curated collections of premium heritage sarees, handloom crafts, and contemporary bespoke suiting fabrics designed for the modern lifestyle.
            </p>

            {/* Actions */}
            <div className="w-full space-y-3">
              <button
                onClick={closePopup}
                className="w-full bg-[#064e3b] text-white hover:bg-[#022c22] font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={closePopup}
                className="w-full bg-gray-50 text-gray-500 hover:text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
