import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { FileText, CheckCircle, Clock } from 'lucide-react';

const EQuotation = () => {
  const [recentQuotes, setRecentQuotes] = useState([
    {
      id: 'QT-2026-891',
      title: 'Silk Sarees Bulk Supply',
      description: 'Premium Silk Sarees (Qty: 500 pcs) for Retail Boutique',
      date: '2026-06-25',
      status: 'approved',
      statusLabel: 'Approved'
    },
    {
      id: 'QT-2026-892',
      title: 'Cotton Suiting Fabrics',
      description: 'Cotton Suiting Fabrics (Qty: 2000 meters)',
      date: '2026-06-26',
      status: 'processing',
      statusLabel: 'Processing'
    },
  ]);

  const [formData, setFormData] = useState({
    traderName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    emailId: '',
    options: '',
    particulars: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuote = {
      id: `QT-2026-${Math.floor(100 + Math.random() * 900)}`,
      title: `${formData.businessName} (${formData.options})`,
      description: formData.particulars,
      date: new Date().toISOString().split('T')[0],
      status: 'processing',
      statusLabel: 'Processing'
    };

    setRecentQuotes([newQuote, ...recentQuotes]);
    setSubmitted(true);
    
    // Reset form data
    setFormData({
      traderName: '',
      businessName: '',
      businessAddress: '',
      gstNo: '',
      mobileNo: '',
      emailId: '',
      options: '',
      particulars: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <PageHeader title="e-Quotation" />

      <div className="bg-[#FAF7F0] py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 space-y-8">

          {/* Recent Quotations */}
          <div className="bg-[#0B1C3E]">
            <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-serif font-light text-white">Recent Quotations</h3>
              <span className="text-[0.6rem] bg-[#D4A853]/20 text-[#D4A853] px-3 py-1 uppercase tracking-widest">Live Updates</span>
            </div>
            <div className="p-4 space-y-3">
              {recentQuotes.map((q) => (
                <div key={q.id} className="bg-white/5 border border-white/10 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/8 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D4A853]/20 flex items-center justify-center shrink-0">
                      <FileText size={14} className="text-[#D4A853]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-medium text-white text-sm">{q.title}</h4>
                        <span className="text-[9px] bg-white/10 text-white/60 px-2 py-0.5 font-mono">{q.id}</span>
                      </div>
                      <p className="text-white/45 text-xs mt-1.5 font-light leading-relaxed">{q.description}</p>
                      <span className="text-white/30 text-[10px] block mt-1.5 font-light">{q.date}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs px-3 py-1.5 self-start md:self-auto whitespace-nowrap font-medium ${
                    q.status === 'approved'
                      ? 'bg-green-500/15 text-green-400'
                      : 'bg-amber-500/15 text-amber-400'
                  }`}>
                    {q.status === 'approved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                    {q.statusLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-[#0B1C3E]/8">
            <div className="bg-[#D4A853] px-10 py-8">
              <h2 className="text-2xl font-serif font-light text-[#0B1C3E]">Request a New Quotation</h2>
              <p className="text-[#0B1C3E]/70 text-sm mt-1 font-light">Submit your specific product requirements to receive a formal e-Quotation.</p>
            </div>

            <div className="p-10">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm border border-green-200">
                  Your e-Quotation request has been successfully submitted and listed in recent quotes.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Name of the Trader *</label>
                    <input
                      type="text"
                      name="traderName"
                      value={formData.traderName}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Mobile No. *</label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Email ID *</label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      className="input-luxury"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">GST No.</label>
                    <input
                      type="text"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleInputChange}
                      className="input-luxury"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Options *</label>
                    <select
                      name="options"
                      value={formData.options}
                      onChange={handleInputChange}
                      className="input-luxury bg-white"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Retail Purchase">Retail Purchase</option>
                      <option value="Wholesale Order">Wholesale Order</option>
                      <option value="Custom Manufacturing">Custom Manufacturing</option>
                      <option value="Export Inquiry">Export Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Business Address with Pin Code *</label>
                  <textarea
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    rows="3"
                    className="input-luxury resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Particulars of the Products *</label>
                  <textarea
                    name="particulars"
                    value={formData.particulars}
                    onChange={handleInputChange}
                    rows="4"
                    className="input-luxury resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A853] text-[#0B1C3E] py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#0B1C3E] hover:text-white transition-all duration-300"
                >
                  Generate Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
