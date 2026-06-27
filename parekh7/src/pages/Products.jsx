import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const categories = [
  "Sarees", "Leggings", "Kurtis", "Dress Suits",
  "Bedsheets & Linen", "Hosiery Items", "Suiting", "Shirting",
  "Formal & Ethnic Wear for Women", "Formal & Ethnic Wear for Men",
  "Formal & Ethnic Wear for Children", "Home Upholstery & Furnishing"
];

const allProducts = [
  { id: 101, name: 'Premium Banarasi Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=60' },
  { id: 102, name: 'Stretchable Cotton Leggings', category: 'Leggings', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600&auto=format&fit=crop&q=60' },
  { id: 103, name: 'Embroidered Cotton Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=60' },
  { id: 104, name: 'Anarkali Salwar Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=60' },
  { id: 105, name: 'Luxury Cotton Bedsheet Set', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60' },
  { id: 106, name: 'Soft Hosiery Cotton Socks', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=60' },
  { id: 107, name: 'Premium Wool Blend Suiting', category: 'Suiting', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=60' },
  { id: 108, name: 'Classic Oxford Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=60' },
  { id: 109, name: 'Designer Wedding Bridal Lehenga', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60' },
  { id: 110, name: 'Royal Embroidered Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=600&auto=format&fit=crop&q=60' },
  { id: 111, name: 'Kids Festive Kurta Pajama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=60' },
  { id: 112, name: 'Premium Velvet Upholstery Fabric', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative py-8 sm:py-10 min-h-[140px] overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-5xl sm:text-6xl text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Catalogue
            </h1>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg"
            style={{ background: 'linear-gradient(135deg, #C9A227, #E2C65A)', color: '#1A0A05' }}>
            <ShoppingBag size={16} />
            <span className="font-bold text-sm">{filteredProducts.length} Products</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-200"
              style={activeCategory === cat
                ? { background: 'linear-gradient(135deg, #B83227, #C0392B)', color: '#fff', boxShadow: '0 4px 12px rgba(184,50,39,0.3)' }
                : { background: '#FFFBF5', color: '#7D5A4F', border: '1px solid rgba(201,162,39,0.2)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.15)' }}
              >
                <div className="h-40 sm:h-60 w-full relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(26,10,5,0.3)' }} />
                </div>
                <div className="p-3 sm:p-4 text-center border-t" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                  <p className="text-[10px] uppercase tracking-widest font-medium mb-1" style={{ color: '#C9A227' }}>
                    {product.category}
                  </p>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl"
            style={{ background: '#FFFBF5', border: '1px solid rgba(201,162,39,0.15)' }}>
            <p className="text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#A68B7C' }}>
              Products for this category will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
