import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const categories = ["Heritage", "Retail Guide", "Festive Fashion"];

const allPosts = [
  {
    title: "The Evolution of India's Handloom Heritage",
    date: "June 10, 2026",
    category: "Heritage",
    author: "Priya Sharma",
    description: "Exploring the rich history of traditional Indian handloom techniques and their resurgence in modern sustainable fashion.",
    image: "https://images.pexels.com/photos/5174199/pexels-photo-5174199.jpeg"
  },
  {
    title: "Selecting the Perfect Fabric: A Retailer's Guide",
    date: "May 28, 2026",
    category: "Retail Guide",
    author: "Rajiv Kapoor",
    description: "A comprehensive guide on evaluating textile quality, thread count, and weave patterns to satisfy your retail customers.",
    image: "https://images.pexels.com/photos/8387837/pexels-photo-8387837.jpeg"
  },
  {
    title: "Saree Styling Trends for the Upcoming Festive Season",
    date: "May 15, 2026",
    category: "Festive Fashion",
    author: "Ananya Patel",
    description: "Discover how traditional weaves are blending with contemporary designs to create stunning festive statements this year.",
    image: "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? allPosts
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }} className="min-h-screen">

      {/* Hero Banner */}
      <div className="relative pt-12 pb-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#303030] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Blog & Article
          </h1>
          <div className="w-16 h-[2px] mb-6" style={{ background: '#E14D2A' }}></div>
        </div>
      </div>

      <div className="pb-20 max-w-6xl mx-auto px-4">
        
        {/* Paragraph above Categories */}
        <div className="text-center mb-6">
          <p className="text-[#6B6B6B] text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Stay ahead of fashion trends and retail insights with our expert textile chronicles.
          </p>
        </div>

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

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                layout
                key={post.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ background: '#FFFFFF', border: '1px solid rgba(225,77,42,0.12)' }}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={post.image} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
                    style={{ background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(225,77,42,0.2)', color: '#E14D2A', backdropFilter: 'blur(4px)' }}>
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#E14D2A' }}>
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[11px] font-semibold text-[#6B6B6B]">By {post.author}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-2.5 leading-snug group-hover:text-[#E14D2A] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                    {post.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-6" style={{ color: '#6B6B6B' }}>
                    {post.description}
                  </p>

                  <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(225,77,42,0.08)' }}>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#E14D2A]">
                      Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <BookOpen size={14} className="text-[#6B6B6B] opacity-60" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
