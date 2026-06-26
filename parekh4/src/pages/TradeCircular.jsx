import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Printer } from 'lucide-react';

const TradeCircular = () => {
  const circulars = [
    { id: 1, title: 'Revised Pricing for Silk Yarns - Q4', date: 'Oct 15, 2026', ref: 'TC/2026/45' },
    { id: 2, title: 'New Distributor Onboarding Guidelines', date: 'Sep 28, 2026', ref: 'TC/2026/42' },
    { id: 3, title: 'Festive Season Dispatch Schedule', date: 'Sep 10, 2026', ref: 'TC/2026/38' },
    { id: 4, title: 'GST Update on Handloom Products', date: 'Aug 05, 2026', ref: 'TC/2026/31' },
  ];

  return (
    <div className="pb-12 sm:pb-16 max-w-5xl mx-auto">
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Trade Circular</h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl sm:rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#2d0a4e] px-5 sm:px-8 py-4 sm:py-6 flex justify-between items-center gap-3">
          <h2 className="text-lg sm:text-xl font-playfair font-bold text-white">Latest Official Circulars</h2>
          <span className="text-[0.6rem] bg-white/10 text-white px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-widest font-bold shrink-0">Document Hub</span>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-100">
          {circulars.map((circular) => (
            <div
              key={circular.id}
              className="px-5 sm:px-8 py-5 sm:py-6 flex flex-col gap-4 hover:bg-pearl-50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-[#d8a5ad] group-hover:bg-[#d8a5ad]/10 transition-all shadow-sm">
                  <FileText size={18} className="text-[#2d0a4e] group-hover:text-[#d8a5ad] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#2d0a4e] text-sm sm:text-base mb-1.5 group-hover:text-[#d8a5ad] transition-colors leading-snug">{circular.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 font-medium">
                    <span>Date: {circular.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 pl-14">
                <button className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-[#2d0a4e] text-[#2d0a4e] text-xs font-bold uppercase tracking-wider hover:bg-[#2d0a4e] hover:text-white transition-all duration-200">
                  <Eye size={13} /> View
                </button>
                <button className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#d8a5ad] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2d0a4e] transition-all duration-200 shadow-sm">
                  <Printer size={13} /> Print
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TradeCircular;
