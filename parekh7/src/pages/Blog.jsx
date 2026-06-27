import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { 
    title: "The Future of Sustainable Weaving", 
    date: "June 10, 2026", 
    category: "Innovation", 
    author: "Priya Sharma", 
    image: "https://images.pexels.com/photos/8246480/pexels-photo-8246480.jpeg",
    desc: "Discover how modern solar-powered looms and organic fibers are revolutionizing the carbon footprint of India's weaving clusters."
  },
  { 
    title: "Elegance in Threads: The Fall Collection", 
    date: "May 28, 2026", 
    category: "Collections", 
    author: "Rajiv Kapoor", 
    image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60",
    desc: "A deep dive into the color palettes, heavy textures, and hybrid silk-wool blends making waves this festive autumn season."
  },
  { 
    title: "Behind the Scenes: Crafting the Perfect Saree", 
    date: "May 15, 2026", 
    category: "Craftsmanship", 
    author: "Ananya Patel", 
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60",
    desc: "Tracing the journey of a single bridal saree from hand-drawn zari artwork to weeks of meticulous handloom weaving."
  },
];

const categories = ["All", "Innovation", "Collections", "Craftsmanship"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

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
            Blog Page
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 py-12">
        
        {/* Intro Paragraph */}
        <p className="text-center text-sm mb-6 max-w-xl mx-auto leading-relaxed" style={{ color: '#7D5A4F' }}>
          Explore the latest stories, manufacturing insights, seasonal trends, and craftsmanship secrets straight from India’s premier textile house.
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

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.15)' }}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: '#C9A227', backdropFilter: 'blur(6px)' }}>
                  {post.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-medium" style={{ color: '#A68B7C' }}>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4BDB6]" />
                  <span className="text-[11px] font-medium animate-pulse" style={{ color: '#C9A227' }}>By {post.author}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 flex-grow" style={{ color: '#7D5A4F' }}>
                  {post.desc}
                </p>
                <div className="mt-auto pt-3 border-t" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                  <span className="flex items-center gap-1.5 text-[12px] font-bold tracking-wide" style={{ color: '#B83227' }}>
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
