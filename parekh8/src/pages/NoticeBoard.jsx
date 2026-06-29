import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Annual General Meeting 2026',
    date: 'Nov 01, 2026',
    description: 'The Annual General Meeting of the company will be held to discuss the retail chain expansion strategies and financial reports.'
  },
  {
    id: 2,
    title: 'Warehouse Closure Notice for Maintenance',
    date: 'Oct 20, 2026',
    description: 'The Mumbai depot warehouse will remain closed for bi-annual maintenance and stock inventory audit.'
  },
  {
    id: 3,
    title: 'Introduction of e-Way Bill Integration',
    date: 'Sep 15, 2026',
    description: 'Direct e-way bill generation is now integrated into the partner retail portal for faster dispatch operations.'
  },
  {
    id: 4,
    title: 'Recruitment Drive for Zonal Sales Managers',
    date: 'Aug 22, 2026',
    description: 'We are accepting applications for the role of Zonal Sales Managers across our West and North zone regional offices.'
  }
];

const NoticeBoard = () => {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }} className="min-h-screen">

      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#303030]"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(225, 77, 42, 0.15)',
              }}
            >
              <div>
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: 'rgba(225, 77, 42, 0.08)', border: '1px solid rgba(225, 77, 42, 0.2)' }}>
                  <Bell size={18} color="#E14D2A" />
                </div>

                <div className="flex flex-col">
                  {/* Date */}
                  <span className="text-[11px] font-bold uppercase tracking-wider mb-2.5" style={{ color: '#E14D2A' }}>
                    {notice.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-[16px] font-bold leading-snug mb-3 text-[#303030]"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {notice.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed" style={{ color: '#6B6B6B' }}>
                    {notice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
