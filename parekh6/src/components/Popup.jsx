import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-vastram-light relative w-full max-w-md p-8 md:p-10 border border-vastram-gold shadow-2xl z-10 text-center rounded-none flex flex-col items-center"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-vastram-text/60 hover:text-vastram-gold transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Decorative Gold Icon */}
        <div className="w-16 h-16 bg-vastram-cream border border-vastram-gold/30 flex items-center justify-center mb-6">
          <Sparkles size={28} className="text-vastram-gold animate-pulse" />
        </div>

        {/* Brand Name */}
        <span className="font-playfair text-[10px] tracking-[0.25em] uppercase text-vastram-gold font-bold mb-2 block">
          Welcome to
        </span>
        <h2 className="font-playfair text-3xl md:text-4xl text-vastram-brown font-bold tracking-wider mb-4">
          VASTRAM
        </h2>

        {/* Line separator */}
        <div className="w-12 h-[1.5px] bg-vastram-gold mb-6"></div>

        {/* Popup Content */}
        <p className="text-vastram-text/90 text-sm leading-relaxed mb-8">
          Discover a legacy of elegance and craftsmanship. Explore our exclusive range of heritage handlooms, designer sarees, premium suitings, and exquisite home furnishings.
        </p>

        {/* Action Button */}
        <button 
          onClick={onClose}
          className="w-full bg-vastram-brown text-white py-3.5 px-6 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-vastram-gold transition-colors shadow-md"
        >
          Explore Collection
        </button>
      </motion.div>
    </div>
  );
}
