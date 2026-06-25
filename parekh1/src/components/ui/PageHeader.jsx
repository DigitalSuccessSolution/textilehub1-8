import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="bg-brand-darkbrown text-white py-10 sm:py-14 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1673356302101-e69975f7109a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaW9ufGVufDB8fDB8fHww)",
        }}
      />
      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darkbrown/60 to-brand-maroon/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-beige">
          {title}
        </h1>
        {/* Decorative underline */}
        <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-brand-maroon opacity-70" />
      </div>
    </div>
  );
};

export default PageHeader;
