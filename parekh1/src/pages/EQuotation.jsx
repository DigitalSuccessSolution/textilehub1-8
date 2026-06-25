import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, CheckCircle, Clock, Send, Check } from 'lucide-react';

const EQuotation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    traderName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    emailId: '',
    option: 'Textile Products',
    particulars: ''
  });

  const recentQuotes = [
    {
      id: 'Quote #QT-2026-104',
      date: 'June 25, 2026',
      desc: 'Premium Organic Cotton Yarn (Qty: 5000 kg) for Export',
      status: 'Approved'
    },
    {
      id: 'Quote #QT-2026-103',
      date: 'June 24, 2026',
      desc: 'Handloom Banarasi Silk Sarees (Qty: 250 pcs) for Festive Stock',
      status: 'Approved'
    },
    {
      id: 'Quote #QT-2026-102',
      date: 'June 22, 2026',
      desc: 'Linen-Cotton Blend Fabrics (Qty: 1500 meters) for Apparel Brand',
      status: 'Processing'
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
      traderName: '',
      businessName: '',
      businessAddress: '',
      gstNo: '',
      mobileNo: '',
      emailId: '',
      option: 'Textile Products',
      particulars: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <PageHeader title="e-Quotation" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Recent Quotations Section */}
        <div className="bg-brand-darkbrown text-white p-8 rounded-[32px] shadow-xl mb-12">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-2xl font-serif font-bold text-white">Recent Quotations</h3>
             <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-brand-beige tracking-wider uppercase font-semibold">Live Updates</span>
          </div>
          
          <div className="space-y-4">
            {recentQuotes.map((quote, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between border border-white/10 gap-4 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2.5 rounded-xl text-brand-maroon shrink-0 shadow-sm flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="font-bold text-lg text-white leading-tight">{quote.id}</h4>
                      <span className="text-xs text-white/50 font-medium">{quote.date}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1.5">{quote.desc}</p>
                  </div>
                </div>
                
                {quote.status === 'Approved' ? (
                  <div className="flex items-center text-sm font-semibold bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Approved
                  </div>
                ) : (
                  <div className="flex items-center text-sm font-semibold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                    <Clock className="w-4 h-4 mr-1.5" /> Processing
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Form Section */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-100">
          
          {!submitted ? (
            <>
              {/* Form Header */}
              <div className="flex items-center gap-4 pb-6 mb-10 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                  <FileText className="w-5 h-5 text-brand-maroon" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-brand-darkbrown leading-tight">Request a Price e-Quotation</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Fill in your details below to receive a quotation</p>
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Trader Name */}
                  <div>
                    <label htmlFor="traderName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name of the Trader *
                    </label>
                    <input 
                      type="text" 
                      id="traderName"
                      name="traderName"
                      value={formData.traderName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                      required 
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input 
                      type="text" 
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                      required 
                    />
                  </div>

                  {/* Business Address with Pin Code */}
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
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                      required 
                    />
                  </div>

                  {/* GST NO */}
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
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                    />
                  </div>

                  {/* Mobile No */}
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
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                      required 
                    />
                  </div>

                  {/* Email ID */}
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
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none" 
                      required 
                    />
                  </div>
                </div>
                
                {/* Options Dropdown */}
                <div>
                  <label htmlFor="option" className="block text-sm font-medium text-gray-700 mb-1">
                    Options *
                  </label>
                  <select 
                    id="option"
                    name="option"
                    value={formData.option}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none cursor-pointer"
                    required
                  >
                    <option value="Textile Products">Textile Products</option>
                    <option value="Premium Yarns">Premium Yarns</option>
                    <option value="Apparel Fabrics">Apparel Fabrics</option>
                    <option value="Home Textiles">Home Textiles</option>
                    <option value="Ethnic Wear Customizations">Ethnic Wear Customizations</option>
                  </select>
                </div>

                {/* Particulars of the Products */}
                <div>
                  <label htmlFor="particulars" className="block text-sm font-medium text-gray-700 mb-1">
                    Particulars of the Products *
                  </label>
                  <textarea 
                    id="particulars"
                    name="particulars"
                    rows="4"
                    value={formData.particulars}
                    onChange={handleInputChange}
                    placeholder="Enter product details, GSM, quantity, color, specifications..."
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand-maroon focus:border-brand-maroon p-3 bg-white text-gray-800 focus:outline-none min-h-[100px]"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-brand-maroon hover:bg-red-900 text-white font-bold py-4 px-6 rounded hover:bg-red-900 transition-colors shadow-lg flex items-center justify-center gap-2 text-sm mt-4"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT QUOTATION REQUEST
                </button>
              </form>
            </>
          ) : (
            /* Success Feedback */
            <div className="text-center py-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-100 flex items-center justify-center mb-6 shadow-sm">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-darkbrown mb-3">Quotation Request Submitted!</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                Thank you for contacting AuraWeave Textiles. Your request for an e-Quotation has been successfully logged. Our team will review the particulars and reach out to you within 24 hours.
              </p>
              <button 
                onClick={resetForm}
                className="bg-brand-maroon hover:bg-red-900 text-white font-bold text-sm px-6 py-3 rounded transition-colors shadow-sm"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
