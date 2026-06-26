import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Gavel, Clock, AlertCircle } from 'lucide-react';

const EAuction = () => {
  const [liveAuctions] = useState([
    {
      id: 'LOT-1042',
      title: 'Premium Silk Blends Lot',
      description: 'Exclusive collection of premium silk fabrics and traditional blends (Qty: 1200 meters). Perfect for designer boutiques and ethnic wear brands.',
      date: 'Closing: 2026-06-30',
      img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'LOT-1045',
      title: 'Fine Cotton Surplus Lot',
      description: 'High-quality fine cotton suiting and shirting fabric rolls in assorted summer colors (Qty: 5000 meters). Soft texture and high durability.',
      date: 'Closing: 2026-07-02',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    },
  ]);

  const [formData, setFormData] = useState({
    participantName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    emailId: '',
    gstCertificate: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gstCertificate: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(`Registration request submitted successfully for ${formData.participantName} (${formData.businessName})!`);
    setSubmitted(true);
    
    setFormData({
      participantName: '',
      businessName: '',
      businessAddress: '',
      gstNo: '',
      mobileNo: '',
      emailId: '',
      gstCertificate: null
    });
    
    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div>
      <PageHeader title="e-Auction" />

      <div className="bg-[#FAF7F0] py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Active Auctions */}
            <div className="w-full lg:w-4/12 space-y-6">
              <div className="flex items-center gap-3">
                <Gavel size={22} className="text-[#D4A853]" />
                <h3 className="text-2xl font-serif font-light text-[#0B1C3E]">Active Auction Lots</h3>
              </div>
              
              <div className="space-y-6">
                {liveAuctions.map((auc) => (
                  <div key={auc.id} className="bg-white border border-[#0B1C3E]/8 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col max-w-sm mx-auto lg:mx-0">
                    <img
                      src={auc.img}
                      alt={auc.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-[#0B1C3E] font-serif text-lg font-light mb-2">{auc.title}</h4>
                      <p className="text-[#6B7A99] text-xs font-light leading-relaxed mb-4">{auc.description}</p>
                      <div className="pt-3 border-t border-[#0B1C3E]/5 text-[11px] text-[#6B7A99]">
                        <span className="font-medium text-[#0B1C3E]">{auc.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="w-full lg:w-8/12 bg-white border border-[#0B1C3E]/8">
              <div className="bg-[#0B1C3E] px-8 py-7">
                <h2 className="text-2xl font-serif font-light text-white">Register for e-Auction</h2>
                <p className="text-white/60 text-xs mt-1 font-light">Submit your participant details and business documents to qualify for bidding.</p>
              </div>

              <div className="p-8">
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm border border-green-200 font-light">
                    {successMsg}
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Name of the Participant *</label>
                      <input
                        type="text"
                        name="participantName"
                        value={formData.participantName}
                        onChange={handleInputChange}
                        className="input-luxury"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Legal Name of Business *</label>
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
                      <label className="block text-xs uppercase tracking-wider text-[#0B1C3E] font-medium mb-2">Upload GST Certificate *</label>
                      <input
                        type="file"
                        name="gstCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="input-luxury cursor-pointer text-xs file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:font-semibold file:bg-[#D4A853]/20 file:text-[#0B1C3E] hover:file:bg-[#D4A853]/35"
                        required
                      />
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

                  <button
                    type="submit"
                    className="bg-[#0B1C3E] text-white px-10 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#D4A853] hover:text-[#0B1C3E] transition-all duration-300"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
