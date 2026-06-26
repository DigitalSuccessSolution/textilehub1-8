import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send } from 'lucide-react';

const EAuction = () => {
  const [fileName, setFileName] = useState("");
  const activeAuctions = [
    {
      id: 1,
      title: "Premium Surplus Silk Fabrics",
      description: "Liquidation of high-grade surplus silk woven fabrics from Karnataka manufacturing unit. Total stock: 2,500 meters.",
      date: "Bidding ends: Nov 10, 2026",
      image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Imported Linen Stock Bidding",
      description: "Direct clearance auction of pure linen fabrics, multi-color stock, suitable for designer shirts & upholstery.",
      date: "Bidding ends: Nov 15, 2026",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          e-Auction
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#fcfbf9] rounded-[2rem] p-6 md:p-10 lg:p-12 border border-gray-100 shadow-sm">
        
        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} className="text-[#A8C6B6]" />
            <h2 className="text-[#1B484E] font-bold text-lg md:text-xl  tracking-wide">Active e-Auctions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeAuctions.map((auction) => (
              <div key={auction.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="sm:w-1/3 h-48 sm:h-auto relative shrink-0">
                  <img src={auction.image} alt={auction.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-[#1B484E] text-base sm:text-lg mb-1.5 leading-snug">{auction.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{auction.description}</p>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{auction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-[#A8C6B6]/10 rounded-xl flex items-center justify-center">
              <Gavel size={24} className="text-[#A8C6B6]" />
            </div>
            <div>
              <h2 className="text-[#1B484E] font-bold text-xl uppercase tracking-wide">Participation Registration</h2>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Name of the Participant <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Legal Name of Business <span className="text-[#A8C6B6]">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-xl border border-gray-200 focus:outline-none focus:border-[#A8C6B6] transition-colors" required />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-2">
                  Business Address with Pin Code <span className="text-[#A8C6B6]">*</span>
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

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-[#1B484E] font-bold mb-3">
                Upload GST Certificate <span className="text-[#A8C6B6]">*</span>
              </label>
              <input 
                type="file" 
                id="gst-upload" 
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden" 
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFileName(e.target.files[0].name);
                  }
                }}
                required 
              />
              <label 
                htmlFor="gst-upload"
                className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-12 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <UploadCloud size={32} className="text-gray-300 group-hover:text-[#A8C6B6] mb-3 transition-colors" />
                <p className="text-gray-500 font-medium text-sm">
                  {fileName ? `Selected: ${fileName}` : "Click to upload GST Certificate"}
                </p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#1B484E] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#A8C6B6] transition-all duration-300 shadow-md flex items-center justify-center gap-3"
              >
                <Send size={16} /> Submit Registration
              </button>
            </div>

            
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EAuction;
