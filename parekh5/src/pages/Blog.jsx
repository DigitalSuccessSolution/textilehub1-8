import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Innovation", "Collections", "Craftsmanship"];

  const posts = [
    { 
      title: "The Future of Sustainable Weaving", 
      date: "June 10, 2026", 
      category: "Innovation", 
      author: "Priya Sharma",
      description: "How modern solar-powered looms and biodegradable yarn materials are revolutionizing India's weaving sector while preserving local artisans' livelihoods.",
      image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" 
    },
    { 
      title: "Elegance in Threads: The Fall Collection", 
      date: "May 28, 2026", 
      category: "Collections", 
      author: "Rajiv Kapoor",
      description: "A deep dive into our upcoming autumn catalog, featuring rich hand-woven textures, organic warm earth tones, and timeless designs for modern homes.",
      image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" 
    },
    { 
      title: "Behind the Scenes: Crafting the Perfect Saree", 
      date: "May 15, 2026", 
      category: "Craftsmanship", 
      author: "Ananya Patel",
      description: "Tracing the journey of fine Banarasi silk yarn from local dye houses to the handloom, capturing the generational mastery of master weavers.",
      image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" 
    }
  ];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 font-outfit">
      {/* Centered Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-2 sm:mb-3">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          Blog
        </h1>
      </div>

      {/* One-line introduction paragraph */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <p className="text-gray-600 font-medium text-base">
          Read the latest updates, innovations, and stories from the heart of our weaving factories and artisan communities.
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

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B484E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {post.category}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-2">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-playfair font-bold text-xl text-[#1B484E] mb-3 group-hover:text-[#A8C6B6] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-5 flex-grow">
                  {post.description}
                </p>
                
                <div className="pt-3 border-t border-gray-50 mt-auto">
                  <span className="flex items-center text-[#1B484E] font-bold text-[13px] tracking-wide group-hover:text-[#A8C6B6] transition-colors">
                    Read More <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
