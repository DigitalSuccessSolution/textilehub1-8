import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Gavel, UploadCloud, Send } from 'lucide-react';

const EAuction = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* Page Header */}
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">e-Auction</h1>
      </div>

      {/* Main Content Area */}
      <div className="space-y-12">
        
        {/* Active e-Auctions Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Gavel size={20} className="text-vastram-gold" />
            <h2 className="text-vastram-brown font-playfair font-bold text-xl uppercase tracking-wide">Active e-Auctions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&fit=crop&w=600&q=80" 
                  alt="Surplus Cotton Yarn" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 text-[10px] bg-vastram-brown text-white font-bold px-2.5 py-1 uppercase tracking-wider">Live</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Surplus Cotton Yarn Lots</h3>
                <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                  Online bidding for 50 tonnes of high-quality combed cotton yarn (30s and 40s count) packaged in standard cones.
                </p>
                <div className="pt-4 border-t border-gray-100 text-[11px] text-vastram-gold font-bold uppercase tracking-wider">
                  Ends: July 10, 2026 | 18:00 IST
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" 
                  alt="Designer Silk Rolls" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 text-[10px] bg-vastram-brown text-white font-bold px-2.5 py-1 uppercase tracking-wider">Live</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Designer Silk Rolls</h3>
                <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                  Liquidation of 1,200 meters of pure Banarasi Silk fabrics, floral zari weaving, assorted color ways.
                </p>
                <div className="pt-4 border-t border-gray-100 text-[11px] text-vastram-gold font-bold uppercase tracking-wider">
                  Ends: July 12, 2026 | 15:00 IST
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col group overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1582485566219-c5c5ade60c6d?auto=format&fit=crop&w=600&q=80" 
                  alt="Excess Denim Fabrics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 text-[10px] bg-vastram-brown text-white font-bold px-2.5 py-1 uppercase tracking-wider">Live</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-vastram-brown font-bold font-playfair text-lg mb-2">Excess Denim Fabric Stocks</h3>
                <p className="text-gray-600 text-xs mb-4 flex-grow leading-relaxed">
                  Bidding for 5,000 meters of premium raw denim fabric, 12 oz, indigo dyed, 100% cotton shirting.
                </p>
                <div className="pt-4 border-t border-gray-100 text-[11px] text-vastram-gold font-bold uppercase tracking-wider">
                  Ends: July 18, 2026 | 12:00 IST
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Participation Registration Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-none p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-vastram-gold/10 rounded-none flex items-center justify-center">
              <Gavel size={24} className="text-vastram-gold" />
            </div>
            <div>
              <h2 className="text-vastram-brown font-playfair font-bold text-2xl uppercase tracking-wide">Participation Registration</h2>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">Register your interest for upcoming auctions</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Name of the Participant <span className="text-vastram-gold">*</span>
                </label>
                <input type="text" className="w-full px-4 py-3 bg-[#fcfbf9] rounded-none border border-gray-200 focus:outline-none focus:border-vastram-gold transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-2">
                  Legal Name of Business <span className="text-vastram-gold">*</span>
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

            <div className="pt-4">
              <label className="block text-[10px] uppercase tracking-widest text-vastram-brown font-bold mb-3">
                Upload GST Certificate <span className="text-vastram-gold">*</span>
              </label>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange}
                className="hidden" 
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
              <div 
                onClick={handleUploadClick}
                className="w-full border-2 border-dashed border-gray-200 rounded-none py-12 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <UploadCloud size={32} className="text-gray-300 group-hover:text-vastram-gold mb-3 transition-colors" />
                <p className="text-gray-500 font-medium text-sm">
                  {fileName ? `Selected: ${fileName}` : "Click to upload GST Certificate"}
                </p>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">PDF, JPG, PNG ACCEPTED</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-vastram-brown text-white py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-vastram-gold transition-all duration-300 shadow-md flex items-center justify-center gap-3"
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
