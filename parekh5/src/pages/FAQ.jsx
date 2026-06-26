import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What categories of fabrics do you offer?",
      answer: "We offer a diverse range of textiles including premium Sarees, Leggings, Kurtis, Dress Suits, Bedsheets & Linen, Hosiery Items, Suiting, Shirting, Ethnic Wear for Men/Women/Children, and Home Upholstery/Furnishing."
    },
    {
      question: "How do I request a custom bulk order quotation?",
      answer: "You can request a bulk price quotation through our e-Quotation page or fill out the Trade Enquiry form. Our sales department will contact you within 24 business hours with pricing details."
    },
    {
      question: "Do you supply fabrics internationally?",
      answer: "Yes, we export high-quality textiles globally. Our exports are compliant with international standards, and we facilitate transparent custom orders through our digital platforms."
    },
    {
      question: "What is the procedure for participating in e-Auctions?",
      answer: "To participate in our upcoming surplus and materials liquidation e-Auctions, you must submit a registration form along with a valid GST certificate. Registered partners will receive credentials to bid."
    },
    {
      question: "What is your standard delivery timeline for wholesale dispatches?",
      answer: "Standard wholesale orders are processed and dispatched within 3-5 business days. Transit times vary depending on the destination state, typically taking 2-7 additional delivery days."
    },
    {
      question: "How do you ensure fabric quality control?",
      answer: "We enforce a strict quality check workflow at our manufacturing units. All fabrics undergo tenacity testing, colorfastness evaluation, and weave inspects before dispatch to minimize defects."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-20 max-w-4xl mx-auto px-4">
      {/* Centered Page Header conforming to unified heading style */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#1B484E] font-bold">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-[#1B484E] text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#A8C6B6] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
