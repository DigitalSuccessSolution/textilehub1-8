import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is Textile Mall?",
    a: "Textile Mall is India's largest B2B and retail textile hub, spanning over 10 million sq ft of premium manufacturing and showroom facilities. We serve designers, retailers, and bulk buyers across the globe."
  },
  {
    q: "How can I request a quote for bulk orders?",
    a: "You can request a custom price quote by filling out the form on our e-Quotation page. Our trade desk will review your requirements and respond within 24-48 business hours."
  },
  {
    q: "How do I register for e-Auctions?",
    a: "Traders can register by submitting the registration form on the e-Auction page. Make sure to upload your business GST certificate and valid credentials to get verified."
  },
  {
    q: "Do you offer custom fabric design or dyeing?",
    a: "Yes, we offer custom weaving, pattern printing, fabric dyeing, and tailor-made blends for large wholesale volumes. Contact our design desk via the Trade Enquiry form."
  },
  {
    q: "What are your shipping and dispatch lead times?",
    a: "Standard dispatch times for in-stock materials are 3-5 business days. Custom orders or custom bulk fabric runs typically have a production cycle of 3 to 4 weeks depending on the order volume."
  },
  {
    q: "How can I partner as a retail distributor?",
    a: "We welcome partnerships with verified retailers and wholesalers. Please read our guidelines on the Trade Circular page and send your credentials to info@textilemall.com."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#FDF6EC' }} className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-8 sm:py-10 min-h-[140px] overflow-hidden flex items-center justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #3D2418 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <p className="text-center text-sm mb-10 leading-relaxed" style={{ color: '#7D5A4F' }}>
          Find answers to general questions about our wholesale catalog, e-auctions, custom ordering, and partner support.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#FFFBF5',
                  border: isOpen ? '1.5px solid #C9A227' : '1.5px solid rgba(201,162,39,0.15)',
                  boxShadow: isOpen ? '0 4px 20px rgba(201,162,39,0.06)' : 'none'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} color="#C9A227" className="shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-[#2C1810]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="#C9A227"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t" style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
                        <p className="text-sm leading-relaxed text-[#7D5A4F]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
