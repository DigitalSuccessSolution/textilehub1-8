import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProductCard from '../components/cards/ProductCard';
import { categories, allProducts } from '../data/mockData';


const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory || categories.find(c => c.name === activeCategory)?.name === p.category);

  return (
    <div>
      <PageHeader title="Our Products" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-100 lg:sticky lg:top-24">
              <h3 className="text-lg lg:text-xl font-serif font-bold text-brand-darkbrown mb-3 lg:mb-4 border-b pb-2">Categories</h3>
              <ul className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-start lg:flex-col gap-2 lg:gap-0 lg:space-y-1.5 lg:max-h-[60vh] overflow-x-hidden lg:overflow-y-auto lg:pr-4 custom-scrollbar">
                <li className="flex-shrink-0 w-auto lg:w-full">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`w-full text-center lg:text-left whitespace-nowrap lg:whitespace-normal px-3 py-1.5 lg:px-3 lg:py-2 rounded transition-colors ${activeCategory === 'All' ? 'bg-brand-maroon/10 lg:bg-brand-maroon/5 text-brand-maroon font-semibold border border-brand-maroon/20 lg:border-none' : 'text-gray-600 hover:text-brand-maroon bg-gray-50 lg:bg-transparent hover:lg:bg-brand-maroon/5 border border-gray-100 lg:border-none'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id} className="flex-shrink-0 w-auto lg:w-full">
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-center lg:text-left whitespace-nowrap lg:whitespace-normal px-3 py-1.5 lg:px-3 lg:py-2 rounded transition-colors ${activeCategory === cat.name ? 'bg-brand-maroon/10 lg:bg-brand-maroon/5 text-brand-maroon font-semibold border border-brand-maroon/20 lg:border-none' : 'text-gray-600 hover:text-brand-maroon bg-gray-50 lg:bg-transparent hover:lg:bg-brand-maroon/5 border border-gray-100 lg:border-none'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
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
