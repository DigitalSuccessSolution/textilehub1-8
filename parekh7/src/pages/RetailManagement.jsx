import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const teamMembers = [
  { 
    id: 1, 
    name: 'Rajesh Sharma', 
    role: 'Managing Director', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Ananya Sharma', 
    role: 'Head of Retail Operations', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Vikram Mehta', 
    role: 'Supply Chain Director', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' 
  },
];

const RetailManagement = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative py-8 sm:py-10 min-h-[140px] overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Retail Management
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#7D5A4F' }}>
          TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto justify-items-center"
        >
          {teamMembers.map((member) => (
            <div key={member.id}
              className="group flex flex-col items-center p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg max-w-[260px] w-full text-center"
              style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}>
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-2 border-[#C9A227]/40 group-hover:border-[#C9A227] transition-colors relative shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-[#2C1810] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {member.name}
              </h3>
              <p className="text-[11px] uppercase tracking-wider font-bold mb-3" style={{ color: '#C9A227' }}>
                {member.role}
              </p>
              
              <a 
                href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@textilemall.com`} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#A68B7C] hover:text-[#B83227] hover:bg-red-50 transition-all duration-200"
                style={{ border: '1px solid rgba(201,162,39,0.2)' }}
              >
                <Mail size={14} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RetailManagement;
