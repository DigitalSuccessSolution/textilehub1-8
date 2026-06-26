import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Products() {
  const categories = [
    "Sarees", "Leggings", "Kurtis", "Dress Suits", 
    "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting", 
    "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men", 
    "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
  ];

  const allProducts = [
    { id: 101, name: 'Premium Banarasi Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80' },
    { id: 102, name: 'Lycra Stretchable Active Leggings', category: 'Leggings', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&auto=format&fit=crop&q=80' },
    { id: 103, name: 'Designer Cotton Printed Kurti Set', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80' },
    { id: 104, name: 'Traditional Embroidered Salwar Kameez Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac992?w=600&auto=format&fit=crop&q=80' },
    { id: 105, name: 'Luxury Cotton Bedsheet Set', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80' },
    { id: 106, name: 'Premium Cotton Socks & Hosiery Set', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80' },
    { id: 107, name: 'Italian Wool Suiting Fabric', category: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80' },
    { id: 108, name: 'Oxford Cotton Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80' },
    { id: 109, name: 'Bridal Designer Lehenga Choli', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?w=600&auto=format&fit=crop&q=80' },
    { id: 110, name: 'Designer Wedding Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80' },
    { id: 111, name: 'Kids Traditional Kurta Pajama Set', category: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&auto=format&fit=crop&q=80' },
    { id: 112, name: 'Luxury Velvet Window Curtains', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80' }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4">
      {/* Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8 flex flex-col items-center gap-4">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">Products</h1>
        <div className="bg-[#1B484E] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
          <ShoppingBag size={16} />
          <span className="font-bold text-xs">{filteredProducts.length} Products</span>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 sm:gap-3 mb-10 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
        <button 
          onClick={() => setActiveCategory("All")}
          className={`shrink-0 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
            activeCategory === "All" 
              ? "bg-[#A8C6B6] text-white border-[#A8C6B6]" 
              : "bg-white text-gray-600 border-gray-200 hover:border-[#A8C6B6]"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
              activeCategory === cat 
                ? "bg-[#A8C6B6] text-white border-[#A8C6B6]" 
                : "bg-white text-gray-600 border-gray-200 hover:border-[#A8C6B6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Display (Flat Grid) */}
      <div className="space-y-16">
        <div>
          {activeCategory !== "All" && (
            <h2 className="font-playfair text-xl sm:text-2xl text-[#1B484E] font-bold mb-6">{activeCategory}</h2>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-44 xs:h-52 sm:h-64 w-full relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 sm:p-5 text-center bg-white border-t border-gray-100">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mb-1.5 font-medium">
                    {product.category}
                  </p>
                  <h3 className="font-playfair text-sm sm:text-lg text-[#1B484E] font-bold line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white rounded-3xl border border-gray-100 shadow-sm px-4">
            <h3 className="font-playfair text-xl sm:text-2xl text-gray-400">Products for this category will be available soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
