import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, Clock, AlertCircle } from 'lucide-react';

const EAuction = () => {
  const auctionCards = [
    {
      title: 'Premium Cotton Bales',
      desc: 'High-quality surplus organic cotton bales suitable for premium suiting and weaving.',
      date: 'Auction Date: June 28, 2026',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Mulberry Silk Surplus',
      desc: 'Grade-A raw mulberry silk yarns available for bidding. Certified quality inspection report included.',
      date: 'Auction Date: June 30, 2026',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div>
      <PageHeader title="e-Auction Portal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-6">
            {auctionCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h4 className="font-serif font-bold text-lg text-brand-darkbrown mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="text-xs font-sans font-semibold text-brand-maroon">
                    {card.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-brand-darkbrown mb-6">Register for e-Auction</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Registration No.</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GST IN</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Authorized Bidder Name</label>
                    <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
                    <input type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Details (For EMD Refund)</label>
                  <textarea rows="3" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="A/c No., IFSC Code, Bank Name"></textarea>
                </div>
                
                <div className="flex items-center mt-4">
                  <input type="checkbox" className="h-4 w-4 text-brand-maroon border-gray-300 rounded focus:ring-brand-maroon" required />
                  <label className="ml-2 block text-sm text-gray-700">
                    I accept the Terms and Conditions of the e-Auction portal.
                  </label>
                </div>
                
                <button type="submit" className="w-full md:w-auto bg-brand-maroon text-white font-bold py-3 px-8 rounded hover:bg-red-900 transition-colors shadow-sm">
                  Register Now
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
