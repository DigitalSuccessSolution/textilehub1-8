import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Rajesh Sharma', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { id: 2, name: 'Ananya Sharma', role: 'Head of Retail Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  { id: 3, name: 'Vikram Mehta', role: 'Supply Chain Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }}>

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center"
        >
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-5xl sm:text-6xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B6B6B' }}>
          SAMRIDDHI is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 sm:gap-8 max-w-5xl mx-auto justify-items-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center w-full max-w-[260px]"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(225,77,42,0.15)',
              }}>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#E14D2A]/20 p-0.5 shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: '#303030' }}>
                {member.name}
              </h3>
              <p className="text-[11px] uppercase tracking-widest font-medium mb-3" style={{ color: '#E14D2A' }}>
                {member.role}
              </p>
              <a href={`mailto:${member.name.toLowerCase().replace(' ', '')}@textilemall.com`}
                 className="text-[11px] font-semibold text-[#6B6B6B] hover:text-[#E14D2A] flex items-center gap-1 transition-colors mt-auto">
                <Mail size={12} color="#E14D2A" /> Email Contact
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
