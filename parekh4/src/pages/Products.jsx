import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: 'Premium Silk Saree',
    category: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Stretch Cotton Leggings',
    category: 'Leggings',
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Designer Kurti Set',
    category: 'Kurtis',
    image: '/designer_kurti.png',
  },
  {
    id: 4,
    name: 'Embroidered Dress Suit',
    category: 'Dress Suits',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Luxury Cotton Bedsheet Set',
    category: 'Bedsheets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Premium Cotton Hosiery',
    category: 'Hosiery',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    name: 'Classic Men\'s Suit Fabric',
    category: 'Suiting',
    image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    name: 'Oxford Formal Shirt Fabric',
    category: 'Shirting',
    image: 'https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 9,
    name: 'Anarkali Ethnic Suit — Women',
    category: "Women's Wear",
    image: '/anarkali_ethnic_suit.png',
  },
  {
    id: 10,
    name: 'Sherwani — Men\'s Ethnic',
    category: "Men's Wear",
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 11,
    name: 'Festive Wear — Children',
    category: "Kids' Wear",
    image: '/children_festive_wear.png',
  },
  {
    id: 12,
    name: 'Velvet Sofa Upholstery Fabric',
    category: 'Home Furnishing',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80',
  },
];

const categories = [
  'Sarees', 'Leggings', 'Kurtis', 'Dress Suits',
  'Bedsheets', 'Hosiery', 'Suiting', 'Shirting',
  "Women's Wear", "Men's Wear", "Kids' Wear", 'Home Furnishing',
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8 flex flex-col items-center justify-center gap-4">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">
          Product
        </h1>
        <div className="bg-[#2d0a4e] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-md shrink-0 text-xs sm:text-sm font-bold">
          <ShoppingBag size={15} />
          <span>{filtered.length} Products</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:gap-3 mb-8 sm:mb-12">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-1.5 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-all border text-center truncate ${activeCategory === 'All'
              ? 'bg-[#d8a5ad] text-white border-[#d8a5ad] shadow-md'
              : 'bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]'
            }`}
          title="All"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-1.5 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-all border text-center truncate ${activeCategory === cat
                ? 'bg-[#d8a5ad] text-white border-[#d8a5ad] shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#d8a5ad]'
              }`}
            title={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filtered.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="h-40 sm:h-52 md:h-60 w-full relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-3 sm:p-5 text-center bg-white border-t border-gray-100">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mb-1 sm:mb-2 font-medium">
                {product.category}
              </p>
              <h3 className="font-playfair text-sm sm:text-lg text-[#2d0a4e] font-bold leading-tight">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
