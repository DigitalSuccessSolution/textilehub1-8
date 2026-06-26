import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';

const categories = ['All', 'Manufacturing', 'Events', 'Showroom', 'Team'];

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=70',
    title: 'Weaving Unit — Surat Facility',
    category: 'Manufacturing',
    date: 'Jun 10, 2026',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=800&auto=format&fit=crop&q=70',
    title: 'Festive Collection Launch 2026',
    category: 'Events',
    date: 'May 28, 2026',
  },
  {
    id: 3,
    image: '/saree_showroom_display.png',
    title: 'Premium Saree Display — Mumbai Showroom',
    category: 'Showroom',
    date: 'May 15, 2026',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=70',
    title: 'Home Linen Exhibition Stall',
    category: 'Events',
    date: 'Apr 20, 2026',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=800&auto=format&fit=crop&q=70',
    title: 'Suiting Fabric Inspection — Quality Lab',
    category: 'Manufacturing',
    date: 'Apr 05, 2026',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=70',
    title: 'Annual Team Meet 2026',
    category: 'Team',
    date: 'Mar 18, 2026',
  },
];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="space-y-8 sm:space-y-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Business Media Gallery</h1>
        <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-4">
          A visual journey through TEXMART's manufacturing units, showrooms, events, and the people behind our legacy.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border ${
              activeCategory === cat
                ? 'bg-[#2d0a4e] text-white border-[#2d0a4e] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {filtered.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Image */}
            <div className="h-32 sm:h-52 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2d0a4e]/0 group-hover:bg-[#2d0a4e]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-base opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">View</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-5">
              <h3 className="font-playfair font-bold text-[#2d0a4e] text-xs sm:text-base leading-snug mb-2 line-clamp-2">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-2 text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Tag size={10} className="text-[#d8a5ad]" /> {item.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={10} className="text-[#d8a5ad]" /> {item.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
