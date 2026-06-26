import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Annual General Meeting 2026',
    description:
      'All shareholders, stakeholders and senior management are invited to attend the Annual General Meeting scheduled for November 01, 2026 at the TEXMART Corporate Office, Mumbai. Kindly confirm your attendance by October 20.',
    date: 'Nov 01, 2026',
  },
  {
    id: 2,
    title: 'Warehouse Closure Notice — Mumbai Depot',
    description:
      'The Mumbai warehouse and depot will remain closed from October 20–22, 2026 for scheduled annual maintenance and safety inspections. All pending dispatches will be processed from our Surat facility during this period.',
    date: 'Oct 20, 2026',
  },
  {
    id: 3,
    title: 'e-Way Bill Integration in Partner Portal',
    description:
      'TEXMART has successfully integrated the e-Way Bill generation system directly into the Partner Portal. Partners can now generate, track, and download e-Way Bills seamlessly without leaving the portal dashboard.',
    date: 'Sep 15, 2026',
  },
  {
    id: 4,
    title: 'Recruitment Drive — Zonal Sales Managers',
    description:
      'TEXMART is conducting a pan-India recruitment drive for experienced Zonal Sales Managers across Delhi, Kolkata, Hyderabad, and Chennai. Eligible candidates with 5+ years in textile or FMCG sales may apply at careers@texmart.com.',
    date: 'Aug 22, 2026',
  },
];

const NoticeBoard = () => {
  return (
    <div className="pb-12 sm:pb-16 max-w-4xl mx-auto">
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Notice Board</h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        {notices.map((notice, idx) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white rounded-xl sm:rounded-2xl border border-l-[6px] sm:border-l-8 border-[#d8a5ad] px-5 sm:px-8 py-5 sm:py-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div className="p-2.5 bg-[#d8a5ad]/10 rounded-full shrink-0 mt-0.5">
                <Bell size={16} className="text-[#d8a5ad]" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Date */}
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={11} className="text-gray-400" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{notice.date}</span>
                </div>
                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#2d0a4e] mb-2 leading-snug">
                  {notice.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{notice.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NoticeBoard;
