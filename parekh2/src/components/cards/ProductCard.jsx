import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card-premium overflow-hidden group">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-brand-darkbrown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-brand-gold text-white px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm rounded-full font-medium hover:bg-brand-darkbrown transition-colors flex items-center shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
            <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" /> View Details
          </button>
        </div>
      </div>
      <div className="p-3 md:p-6">
        <div className="flex justify-between items-start mb-1 md:mb-2">
          <p className="text-brand-gold text-[10px] md:text-xs uppercase tracking-widest font-semibold truncate w-full">{product.category}</p>
        </div>
        <h3 className="text-sm md:text-xl font-serif font-bold text-brand-maroon mb-1 md:mb-2 line-clamp-1 md:line-clamp-none">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
