import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories from blogPosts and add 'All'
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      <PageHeader title="Blogs and Articles" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Paragraph */}
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          Explore our collection of articles, textile trends, and expert insights from the industry.
        </p>

        {/* Categories Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-sans font-bold border transition-all duration-200 cursor-pointer shadow-sm ${
                activeCategory === category
                  ? 'bg-brand-maroon text-white border-brand-maroon shadow-md'
                  : 'bg-white text-brand-darkbrown border-gray-200 hover:border-brand-maroon hover:text-brand-maroon'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 font-sans">
            No blog posts found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
