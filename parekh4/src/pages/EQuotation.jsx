import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send, Mail, Calendar, Tag } from 'lucide-react';

const activeQuotations = [
  {
    id: 1,
    title: 'Bulk Silk Saree Quotation',
    description: 'Request for 500 pieces of premium silk sarees in various colours for festive season retail distribution.',
    date: 'Jun 20, 2026',
  },
  {
    id: 2,
    title: 'Cotton Kurti Set — Corporate Order',
    description: 'Quotation for 200 designer cotton kurti sets (sizes S–XL) for a corporate gifting campaign.',
    date: 'Jun 15, 2026',
  },
  {
    id: 3,
    title: 'Home Linen & Bedsheet Procurement',
    description: 'Price quote required for luxury bedsheet sets and pillow covers for hotel chain furnishing.',
    date: 'Jun 08, 2026',
  },
];

const EQuotation = () => {
  return (
    <div className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">e-Quotation</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-4">
          Request a customized price quote for premium wholesale fabrics and collections.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8 sm:space-y-12">

        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-5">
            <ClipboardCheck size={18} className="text-[#d8a5ad] shrink-0" />
            <h2 className="text-[#2d0a4e] font-bold text-base sm:text-xl uppercase tracking-wide">Active Quotation Requests</h2>
          </div>

          {/* Quotation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeQuotations.map((q, idx) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#d8a5ad]/40 transition-all duration-300 p-5 flex flex-col gap-3"
              >
                {/* Logo / Icon */}
                <div className="w-10 h-10 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-[#d8a5ad]" />
                </div>
                {/* Title */}
                <h3 className="font-playfair font-bold text-[#2d0a4e] text-base leading-snug">{q.title}</h3>
                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed flex-grow">{q.description}</p>
                {/* Date */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Calendar size={12} className="text-[#d8a5ad]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{q.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Request a Price Quote Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d8a5ad]/10 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={20} className="text-[#d8a5ad]" />
            </div>
            <div>
              <h2 className="text-[#2d0a4e] font-bold text-lg sm:text-xl uppercase tracking-wide">Request a Price Quote</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Fill in your details below</p>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Name of the Trader <span className="text-[#d8a5ad]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors text-sm" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                  Business Name <span className="text-[#d8a5ad]">*</span>
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
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                Options <span className="text-[#d8a5ad]">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors appearance-none text-sm text-gray-700" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#2d0a4e] font-bold mb-2">
                Particulars of the Products <span className="text-[#d8a5ad]">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#d8a5ad] transition-colors resize-none text-sm"
                placeholder="Enter product details, GSM, quantity, colour, specifications..."
                required
              ></textarea>
            </div>

            <div className="pt-3 sm:pt-4">
              <button type="submit" className="w-full bg-[#2d0a4e] text-white py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#d8a5ad] transition-all duration-300 shadow-md flex items-center justify-center gap-3">
                <Send size={15} /> Submit Quotation Request
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

export default EQuotation;
