import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Inbox, FileText, Send } from 'lucide-react';

const EQuotation = () => {
  const activeQuotations = [
    {
      id: 1,
      title: "Bulk Cotton Fabrics Q4 Supply",
      description: "Request for price quotes on high-grade carded cotton shirting fabrics, 150-180 GSM, volume 5000+ meters.",
      date: "Oct 25, 2026"
    },
    {
      id: 2,
      title: "Premium Banarasi Silk Saree Wholesale",
      description: "Price solicitation for 200 units of Handloom Banarasi Silk Sarees for festive seasonal retail stock.",
      date: "Nov 02, 2026"
    }
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          e-Quotation
        </h1>
      </div>

      {/* Main Content Area */}
      
        
        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck size={20} className="text-[#A8C6B6]" />
            <h2 className="text-[#1B484E] font-bold text-lg md:text-xl uppercase tracking-wide">Active Quotation Requests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeQuotations.map((quote) => (
              <div key={quote.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#A8C6B6]/10 flex items-center justify-center text-[#1B484E] shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1B484E] text-base sm:text-lg mb-1.5 leading-snug">{quote.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{quote.description}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Due Date: {quote.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#A8C6B6]/10 rounded-xl flex items-center justify-center">
              <FileText size={24} className="text-[#A8C6B6]" />
            </div>
            <div>
              <h2 className="text-[#1B484E] font-bold text-xl uppercase tracking-wide">Request a Price Quote</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Fill in your details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Name of the Trader <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Business Name <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Business Address with PIN Code <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Mobile No. <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Email ID <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                Options <span className="text-[#A8C6B6]">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors appearance-none text-sm text-gray-700" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                Particulars of the Products <span className="text-[#A8C6B6]">*</span>
              </label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors resize-none text-sm" 
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required 
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#1B484E] text-white py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-widest hover:bg-[#A8C6B6] transition-all duration-300 shadow-md flex items-center justify-center gap-2 sm:gap-3"
              >
                <Send size={16} /> Submit Quotation Request
              </button>
            </div>

            
          </form>
        </motion.div>
      
    </div>
  );
};

export default EQuotation;
