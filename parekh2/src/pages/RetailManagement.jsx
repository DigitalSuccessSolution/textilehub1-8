import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Mail } from 'lucide-react';

const RetailManagement = () => {
  const managers = [
    {
      name: 'Rajesh Sharma',
      role: 'Managing Director',
      description: 'Business Strategy & Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      description: 'Retail Management & Customer Experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      description: 'Logistics & Trade Relations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
    }
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <PageHeader title="Our Retail Management" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-maroon">Excellence in Operations</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Discover how we manage a vast network of retail supply chains to deliver unparalleled quality.
          </p>
          <div className="w-16 h-1 bg-[#064e3b] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {managers.map((manager, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 text-center flex flex-col items-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                <img 
                  src={manager.image} 
                  alt={manager.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-serif font-bold text-brand-darkbrown mb-1">
                {manager.name}
              </h3>
              
              <span className="text-brand-gold uppercase text-[9px] md:text-[11px] font-bold tracking-widest block mb-3">
                {manager.role}
              </span>
              
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {manager.description}
              </p>
              
              <a 
                href={`mailto:${manager.name.toLowerCase().replace(' ', '.')}@sutratex.com`}
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-200 bg-gray-50 hover:bg-brand-maroon hover:text-white hover:border-brand-maroon text-gray-700 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <Mail className="w-3 h-3" />
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
