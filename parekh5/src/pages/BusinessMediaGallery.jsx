import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Infrastructure", "Event", "CSR Initiative", "Innovation", "Achievement"];

  const galleryItems = [
    {
      title: "State-of-the-Art Powerloom Setup",
      desc: "Our new batch of high-speed air-jet powerlooms installed at the Chennai manufacturing plant, ready to increase daily fabric output by 50%.",
      category: "Infrastructure",
      date: "Nov 12, 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "National Textile Fair Exhibition",
      desc: "Displaying our latest winter collections of woolen suiting, designer shirting, and luxury bed linen at the Pragati Maidan exhibition.",
      category: "Event",
      date: "Oct 24, 2026",
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Traditional Weaving Heritage Centre",
      desc: "Supporting local communities of rural artisans by funding handloom units and establishing quality-check centers for authentic Banarasi weaves.",
      category: "CSR Initiative",
      date: "Sep 15, 2026",
      image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Eco-Friendly Organic Cotton Process",
      desc: "Inspecting the first batch of certified long-staple organic cotton fibers, sourced directly from cooperative farmers for our Eco-Weave series.",
      category: "Innovation",
      date: "Aug 10, 2026",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Exporter of the Year Achievement",
      desc: "Honored with the prestigious export recognition award for delivering top-grade cotton and synthetic fabrics to over 25 international markets.",
      category: "Achievement",
      date: "Jul 05, 2026",
      image: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?w=800&auto=format&fit=crop&q=60"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4">
      {/* Centered Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-2 sm:mb-3">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          Business Media Gallery
        </h1>
      </div>

      {/* One-line introduction paragraph */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <p className="text-gray-600 font-medium text-base">
          Explore captured moments of our global summits, infrastructure milestones, achievements, and community initiatives.
        </p>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-[#1B484E] text-white border-[#1B484E] shadow-sm'
                : 'bg-white text-gray-500 hover:text-[#1B484E] border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B484E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B484E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">
                  {item.date}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1B484E] mb-3 group-hover:text-[#A8C6B6] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
