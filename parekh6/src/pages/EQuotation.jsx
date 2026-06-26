import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Send } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">e-Quotation</h1>
      </div>

      {/* Main Content Area */}
      {/* Main Content Area */}
      <div className="space-y-12">
        
        {/* Active Quotation Requests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck size={20} className="text-vastram-gold" />
            <h2 className="text-vastram-brown font-bold text-lg md:text-xl uppercase tracking-wide">Active Quotation Requests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-vastram-cream text-vastram-gold">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] bg-vastram-cream text-vastram-gold font-bold px-2.5 py-1 uppercase tracking-wider">Active</span>
              </div>
              <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Premium Cotton Fabric Supply</h3>
              <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                Requirement for 10,000 meters of 100% organic combed cotton, 180 GSM, width 58/60 inches, dyed in standard pastel colors.
              </p>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                <span>Ref: EQ-2026-004</span>
                <span>Due: 15 July 2026</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-vastram-cream text-vastram-gold">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] bg-vastram-cream text-vastram-gold font-bold px-2.5 py-1 uppercase tracking-wider">Active</span>
              </div>
              <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Jacquard Silk Brocade</h3>
              <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                Seeking suppliers for premium Jacquard silk brocade fabric for festive wear. Quantity: 2,500 meters in multi-color ethnic motifs.
              </p>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                <span>Ref: EQ-2026-005</span>
                <span>Due: 20 July 2026</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-vastram-cream text-vastram-gold">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] bg-vastram-cream text-vastram-gold font-bold px-2.5 py-1 uppercase tracking-wider">Active</span>
              </div>
              <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Linen-Viscose Blends</h3>
              <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                Bulk quotation for linen-viscose blend fabrics suitable for summer shirting. 55% linen / 45% viscose. Volume: 5,000 meters.
              </p>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                <span>Ref: EQ-2026-006</span>
                <span>Due: 25 July 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Request a Price Quote Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-none p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-vastram-gold/10 rounded-none flex items-center justify-center">
              <FileText size={24} className="text-vastram-gold" />
            </div>
            <div>
              <h2 className="text-vastram-brown font-bold text-xl uppercase tracking-wide">Request a Price Quote</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Fill in your details below</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Name of the Trader <span className="text-vastram-gold">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Business Name <span className="text-vastram-gold">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Business Address with Pin Code <span className="text-vastram-gold">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  GST No.
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Mobile No. <span className="text-vastram-gold">*</span>
                </label>
                <input type="tel" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Email ID <span className="text-vastram-gold">*</span>
                </label>
                <input type="email" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                Options <span className="text-vastram-gold">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors appearance-none text-sm text-gray-700" required>
                <option value="" disabled selected>Select Option</option>
                <option value="option1">Textile Products</option>
                <option value="option2">Raw Materials</option>
                <option value="option3">Corporate Gifting</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                Particulars of the Products <span className="text-vastram-gold">*</span>
              </label>
              <textarea 
                rows="4" 
                className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors resize-none text-sm" 
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required 
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-vastram-brown text-white py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-vastram-gold transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={16} /> Submit Quotation Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EQuotation;
