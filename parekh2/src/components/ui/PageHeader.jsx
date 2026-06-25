import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="bg-brand-darkbrown text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-beige">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
