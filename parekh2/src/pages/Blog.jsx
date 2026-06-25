import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const blogCategories = ['All', 'Sarees & Heritage', 'Home Decor', 'Suiting & Styling'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <PageHeader title="Our Blog" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Subtitle */}
        <p className="text-center text-gray-500 text-xs md:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Discover our latest design stories, heritage weaving guides, and modern home decor trends from the world of premium textiles.
        </p>
        
        {/* Blog Categories Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#064e3b]/30 hover:text-[#064e3b] hover:bg-[#064e3b]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
