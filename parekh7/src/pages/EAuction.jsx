import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Inbox, UploadCloud, Send, Mail } from 'lucide-react';

const inputStyle = {
  background: '#FDF6EC',
  border: '1.5px solid rgba(201,162,39,0.2)',
  color: '#2C1810',
};

const activeAuctions = [
  { id: 1, title: 'Surplus Silk Fabric Yarn Lot', desc: 'Auction for surplus premium mulberry silk yarn. Quantity: 500 kg. High tensile strength, suitable for embroidery and premium weaving.', date: 'Ends: Nov 05, 2026', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop' },
  { id: 2, title: 'Cotton Bedding & Linen Overstock', desc: 'Liquidation auction for overstock luxury hotel-grade bed sheets and linen sets. 1,200 sets available.', date: 'Ends: Nov 02, 2026', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop' }
];

export default function EAuction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }}>

      {/* Hero Banner */}
      <div className="relative py-8 sm:py-10 min-h-[140px] overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            e-Auction
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-7xl mx-auto px-4 md:px-8 py-10">
        <p className="text-center text-[14px] mb-10" style={{ color: '#7D5A4F' }}>
          Digital liquidation and transparent auction system across our corporate ecosystem.
        </p>

        {/* Active Auctions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Gavel size={20} color="#C9A227" />
            <h2 className="font-bold text-lg uppercase tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
              Active e-Auctions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeAuctions.map(a => (
              <div key={a.id} className="rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
                style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}>
                <div>
                  <div className="h-48 w-full relative overflow-hidden">
                    <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#2C1810] text-lg mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {a.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#7D5A4F]">
                      {a.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-3 border-t text-[10px] font-bold uppercase tracking-wider text-[#A68B7C] flex justify-between items-center" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                  <span>Active Bidding</span>
                  <span style={{ color: '#B83227' }}>{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="rounded-3xl shadow-xl overflow-hidden"
          style={{ background: '#FFFBF5', border: '1.5px solid rgba(201,162,39,0.2)' }}>
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9B2519, #C9A227, #E2C65A, #C9A227, #9B2519)' }} />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b" style={{ borderColor: 'rgba(201,162,39,0.15)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)' }}>
                <Gavel size={22} color="#C9A227" />
              </div>
              <div>
                <h2 className="font-bold text-xl uppercase tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#2C1810' }}>
                  Participation Registration
                </h2>
                <p className="text-[11px] uppercase tracking-widest font-bold mt-0.5" style={{ color: '#A68B7C' }}>
                  Register your interest for upcoming auctions
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: 'Name of the Participant *', type: 'text', req: true },
                  { label: 'Legal Name of Business *', type: 'text', req: true },
                  { label: 'Business Address with Pin Code *', type: 'text', req: true },
                  { label: 'GST No.', type: 'text', req: false },
                  { label: 'Mobile No. *', type: 'tel', req: true },
                  { label: 'Email ID *', type: 'email', req: true },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: '#5C3B2C' }}>
                      {f.label}
                    </label>
                    <input type={f.type} required={f.req}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#C9A227'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,162,39,0.2)'}
                    />
                  </div>
                ))}
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: '#5C3B2C' }}>
                  Upload GST Certificate *
                </label>
                <label className="w-full border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center cursor-pointer transition-all hover:opacity-80"
                  style={{ borderColor: 'rgba(201,162,39,0.3)', background: '#FDF6EC' }}>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  <UploadCloud size={32} className="mb-3" color="#C9A227" strokeWidth={1.5} />
                  <p className="text-sm font-medium" style={{ color: '#7D5A4F' }}>Click to upload GST Certificate</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: '#A68B7C' }}>PDF, JPG, PNG Accepted</p>
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-white text-sm flex items-center justify-center gap-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #9B2519, #B83227)', boxShadow: '0 4px 16px rgba(184,50,39,0.3)' }}>
                <Send size={16} /> Submit Registration
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
