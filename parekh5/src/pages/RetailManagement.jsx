import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'Managing Director',
      email: 'rajesh@textilemall.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      email: 'ananya@textilemall.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      email: 'vikram@textilemall.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
    }
  ];

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4">
      {/* Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">Our Retail Management</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4 leading-relaxed px-4">
          TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4"
      >
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 text-center flex flex-col items-center"
          >
            {/* Rounded profile photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#A8C6B6]/30 shadow-sm">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-playfair font-bold text-[#1B484E] mb-1">{member.name}</h3>
            <p className="text-xs uppercase tracking-widest text-[#A8C6B6] font-bold mb-3">{member.role}</p>
            
            <a 
              href={`mailto:${member.email}`} 
              className="w-8 h-8 bg-pearl-50 hover:bg-[#1B484E] hover:text-white rounded-full flex items-center justify-center text-gray-500 transition-colors border border-gray-100"
            >
              <Mail size={14} />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
