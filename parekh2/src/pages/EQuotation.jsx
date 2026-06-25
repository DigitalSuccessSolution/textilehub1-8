import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, CheckCircle, Clock, Send } from 'lucide-react';

const EQuotation = () => {
  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <PageHeader title="e-Quotation" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Recent Quotations Block */}
        <div className="bg-[#022c22] text-white p-6 sm:p-8 rounded-3xl shadow-md mb-12 border border-emerald-950">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Recent Quotations</h3>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/20 text-white/95 bg-white/5 rounded-full px-3 py-1">
              Live Updates
            </span>
          </div>
          
          <div className="space-y-4">
            {/* Quote 1 */}
            <div className="bg-white p-4 md:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border border-gray-100 gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-[#064e3b]/5 text-[#064e3b] rounded-xl mr-4 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-bold text-base md:text-lg text-brand-darkbrown">Quote #QT-2026-104</h4>
                    <span className="text-xs text-gray-500">June 25, 2026</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Premium Organic Cotton Yarn (Qty: 5000 kg) for Export</p>
                </div>
              </div>
              <div className="inline-flex items-center text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Approved
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white p-4 md:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border border-gray-100 gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-[#064e3b]/5 text-[#064e3b] rounded-xl mr-4 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-bold text-base md:text-lg text-brand-darkbrown">Quote #QT-2026-103</h4>
                    <span className="text-xs text-gray-500">June 24, 2026</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Handloom Banarasi Silk Sarees (Qty: 250 pcs) for Festive Stock</p>
                </div>
              </div>
              <div className="inline-flex items-center text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Approved
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-white p-4 md:p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border border-gray-100 gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-[#064e3b]/5 text-[#064e3b] rounded-xl mr-4 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h4 className="font-bold text-base md:text-lg text-brand-darkbrown">Quote #QT-2026-102</h4>
                    <span className="text-xs text-gray-500">June 22, 2026</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Linen-Cotton Blend Fabrics (Qty: 1500 meters) for Apparel Brand</p>
                </div>
              </div>
              <div className="inline-flex items-center text-xs font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto gap-1">
                <Clock className="w-3.5 h-3.5" /> Processing
              </div>
            </div>
          </div>
        </div>

        {/* Request Form Section */}
        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100/80">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-[#064e3b]/5 text-[#064e3b] rounded-full flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif font-bold text-brand-darkbrown">Request a Price e-Quotation</h2>
              <p className="text-gray-500 text-xs md:text-sm mt-1">Fill in your details below to receive a quotation</p>
            </div>
          </div>
          
          <div className="border-b border-gray-100 my-6"></div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Name of the Trader *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Business Address with Pin Code *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">GST No.</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Mobile No. *</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                  required 
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Email ID *</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Options *</label>
              <select className="w-full border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all cursor-pointer">
                <option>Textile Products</option>
                <option>Garment Products</option>
                <option>Home Furnishing Lots</option>
                <option>Custom Fabric Weaving</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Particulars of the Products *</label>
              <textarea 
                rows="4" 
                className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                placeholder="Enter product details, GSM, quantity, color, specifications..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#064e3b] text-white hover:bg-[#022c22] transition-colors py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 tracking-wider shadow-md hover:shadow-lg uppercase text-xs md:text-sm mt-6"
            >
              <Send className="w-4 h-4" />
              Submit Quotation Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
