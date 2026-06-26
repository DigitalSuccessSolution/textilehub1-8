import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BusinessMediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      title: "Surat Mega Retail Mall Launch",
      category: "Event",
      date: "June 15, 2026",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Banarasi Silk Saree Showcase",
      category: "Technology",
      date: "May 20, 2026",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Designer Sherwani Collection",
      category: "Launch",
      date: "April 10, 2026",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Premium Kids Festive Wear",
      category: "Achievement",
      date: "March 05, 2026",
      image: "https://images.unsplash.com/photo-1622290319146-7b63df48a635?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Heritage Chikankari Collection",
      category: "CSR",
      date: "Feb 18, 2026",
      image: "https://images.pexels.com/photos/8886951/pexels-photo-8886951.jpeg"
    }
  ];

  const categories = ['All', 'Event', 'Technology', 'Launch', 'Achievement', 'CSR'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4">
      {/* Page Header */}
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Business Media Gallery</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
          Explore images and highlights of our industrial operations, corporate events, global summits, and CSR initiatives.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-xs px-5 py-2.5 rounded-none uppercase tracking-wider font-bold transition-all duration-300 border ${
              selectedCategory === category
                ? 'bg-vastram-brown text-white border-vastram-brown shadow-md'
                : 'bg-white text-gray-600 border-gray-100 hover:border-vastram-gold hover:text-vastram-gold'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        {filteredItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col cursor-pointer p-2 md:p-4"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-vastram-brown text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm">
                {item.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="pt-4 md:pt-6 flex flex-col flex-1">
              <span className="text-[10px] text-vastram-gold font-bold uppercase tracking-wider mb-2">
                {item.date}
              </span>
              <h3 className="font-playfair text-base md:text-lg font-bold text-vastram-brown group-hover:text-vastram-gold transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
