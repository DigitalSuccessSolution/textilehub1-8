import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/cards/ProductCard';
import { categories } from '../data/mockData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allProducts = [
    { id: 101, name: 'Premium Banarasi Silk Saree', category: 'Sarees', price: '$120', image: 'https://images.unsplash.com/photo-1583391733958-650fac5ecf7c?auto=format&fit=crop&q=80&w=800' },
    { id: 102, name: 'Premium Stretch Cotton Leggings', category: 'Leggings', price: '$25', image: 'https://images.unsplash.com/photo-1644225450138-9f4f9e2d4582?w=600&auto=format&fit=crop&q=60' },
    { id: 103, name: 'Designer Georgette Anarkali Kurti', category: 'Kurtis', price: '$85', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=600&auto=format&fit=crop&q=60' },
    { id: 104, name: 'Embroidered Salwar Kameez Suit', category: 'Dress Suits', price: '$95', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
    { id: 105, name: 'Luxury Cotton Satin Bedsheet Set', category: 'Bedsheets & Linen', price: '$65', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800' },
    { id: 106, name: 'Comfort Fit Hosiery Socks (Pack of 5)', category: 'Hosiery Items', price: '$15', image: 'https://images.unsplash.com/photo-1565190127837-bfb8214b7e30?w=600&auto=format&fit=crop&q=60' },
    { id: 107, name: 'Superfine Merino Wool Suiting Fabric', category: 'Suiting', price: '$180', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=800' },
    { id: 108, name: 'Premium Egyptian Giza Cotton Shirting', category: 'Shirting', price: '$40', image: 'https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=600&auto=format&fit=crop&q=60' },
    { id: 109, name: 'Handcrafted Bridal Silk Lehenga', category: 'Formal & Ethnic Wear for Women', price: '$450', image: 'https://images.unsplash.com/photo-1765020554161-720e1d23623a?w=600&auto=format&fit=crop&q=60' },
    { id: 110, name: 'Royal Sherwani & Dupatta Set', category: 'Formal & Ethnic Wear for Men', price: '$299', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60' },
    { id: 111, name: 'Kids Velvet Kurta Pyjama', category: 'Formal & Ethnic Wear for Children', price: '$35', image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&auto=format&fit=crop&q=60' },
    { id: 112, name: 'Jacquard Chenille Sofa Cover Fabric', category: 'Home Upholstery & Furnishing', price: '$80', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60' }
  ];

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div>
      <PageHeader title="Our Products" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            {/* Desktop Sidebar (hidden on mobile/tablet) */}
            <div className="hidden lg:block bg-white border border-[#0B1C3E]/8 sticky top-28">
              <div className="bg-[#0B1C3E] px-6 py-4">
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#D4A853] font-medium">Categories</h3>
              </div>
              <div className="p-3 max-h-[70vh] overflow-y-auto">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`w-full text-left px-4 py-2.5 text-sm mb-1 transition-all duration-200 border-l-2 ${
                    activeCategory === 'All'
                      ? 'border-[#D4A853] text-[#D4A853] bg-[#FAF7F0] font-medium'
                      : 'border-transparent text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full text-left px-4 py-2.5 text-sm mb-1 transition-all duration-200 border-l-2 ${
                      activeCategory === cat.name
                        ? 'border-[#D4A853] text-[#D4A853] bg-[#FAF7F0] font-medium'
                        : 'border-transparent text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal scrollable chips (hidden on desktop) */}
            <div className="lg:hidden w-full mb-2">
              <div className="flex gap-2 overflow-x-auto pb-3 snap-x snap-mandatory hide-scrollbar">
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`flex-none snap-start px-4 py-2 text-xs uppercase tracking-wider font-medium border rounded-full transition-all duration-200 whitespace-nowrap ${
                    activeCategory === 'All'
                      ? 'bg-[#0B1C3E] border-[#0B1C3E] text-[#D4A853]'
                      : 'bg-white border-[#0B1C3E]/10 text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex-none snap-start px-4 py-2 text-xs uppercase tracking-wider font-medium border rounded-full transition-all duration-200 whitespace-nowrap ${
                      activeCategory === cat.name
                        ? 'bg-[#0B1C3E] border-[#0B1C3E] text-[#D4A853]'
                        : 'bg-white border-[#0B1C3E]/10 text-[#6B7A99] hover:text-[#0B1C3E] hover:border-[#D4A853]/40'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {/* Count row */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[#6B7A99] font-light">
                Showing <span className="text-[#0B1C3E] font-medium">{filteredProducts.length}</span> products
                {activeCategory !== 'All' && <span className="text-[#D4A853]"> in {activeCategory}</span>}
              </p>
            </div>

            {/* Products grid - 2 columns on mobile, 3 columns on large screens */}
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24 text-[#6B7A99] font-light">
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-6" />
                No products found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
