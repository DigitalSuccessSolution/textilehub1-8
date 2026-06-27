import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const notices = [
  { id: 1, title: 'Annual General Meeting 2026', date: 'Nov 01, 2026', desc: 'The Annual General Meeting of Textile Mall will be held at our Chennai headquarters to discuss the Q4 expansion strategy.' },
  { id: 2, title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', date: 'Oct 20, 2026', desc: 'Our Mumbai distribution depot will remain closed for routine maintenance. Dispatch operations will resume on Oct 23.' },
  { id: 3, title: 'Introduction of e-Way Bill Integration in Partner Portal', date: 'Sep 15, 2026', desc: 'We are launching the unified e-Way bill submission system on our merchant portal to streamline logistics compliance.' },
  { id: 4, title: 'Recruitment Drive for Zonal Sales Managers', date: 'Aug 22, 2026', desc: 'Textile Mall is hiring experienced Sales Managers to lead our upcoming retail clusters in Western India.' },
];

const NoticeBoard = () => {
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
            Notice Board
          </h1>
        </div>
      </div>

      <div className="pb-16 max-w-4xl mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="group rounded-2xl px-6 py-5 cursor-pointer flex items-start justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: '#FFFBF5',
                border: '1.5px solid rgba(201,162,39,0.15)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)' }}>
                  <Bell size={18} color="#C9A227" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#A68B7C' }}>{notice.date}</span>
                  </div>
                  <h3 className="text-[16px] font-bold leading-snug mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                    {notice.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#7D5A4F]">
                    {notice.desc}
                  </p>
                </div>
              </div>
              <ChevronRight size={18} className="shrink-0 mt-1.5 ml-4 transition-transform group-hover:translate-x-1" color="#C9A227" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NoticeBoard;
