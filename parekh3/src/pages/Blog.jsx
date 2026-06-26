import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categoriesList = ['All', 'Heritage', 'Home Decor', 'Style & Tailoring'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      <PageHeader title="Our Blog" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Title and paragraph description */}
          <div className="mb-10">
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Insights & Stories</p>
            <h2 className="text-4xl font-serif font-light text-[#0B1C3E]">From Our Desk</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mt-4 mb-5" />
            <p className="text-[#6B7A99] font-light text-sm md:text-base max-w-2xl leading-relaxed">
              Explore our curated articles on luxury weaving heritage, home decor trends, and master tailoring advice.
            </p>
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0B1C3E] border-[#0B1C3E] text-[#D4A853]'
                    : 'bg-white border-[#0B1C3E]/10 text-[#6B7A99] hover:border-[#D4A853] hover:text-[#D4A853]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blogs Grid (exactly 3 cards max, filtered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-[#6B7A99] font-light">
              No articles found for this category.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Blog;
