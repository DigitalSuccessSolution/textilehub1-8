import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is VASTRAM's return and exchange policy?",
      answer: "We offer a 7-day hassle-free return and exchange policy on all unused products in their original packaging with tags intact. Please visit our store or contact support for help."
    },
    {
      question: "Do you offer custom tailoring or sizing services?",
      answer: "Yes, we offer in-store alterations and custom tailoring services at our flagship retail outlets for ethnic wear, suits, and designer wear."
    },
    {
      question: "Can we request bulk orders or wholesale partnerships?",
      answer: "Absolutely! Please visit our Trade Enquiry page and submit your details. Our bulk sales team will get in touch with you within 24-48 hours."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Delivery charges and transit times vary depending on the destination. You can request shipping quotes directly from our support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, mobile wallets, and cash on delivery (COD) for domestic retail orders."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking link via email and SMS to monitor your shipment in real-time."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-20 max-w-4xl mx-auto px-4 md:px-8 bg-vastram-cream min-h-[60vh]">
      {/* Page Header */}
      <div className="text-center py-10 mb-8">
        <h1 className="font-playfair text-4xl lg:text-5xl text-vastram-brown font-bold">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div 
              key={index} 
              className="bg-white border border-[#E8E2D9] rounded-none overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              initial={false}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-vastram-gold shrink-0" />
                  <span className="font-playfair font-bold text-vastram-brown text-base md:text-lg">
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1.5 bg-vastram-cream text-vastram-gold border border-vastram-gold/25 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-vastram-text/90 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
