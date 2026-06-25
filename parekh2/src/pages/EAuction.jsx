import React, { useRef, useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, Send, Upload, Key } from 'lucide-react';

const EAuction = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <PageHeader title="e-Auction Portal" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Auction Announcements */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            {/* Announcement 1 */}
            <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600" 
                  alt="Premium Cotton Bales" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-serif font-bold text-lg text-brand-darkbrown">Premium Cotton Bales</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-2 leading-relaxed">
                  High-quality surplus organic cotton bales suitable for premium suiting and weaving.
                </p>
                <span className="text-[#C48B5D] text-xs font-bold tracking-wider mt-4 block uppercase">
                  Auction Date: June 28, 2026
                </span>
              </div>
            </div>

            {/* Announcement 2 */}
            <div className="bg-white rounded-2xl border border-gray-100/80 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?auto=format&fit=crop&q=80&w=600" 
                  alt="Mulberry Silk Surplus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-serif font-bold text-lg text-brand-darkbrown">Mulberry Silk Surplus</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-2 leading-relaxed">
                  Grade-A raw mulberry silk yarns available for bidding. Certified quality inspection report included.
                </p>
                <span className="text-[#C48B5D] text-xs font-bold tracking-wider mt-4 block uppercase">
                  Auction Date: June 30, 2026
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Registration Card */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100/80">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-[#064e3b]/5 text-[#064e3b] rounded-full flex items-center justify-center shrink-0">
                  <Key className="w-6 h-6 rotate-45" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-serif font-bold text-brand-darkbrown">Participation Registration</h2>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">Register your interest to participate in upcoming e-Auctions</p>
                </div>
              </div>

              <div className="border-b border-gray-100 my-6"></div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Name of the Participant *</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-200 bg-gray-50/50 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon p-3 text-sm transition-all" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">Legal Name of Business *</label>
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
                  <label className="block text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Upload GST Certificate</label>
                  
                  {/* Hidden native file input */}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                  />
                  
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-200 bg-gray-50/50 rounded-2xl p-6 text-center hover:bg-gray-50 hover:border-[#064e3b]/30 transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 shadow-inner"
                  >
                    <Upload className="w-8 h-8 text-[#C48B5D] mb-1" />
                    <span className="text-sm font-semibold text-gray-700">
                      {selectedFile ? `Selected: ${selectedFile.name}` : 'Click to upload GST Certificate'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : 'PDF, JPG, PNG accepted'}
                    </span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#064e3b] text-white hover:bg-[#022c22] transition-colors py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 tracking-wider shadow-md hover:shadow-lg uppercase text-xs md:text-sm mt-8"
                >
                  <Send className="w-4 h-4" />
                  Submit Registration
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EAuction;
