import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const RetailManagement = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&h=350&q=80',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&h=350&q=80',
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=350&h=350&q=80',
    }
  ];

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4">

      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Our Retail Management</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
          TEXTILE MALL is administered and governed by highly skilled, experienced and qualified Management.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {teamMembers.map((member, idx) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-vastram-gold p-1 bg-vastram-cream mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-playfair font-bold text-vastram-brown mb-1">{member.name}</h3>
            <p className="text-xs uppercase tracking-widest text-vastram-gold font-medium mb-3">{member.role}</p>
            <a 
              href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@textilemall.com`} 
              className="text-gray-400 hover:text-vastram-gold transition-colors mt-auto"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RetailManagement;
