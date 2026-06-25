import React from 'react';
import { Award, Truck, ShieldCheck, Clock } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 sm:w-10 h-10 transition-transform duration-300" />,
      title: 'Premium Quality',
      description: 'Finest textiles sourced from the best weavers and manufacturers.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 sm:w-10 h-10 transition-transform duration-300" />,
      title: 'Trusted Heritage',
      description: 'Decades of experience in the textile retail business.'
    },
    {
      icon: <Truck className="w-8 h-8 sm:w-10 h-10 transition-transform duration-300" />,
      title: 'Pan India Delivery',
      description: 'Reliable and fast shipping across all regions in India.'
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 h-10 transition-transform duration-300" />,
      title: '24/7 Support',
      description: 'Dedicated customer service to assist your business needs.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-brand-darkbrown text-white border-t border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
            >
              <div className="mb-3.5 bg-white/[0.06] p-3 sm:p-4 rounded-xl border border-white/[0.08] text-brand-beige group-hover:bg-brand-maroon group-hover:border-brand-maroon group-hover:text-brand-light group-hover:scale-105 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-serif font-bold mb-1.5 text-brand-beige transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[145px] sm:max-w-none">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
