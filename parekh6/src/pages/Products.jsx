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
    {
      id: 101,
      name: 'Exquisite Silk Banarasi Saree',
      category: 'Sarees',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 102,
      name: 'Stretchable Cotton Leggings',
      category: 'Leggings',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 103,
      name: 'Handcrafted Chikankari Kurti',
      category: 'Kurtis',
      image: 'https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg'
    },
    {
      id: 104,
      name: 'Designer Anarkali Dress Suit',
      category: 'Dress Suits',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 105,
      name: 'Luxury Cotton Bedsheet Set',
      category: 'Bedsheets & Linen',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 106,
      name: 'Premium Cotton Socks & Hosiery',
      category: 'Hosiery Items',
      image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 107,
      name: 'Superfine Wool Suiting Fabric',
      category: 'Suiting',
      image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 108,
      name: 'Egyptian Cotton Shirting Fabric',
      category: 'Shirting',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 109,
      name: 'Traditional Bridal Lehenga',
      category: 'Formal & Ethnic Wear for Women',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 110,
      name: 'Royal Groom Sherwani',
      category: 'Formal & Ethnic Wear for Men',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 111,
      name: 'Kids Ethnic Kurta Pyjama',
      category: 'Formal & Ethnic Wear for Children',
      image: 'https://images.unsplash.com/photo-1622290319146-7b63df48a635?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 112,
      name: 'Jacquard Curtains & Cushions',
      category: 'Home Upholstery & Furnishing',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4">
      {/* Page Header */}
      <div className="text-center py-10 mb-8 border-b border-vastram-border">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Product Page</h1>
        <div className="mt-4 flex justify-center">
          <div className="bg-vastram-brown text-white px-6 py-2 rounded-none flex items-center gap-3 shadow-md text-xs font-bold uppercase tracking-wider">
            <ShoppingBag size={14} />
            <span>{filteredProducts.length} Products</span>
          </div>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2.5 rounded-none text-sm font-medium transition-colors border ${
            activeCategory === "All" 
              ? "bg-vastram-gold text-white border-vastram-gold" 
              : "bg-white text-gray-600 border-gray-200 hover:border-vastram-gold"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-none text-sm font-medium transition-colors border ${
              activeCategory === cat 
                ? "bg-vastram-gold text-white border-vastram-gold" 
                : "bg-white text-gray-600 border-gray-200 hover:border-vastram-gold"
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
            <h2 className="font-playfair text-2xl text-vastram-brown font-bold mb-6">{activeCategory}</h2>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-none overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 w-full relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-5 text-center bg-white border-t border-gray-100">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">
                    {product.category}
                  </p>
                  <h3 className="font-playfair text-lg text-vastram-brown font-bold">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-none border border-gray-100 shadow-sm">
            <h3 className="font-playfair text-2xl text-gray-400">Products for this category will be available soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
