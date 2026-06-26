import { motion } from 'framer-motion';

export default function TradeEnquiry() {
  return (
    <div className="space-y-8 sm:space-y-16">
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          Trade Enquiry
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 px-4 text-sm sm:text-base font-medium">
          We welcome bulk orders, wholesale partnerships, and custom textile manufacturing requests. Fill out the form below to begin our collaboration.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-14 rounded-3xl shadow-xl border border-pearl-100 mx-4 sm:mx-auto">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl text-sapphire-900 border-b border-pearl-100 pb-4">Company Details</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Company Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Contact Person *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-sapphire-800">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400" required />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h3 className="font-playfair text-2xl text-sapphire-900 border-b border-pearl-100 pb-4">Enquiry Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Interested Categories</label>
              <select className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400">
                <option>Sarees</option>
                <option>Leggings</option>
                <option>Kurtis</option>
                <option>Suiting & Shirting</option>
                <option>Home Furnishing</option>
                <option>Multiple / Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Expected Order Volume</label>
              <select className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400">
                <option>Small (Below 1000 meters / units)</option>
                <option>Medium (1000 - 5000 meters / units)</option>
                <option>Large (5000+ meters / units)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-sapphire-800">Additional Requirements / Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-pearl-50 border border-pearl-100 focus:outline-none focus:border-rosegold-400 resize-none"></textarea>
            </div>
          </div>

          <button className="w-full bg-[#1B484E] text-white py-4 rounded-lg font-medium tracking-wide hover:bg-[#A8C6B6] transition-colors mt-8">
            Submit Trade Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
