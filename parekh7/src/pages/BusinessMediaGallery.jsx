import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { 
    title: "Vastram Showroom Inauguration", 
    category: "Showroom", 
    date: "June 05, 2026",
    image: "https://images.pexels.com/photos/5418897/pexels-photo-5418897.jpeg" 
  },
  { 
    title: "Handloom Weavers Workshop", 
    category: "Artisans", 
    date: "May 20, 2026",
    image: "https://images.pexels.com/photos/24738158/pexels-photo-24738158.jpeg" 
  },
  { 
    title: "National Textile Expo 2026", 
    category: "Exhibition", 
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60" 
  },
  { 
    title: "B2B Wholesaler Summit", 
    category: "Conference", 
    date: "March 22, 2026",
    image: "https://images.pexels.com/photos/6068952/pexels-photo-6068952.jpeg" 
  },
  { 
    title: "State-of-the-Art Warehouse Launch", 
    category: "Infrastructure", 
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60" 
  }
];

const categories = ["All", "Showroom", "Artisans", "Exhibition", "Conference", "Infrastructure"];

export default function BusinessMediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative py-8 sm:py-10 min-h-[140px] overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Business Media Gallery
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">

        {/* Intro Paragraph */}
        <p className="text-center text-sm mb-6 max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D5A4F' }}>
          Browse photographs and media coverage of our national exhibitions, weaver workshops, B2B meets, and distribution centers.
        </p>

        {/* Categories Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-200"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #B83227, #C0392B)', color: '#fff', boxShadow: '0 4px 12px rgba(184,50,39,0.3)' }
                : { background: '#FFFBF5', color: '#7D5A4F', border: '1px solid rgba(201,162,39,0.2)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.15)' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(26,10,5,0.6) 0%, transparent 60%)' }} />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: '#C9A227', backdropFilter: 'blur(8px)' }}>
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#A68B7C] mb-2">
                  Published: {item.date}
                </div>
                <h3 className="font-bold text-lg leading-snug transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
