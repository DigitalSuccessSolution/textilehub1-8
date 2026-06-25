import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {post.category && (
          <span className="absolute top-4 left-4 bg-brand-maroon text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {post.category}
          </span>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 mb-3 font-medium font-sans">
          <div className="flex items-center text-brand-maroon">
            <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
            {post.date}
          </div>
          {post.author && (
            <div className="flex items-center text-gray-500">
              <User className="w-3.5 h-3.5 mr-1.5 shrink-0 text-brand-darkbrown" />
              <span>By {post.author}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-serif font-semibold text-brand-darkbrown mb-2 line-clamp-2 hover:text-brand-maroon transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-brand-darkbrown font-semibold hover:text-brand-maroon transition-colors mt-auto text-sm">
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
