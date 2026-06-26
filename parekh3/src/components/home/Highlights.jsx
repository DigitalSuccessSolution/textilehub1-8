import React from 'react';
import { Award, ShieldCheck, Truck, Clock } from 'lucide-react';

const Highlights = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Finest textiles sourced from master weavers and manufacturers across India.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Heritage',
      description: 'Over three decades of expertise in premium textile retail.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Reliable and fast shipping across all regions in India.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Dedicated customer service to assist your business needs.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#0B1C3E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #D4A853 0px, #D4A853 1px, transparent 1px, transparent 60px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] font-medium mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white">
            The LuminaTex Advantage
          </h2>
          <div className="w-10 h-0.5 bg-[#D4A853] mx-auto mt-3" />
        </div>

        {/* Cards - Responsive 2-column layout on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#132452]/20 border border-white/5 p-4 sm:p-6 lg:p-8 rounded-xl flex flex-col hover:bg-[#132452]/50 hover:border-[#D4A853]/30 transition-all duration-300"
            >
              <div className="mb-4 w-10 h-10 border border-[#D4A853]/20 rounded-lg flex items-center justify-center group-hover:border-[#D4A853] group-hover:bg-[#D4A853]/10 transition-all duration-300">
                <feature.icon className="w-4 h-4 text-[#D4A853]" />
              </div>
              <h3 className="text-base md:text-lg font-serif font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">{feature.description}</p>
              {/* Bottom accent line */}
              <div className="mt-auto pt-4">
                <div className="h-px bg-[#D4A853]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
