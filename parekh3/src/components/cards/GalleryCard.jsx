import React from 'react';
import { Calendar } from 'lucide-react';

const GalleryCard = ({ item }) => {
  return (
    <div className="group bg-white border border-[#0B1C3E]/6 hover:border-[#D4A853]/40 hover:shadow-[0_8px_30px_rgba(11,28,62,0.08)] transition-all duration-400 overflow-hidden flex flex-col h-full rounded-sm">
      {/* Image */}
      <div className="overflow-hidden relative h-56 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Category tag overlay */}
        <div className="absolute top-3 left-3 bg-[#D4A853] text-[#0B1C3E] text-[0.55rem] uppercase tracking-widest px-2.5 py-1 font-medium">
          {item.type}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex-grow flex flex-col justify-between border-t border-gray-100">
        <div>
          {/* Category above title */}
          <span className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] font-semibold block mb-1.5">
            {item.type}
          </span>
          {/* Title */}
          <h3 className="text-base font-serif font-medium text-[#0B1C3E] group-hover:text-[#D4A853] transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-[#6B7A99] font-light mt-4 pt-3 border-t border-gray-100/60">
          <Calendar size={12} className="text-[#D4A853]" />
          {item.date}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
