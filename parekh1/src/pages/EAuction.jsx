import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, AlertCircle, Send, Upload, Check } from 'lucide-react';

const EAuction = () => {
  const [submitted, setSubmitted] = useState(false);
  const [gstFile, setGstFile] = useState(null);
  const [formData, setFormData] = useState({
    participantName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    emailId: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      participantName: '',
      businessName: '',
      businessAddress: '',
      gstNo: '',
      mobileNo: '',
      emailId: ''
    });
    setGstFile(null);
    setSubmitted(false);
  };

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
              
              {!submitted ? (
                <>
                  <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                      <Gavel className="w-5 h-5 text-brand-maroon" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-brand-darkbrown leading-tight">Participation Registration</h2>
                      <p className="text-sm text-gray-500 mt-0.5">Register your interest to participate in upcoming e-Auctions</p>
                    </div>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="participantName" className="block text-sm font-medium text-gray-700 mb-1">
                          Name of the Participant *
                        </label>
                        <input 
                          type="text" 
                          id="participantName"
                          name="participantName"
                          value={formData.participantName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                          required 
                        />
                      </div>

                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                          Legal Name of Business *
                        </label>
                        <input 
                          type="text" 
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                          required 
                        />
                      </div>

                      <div>
                        <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Address with Pin Code *
                        </label>
                        <input 
                          type="text" 
                          id="businessAddress"
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                          required 
                        />
                      </div>

                      <div>
                        <label htmlFor="gstNo" className="block text-sm font-medium text-gray-700 mb-1">
                          GST No.
                        </label>
                        <input 
                          type="text" 
                          id="gstNo"
                          name="gstNo"
                          value={formData.gstNo}
                          onChange={handleInputChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                        />
                      </div>

                      <div>
                        <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-1">
                          Mobile No. *
                        </label>
                        <input 
                          type="tel" 
                          id="mobileNo"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleInputChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                          required 
                        />
                      </div>

                      <div>
                        <label htmlFor="emailId" className="block text-sm font-medium text-gray-700 mb-1">
                          Email ID *
                        </label>
                        <input 
                          type="email" 
                          id="emailId"
                          name="emailId"
                          value={formData.emailId}
                          onChange={handleInputChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                          required 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        UPLOAD GST CERTIFICATE
                      </label>
                      <label 
                        className="border-2 border-dashed border-gray-300 hover:border-brand-maroon rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center bg-gray-50/50"
                      >
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => setGstFile(e.target.files[0])}
                        />
                        <Upload className="w-8 h-8 text-brand-maroon mb-2 stroke-[1.5]" />
                        <span className="text-sm font-bold text-brand-darkbrown">
                          {gstFile ? gstFile.name : 'Click to upload GST Certificate'}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          PDF, JPG, PNG accepted
                        </span>
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 px-6 rounded transition-colors shadow-lg flex items-center justify-center gap-2 text-sm mt-4"
                    >
                      <Send className="w-4 h-4" />
                      SUBMIT REGISTRATION
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-100 flex items-center justify-center mb-6 shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-darkbrown mb-3">Registration Submitted!</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Thank you for registering. Your request to participate in upcoming e-Auctions has been successfully logged. Our compliance team will verify your GST Certificate and reach out shortly.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="bg-brand-maroon hover:bg-red-900 text-white font-bold text-sm px-6 py-3 rounded transition-colors shadow-sm"
                  >
                    REGISTER ANOTHER PARTICIPANT
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
