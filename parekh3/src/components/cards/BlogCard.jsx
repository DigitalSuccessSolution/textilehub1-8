import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="group bg-white border border-[#0B1C3E]/6 hover:border-[#D4A853]/40 hover:shadow-[0_8px_40px_rgba(11,28,62,0.1)] transition-all duration-400 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="overflow-hidden relative h-[200px] shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category tag on image */}
        <div className="absolute top-3 left-3 bg-[#D4A853] text-[#0B1C3E] text-[0.6rem] uppercase tracking-widest px-2.5 py-1 font-medium">
          {post.category}
        </div>
      </div>

      {/* Top amber line on hover */}
      <div className="h-0.5 bg-[#D4A853] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Content */}
      <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Category label above title */}
          <p className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-2">
            {post.category}
          </p>

          <h3 className="text-lg md:text-xl font-serif font-medium text-[#0B1C3E] mb-3 line-clamp-2 leading-snug group-hover:text-[#D4A853] transition-colors">
            {post.title}
          </h3>

          {/* Author and Date metadata */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#6B7A99] mb-4 font-light">
            <span className="flex items-center gap-1">
              <User size={12} className="text-[#D4A853]" />
              By {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-[#D4A853]" />
              {post.date}
            </span>
          </div>

          <p className="text-[#6B7A99] text-xs md:text-sm mb-4 line-clamp-3 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-[#0B1C3E] text-xs font-medium uppercase tracking-widest hover:text-[#D4A853] transition-colors group/link mt-auto pt-3 border-t border-gray-100/80"
        >
          Read Article
          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
