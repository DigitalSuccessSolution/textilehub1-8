import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { categories } from '../data/mockData';

const TradeEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <PageHeader title="Trade Enquiry" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-darkbrown mb-4">Enquiry Submitted!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Thank you for partnering with AuraWeave Textiles. We have received your details. Our B2B representative will review your enquiry and get back to you within 24-48 business hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-brand-maroon text-white font-bold py-3.5 px-8 rounded hover:bg-red-900 transition-colors shadow-lg cursor-pointer text-sm"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Trade Enquiry" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-brand-darkbrown mb-4">Partner With Us</h2>
            <p className="text-gray-600">Fill out the form below for bulk orders, distributorship, or any business-related inquiries.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interested Category *</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border bg-white text-gray-700" required defaultValue="">
                <option value="" disabled>Select Interested Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected Order Volume *</label>
              <input 
                type="text" 
                placeholder="e.g., 1000 meters, 500 units, or container load" 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
              <textarea rows="5" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-maroon focus:border-brand-maroon p-3 border" placeholder="Please detail your specific requirements..."></textarea>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="w-full bg-brand-maroon text-white font-bold py-4 px-6 rounded hover:bg-red-900 transition-colors shadow-lg cursor-pointer">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiry;
