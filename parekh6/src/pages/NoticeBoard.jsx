import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      date: 'Nov 01, 2026', 
      description: 'The Board of Directors cordially invites all shareholders to the Annual General Meeting of Textile Mall to discuss financial statements, dividend declarations, and future growth strategies.' 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance', 
      date: 'Oct 20, 2026', 
      description: 'Our main logistics hub in Mumbai will remain closed for biannual structural maintenance and inventory audit. Partners are advised to plan dispatch schedules accordingly.' 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration', 
      date: 'Sep 15, 2026', 
      description: 'Starting next month, our B2B partner portal will support automated e-way bill generation to speed up invoice clearing and improve dispatch logistics transparency.' 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      date: 'Aug 22, 2026', 
      description: 'We are expanding our retail footprint in Northern and Western regions. Applications are now open for experienced retail professionals to lead regional operations.' 
    },
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Notice Board</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="group bg-white rounded-none border border-gray-100 p-6 md:p-8 cursor-pointer flex flex-col justify-between hover:border-vastram-gold hover:shadow-lg transition-all duration-300"
          >
            <div>
              <span className="text-[10px] text-vastram-gold font-bold uppercase tracking-[0.1em] block mb-3">
                {notice.date}
              </span>
              
              <h3 className="text-lg font-playfair font-bold text-vastram-brown group-hover:text-vastram-gold transition-colors leading-snug mb-3">
                {notice.title}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed">
                {notice.description}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-[10px] font-bold tracking-widest text-vastram-brown uppercase group-hover:text-vastram-gold transition-colors">
              Read Details <ArrowRight size={12} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
