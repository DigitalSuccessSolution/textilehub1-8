import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      date: 'Nov 01, 2026',
      description: 'The annual meeting of shareholders will be held at our headquarters to discuss the financial performance, future roadmaps, and key leadership appointments for the upcoming fiscal year.' 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      date: 'Oct 20, 2026',
      description: 'Our primary warehouse in Mumbai will remain closed for a comprehensive machinery and inventory audit. Partners are advised to schedule dispatches accordingly.' 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      date: 'Sep 15, 2026',
      description: 'We have updated our supplier portal to support automated e-way bill generation, facilitating direct tracking and faster clearance of consignments across states.' 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      date: 'Aug 22, 2026',
      description: 'Applications are open for seasoned sales professionals to drive growth in Western and Northern India regions. Interested candidates can apply via the careers portal.' 
    },
  ];

  return (
    <div className="pb-16 max-w-4xl mx-auto px-4">
      {/* Centered Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          Notice Board
        </h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="group bg-white rounded-2xl border border-gray-100 px-4 py-5 sm:px-8 sm:py-6 cursor-pointer flex items-center justify-between hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-5 mr-4">
              <div className="p-3 rounded-full shrink-0 bg-gray-50 group-hover:bg-[#A8C6B6]/10 transition-colors mt-0.5">
                <Bell size={20} className="text-gray-400 group-hover:text-[#A8C6B6] transition-colors" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{notice.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1B484E] group-hover:text-[#A8C6B6] transition-colors mb-1.5">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {notice.description}
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-[#A8C6B6] transition-colors shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
