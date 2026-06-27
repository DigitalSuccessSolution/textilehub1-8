import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Exhibitions", "Infrastructure", "Workshops", "Conferences", "Product Launch"];

const galleryItems = [
  {
    title: "National Textile Expo 2026",
    category: "Exhibitions",
    date: "June 25, 2026",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Automated Loom Facility Launch",
    category: "Infrastructure",
    date: "June 18, 2026",
    image: "https://images.pexels.com/photos/4614200/pexels-photo-4614200.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Weaver Empowerment Workshop",
    category: "Workshops",
    date: "June 10, 2026",
    image: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Annual Fashion & Fabric Meet",
    category: "Conferences",
    date: "May 30, 2026",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Premium Silk Collection Reveal",
    category: "Product Launch",
    date: "May 15, 2026",
    image: "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];


export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }} className="min-h-screen">

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Business Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-10">
        
        {/* Paragraph above Categories */}
        <p className="text-center text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed" style={{ color: '#6B6B6B' }}>
          Witness the moments, milestones, and innovations defining our premium textile brand.
        </p>

        {/* Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-250 cursor-pointer"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #E14D2A, #C93E1D)', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(225,77,42,0.25)' }
                : { background: '#FFFFFF', color: '#6B6B6B', border: '1px solid rgba(225,77,42,0.15)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.15)' }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(225,77,42,0.2)', color: '#E14D2A', backdropFilter: 'blur(4px)' }}>
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: '#E14D2A' }}>
                    {item.date}
                  </span>
                  
                  <h3 className="font-bold text-[15px] leading-snug text-[#303030] group-hover:text-[#E14D2A] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
