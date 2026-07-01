import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is the location and size of Samriddhi's flagship destination?",
    answer: "Samriddhi features India's grandest textile destination spanning over 10 million square feet of premium retail space, housing an unparalleled range of fabrics and ethnic wear."
  },
  {
    question: "How many retail outlets does Samriddhi operate across India?",
    answer: "We have a vast, trusted network of over 1,200+ partner retail outlets and showrooms catering to millions of happy customers nationwide."
  },
  {
    question: "Do you support B2B bulk purchases and custom orders?",
    answer: "Yes, absolutely! Wholesalers, retail businesses, and corporate clients can request customized orders and pricing using our e-Quotation form."
  },
  {
    question: "What product categories are available in the catalogue?",
    answer: "We offer 12 main categories: Sarees, Kurtis, Leggings, Dress Suits, Bedsheets & Linen, Hosiery Items, Suiting, Shirting, Women Wear, Men Wear, Children Wear, and Home Furnishing."
  },
  {
    question: "How can I participate in Samriddhi's e-Auctions?",
    answer: "To participate in active digital auctions, fill out the registration form on our e-Auction page and upload a valid GST Certificate. Our compliance team will review and approve your registration."
  },
  {
    question: "How can I apply for career opportunities at Samriddhi?",
    answer: "Visit our Career Page to check active job openings. You can click 'Apply Now' on relevant roles, or directly email your CV to careers@textilemall.com."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#FAF4EE' }} className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-32 sm:h-40 overflow-hidden flex items-center justify-center text-center">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#303030]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="pb-20 max-w-3xl mx-auto px-4 py-10">
        <p className="text-center text-[15px] mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#6B6B6B' }}>
          Have questions? We have answers. Explore our frequently asked questions below regarding our collections, policies, and trade options.
        </p>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(225, 77, 42, 0.15)',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(225, 77, 42, 0.08)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle size={18} color="#E14D2A" className="shrink-0" />
                    <span className="font-bold text-base md:text-lg text-[#303030]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="#E14D2A"
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
                      <div className="px-5 pb-6 md:px-6 md:pb-8 text-sm leading-relaxed border-t"
                           style={{ color: '#6B6B6B', borderColor: 'rgba(225, 77, 42, 0.08)' }}>
                        <p className="pt-4">{faq.answer}</p>
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
