import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const RetailManagement = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Rajiv Parekh', 
      role: 'Managing Director', 
      image: '/rajiv_parekh.png' 
    },
    { 
      id: 2, 
      name: 'Ananya Sharma', 
      role: 'Head of Retail Operations', 
      image: '/ananya_sharma.png' 
    },
    { 
      id: 3, 
      name: 'Vikram Mehta', 
      role: 'Supply Chain Director', 
      image: '/vikram_mehta.png' 
    }
  ];

  return (
    <div className="pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Our Retail Management</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-4">
          TEXMART is administered and governed by highly skilled, experienced and qualified Management.
        </p>
      </div>

      {/* Team Cards Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto justify-items-center"
      >
        {teamMembers.map((member, idx) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center w-full max-w-[260px] group relative overflow-hidden"
          >
            {/* Round Avatar Profile Image */}
            <div className="relative mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-[#2d0a4e]/5 group-hover:border-[#d8a5ad]/50 transition-all duration-300 shadow-md"
              />
              <a 
                href={`mailto:info@texmart.com`} 
                className="absolute -bottom-1 -right-1 bg-[#2d0a4e] text-white p-1.5 rounded-full shadow-md hover:bg-[#d8a5ad] transition-colors"
                title="Contact Leader"
              >
                <Mail size={12} />
              </a>
            </div>
            
            {/* Title & Role */}
            <h3 className="font-playfair text-base sm:text-lg font-bold text-[#2d0a4e] leading-tight mb-1 group-hover:text-[#d8a5ad] transition-colors">
              {member.name}
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
