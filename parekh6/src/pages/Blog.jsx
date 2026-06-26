import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    { 
      title: "The Future of Sustainable Weaving", 
      date: "June 10, 2026", 
      category: "Innovation", 
      author: "Priya Sharma",
      description: "Discover how eco-friendly fibers, waterless dyeing techniques, and automated looms are transforming the traditional textile industry for a greener future.",
      image: "https://images.unsplash.com/photo-1705412877691-70f6913aaa1e?w=600&auto=format&fit=crop&q=60" 
    },
    { 
      title: "Elegance in Threads: The Fall Collection", 
      date: "May 28, 2026", 
      category: "Collections", 
      author: "Rajiv Kapoor",
      description: "An exclusive look into our upcoming autumn collection, highlighting warm earth tones, intricate jacquard patterns, and lightweight merino wool blends.",
      image: "https://images.unsplash.com/photo-1599753931952-654e960af582?w=600&auto=format&fit=crop&q=60" 
    },
    { 
      title: "Behind the Scenes: Crafting the Perfect Saree", 
      date: "May 15, 2026", 
      category: "Craftsmanship", 
      author: "Ananya Patel",
      description: "Explore the meticulous journey of a silk saree, from selecting the finest mulberry silk yarn to hand-weaving detailed gold zari patterns.",
      image: "https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?w=600&auto=format&fit=crop&q=60" 
    }
  ];

  const categories = ['All', 'Innovation', 'Collections', 'Craftsmanship'];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4">
      {/* Page Header & Description */}
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Blog Page</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
          Stay updated with the latest trends, sustainable innovations, and behind-the-scenes insights from our textile manufacturing world.
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

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredPosts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-lg p-5 transition-all duration-300"
          >
            <div className="w-full aspect-[16/10] overflow-hidden rounded-none mb-5 shadow-sm relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 text-[10px] bg-vastram-brown text-white font-bold px-2.5 py-1 uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] text-vastram-gold font-bold uppercase tracking-wider mb-2">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <h3 className="font-playfair font-bold text-lg text-vastram-brown mb-3 group-hover:text-vastram-gold transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-gray-500 text-xs mb-5 leading-relaxed flex-grow">
              {post.description}
            </p>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="flex items-center text-vastram-brown font-bold text-xs tracking-widest uppercase group-hover:text-vastram-gold transition-colors">
                Read More <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
