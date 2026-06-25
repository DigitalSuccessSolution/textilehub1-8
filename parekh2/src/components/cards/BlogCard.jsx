import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100/80">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Category Overlay */}
        {post.category && (
          <span className="absolute top-4 left-4 bg-[#064e3b] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        {/* Meta Section: Author and Publish Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3 border-b border-gray-50 pb-3 flex-wrap gap-2">
          {post.author && (
            <div className="flex items-center gap-1.5 font-medium">
              <User className="w-3.5 h-3.5 text-[#C48B5D]" />
              <span>By {post.author}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#C48B5D]" />
            <span>{post.date}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-serif font-bold text-brand-darkbrown mb-3 line-clamp-2 hover:text-[#064e3b] transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-xs md:text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Read More Link */}
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-xs font-bold text-brand-maroon hover:text-[#022c22] transition-colors mt-auto uppercase tracking-wider gap-1"
        >
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
