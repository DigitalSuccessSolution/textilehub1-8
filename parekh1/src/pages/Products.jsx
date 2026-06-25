import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/cards/ProductCard';
import { featuredProducts, categories } from '../data/mockData';


const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const allProducts = [
    { id: 101, name: 'Premium Banarasi Silk Saree', category: 'Sarees', image: 'https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?w=800&auto=format&fit=crop&q=80' },
    { id: 102, name: 'Premium Stretch Cotton Leggings', category: 'Leggings', image: 'https://images.unsplash.com/photo-1644225450138-9f4f9e2d4582?w=800&auto=format&fit=crop&q=80' },
    { id: 103, name: 'Designer Embroidered Kurti', category: 'Kurtis', image: 'https://images.unsplash.com/photo-1741847639057-b51a25d42892?w=800&auto=format&fit=crop&q=80' },
    { id: 104, name: 'Anarkali Salwar Suit', category: 'Dress Suits', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80' },
    { id: 105, name: 'Luxury Cotton Bedsheet Set', category: 'Bedsheets & Linen', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80' },
    { id: 106, name: 'Soft Cotton Hosiery Innerwear', category: 'Hosiery Items', image: 'https://images.unsplash.com/photo-1565190127837-bfb8214b7e30?w=800&auto=format&fit=crop&q=80' },
    { id: 107, name: 'Premium Wool Blend Suiting', category: 'Suiting', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=800&auto=format&fit=crop&q=80' },
    { id: 108, name: 'Fine Cotton Shirting Fabric', category: 'Shirting', image: 'https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=800&auto=format&fit=crop&q=80' },
    { id: 109, name: 'Bridal Lehenga Set', category: 'Formal & Ethnic Wear for Women', image: 'https://images.unsplash.com/photo-1765020554161-720e1d23623a?w=800&auto=format&fit=crop&q=80' },
    { id: 110, name: 'Embroidered Wedding Sherwani', category: 'Formal & Ethnic Wear for Men', image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=800&auto=format&fit=crop&q=80' },
    { id: 111, name: 'Kids Festive Kurta Pyjama', category: 'Formal & Ethnic Wear for Children', image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&auto=format&fit=crop&q=80' },
    { id: 112, name: 'Premium Jacquard Sofa Fabric', category: 'Home Upholstery & Furnishing', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80' }
  ];

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory || categories.find(c => c.name === activeCategory)?.name === p.category);

  return (
    <div>
      <PageHeader title="Our Products" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-100 lg:sticky lg:top-24">
              <h3 className="text-lg lg:text-xl font-serif font-bold text-brand-darkbrown mb-4 border-b pb-2 text-center lg:text-left">
                Categories
              </h3>
              <ul className="flex flex-wrap lg:flex-col lg:flex-nowrap gap-2 lg:gap-1.5 lg:max-h-[65vh] lg:overflow-y-auto lg:overflow-x-hidden lg:pr-2 custom-scrollbar justify-center lg:justify-start">
                <li>
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`w-auto lg:w-full text-center lg:text-left px-3.5 py-1.5 lg:px-2.5 lg:py-1.5 rounded-full lg:rounded-md text-xs lg:text-sm font-sans font-medium transition-all border lg:border-0 cursor-pointer ${activeCategory === 'All'
                        ? 'bg-brand-light text-brand-maroon border-brand-maroon font-semibold'
                        : 'bg-white lg:bg-transparent text-gray-600 border-gray-200 hover:text-brand-maroon hover:border-brand-maroon'
                      }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-auto lg:w-full text-center lg:text-left px-3.5 py-1.5 lg:px-2.5 lg:py-1.5 rounded-full lg:rounded-md text-xs lg:text-sm font-sans font-medium transition-all border lg:border-0 cursor-pointer ${activeCategory === cat.name
                          ? 'bg-brand-light text-brand-maroon border-brand-maroon font-semibold'
                          : 'bg-white lg:bg-transparent text-gray-600 border-gray-200 hover:text-brand-maroon hover:border-brand-maroon'
                        }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500">
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
