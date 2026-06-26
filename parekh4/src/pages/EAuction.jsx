import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send, Mail, Calendar, Tag } from 'lucide-react';

const activeAuctions = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?w=600&auto=format&fit=crop&q=60',
    title: 'Silk Saree Liquidation Lot',
    description: 'Premium silk saree stock — 300 pieces in assorted prints and colours. Ideal for retailers and distributors.',
    date: 'Jun 25, 2026',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=600&auto=format&fit=crop&q=60',
    title: 'Suiting Fabric Surplus Auction',
    description: 'High-quality woollen and polyester suiting fabric surplus — 1,200 metres available in navy, grey, and charcoal.',
    date: 'Jun 22, 2026',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=60',
    title: 'Home Linen Clearance',
    description: 'End-of-season luxury bedsheet sets and curtain fabric. 400 sets available for bulk purchase at reduced rates.',
    date: 'Jun 18, 2026',
  },
];

const EAuction = () => {
  return (
    <div className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">e-Auction</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-4">
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8 sm:space-y-12">

        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Gavel size={18} className="text-[#d8a5ad] shrink-0" />
            <h2 className="text-[#2d0a4e] font-playfair font-bold text-lg sm:text-xl">Active e-Auctions</h2>
          </div>

          {/* Auction Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {activeAuctions.map((auction, idx) => (
              <motion.div
                key={auction.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#d8a5ad]/40 transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="h-40 sm:h-44 overflow-hidden relative">
                  <img
                    src={auction.image}
                    alt={auction.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <h3 className="font-playfair font-bold text-[#2d0a4e] text-base leading-snug">{auction.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{auction.description}</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100 mt-1">
                    <Calendar size={11} className="text-[#d8a5ad]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{auction.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Participation Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center shrink-0">
              <Gavel size={20} className="text-[#d8a5ad]" />
            </div>
            <div>
              <h2 className="text-[#2d0a4e] font-playfair font-bold text-lg sm:text-2xl uppercase tracking-wide">Participation Registration</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Name of the Participant <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Legal Name of Business <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Business Address with Pin Code <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">GST No.</label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Mobile No. <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Email ID <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-3">
                Upload GST Certificate <span className="text-[#d8a5ad]">*</span>
              </label>
              <label 
                htmlFor="gst-upload" 
                className="w-full border-2 border-dashed border-gray-200 rounded-xl sm:rounded-2xl py-10 sm:py-12 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <input 
                  type="file" 
                  id="gst-upload" 
                  accept=".pdf,image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      alert(`Selected file: ${e.target.files[0].name}`);
                    }
                  }}
                  required
                />
                <UploadCloud size={28} className="text-gray-300 group-hover:text-[#d8a5ad] mb-3 transition-colors" />
                <p className="text-gray-500 font-medium text-sm text-center px-4">Click to upload GST Certificate</p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
              </label>
            </div>

            <div className="pt-3 sm:pt-4">
              <button type="submit" className="w-full bg-[#2d0a4e] text-white py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#d8a5ad] transition-all duration-300 shadow-md flex items-center justify-center gap-3">
                <Send size={15} /> Submit Registration
              </button>
            </div>

            <div className="pt-2 text-center flex items-center justify-center gap-2">
              <Mail size={13} className="text-[#d8a5ad]" />
              <a href="mailto:info@texmart.com" className="text-[#d8a5ad] text-[11px] font-bold tracking-widest hover:underline">
                info@texmart.com
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
