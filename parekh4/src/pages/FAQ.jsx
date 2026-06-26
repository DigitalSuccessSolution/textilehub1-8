import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What types of textile products does TEXMART offer?',
    answer:
      'TEXMART offers a wide range of premium textile products including Sarees, Leggings, Kurtis, Dress Suits, Bedsheets & Linen, Hosiery Items, Suiting, Shirting, Formal & Ethnic Wear for Men, Women & Children, and Home Upholstery & Furnishing. Our catalogue is regularly updated with new collections.',
  },
  {
    id: 2,
    question: 'How can I place a bulk or wholesale order?',
    answer:
      'For bulk and wholesale orders, please visit our Trade Enquiry page and fill in your company details along with the required product specifications and expected order volume. Our B2B sales team will get back to you within 24–48 working hours with a customised quotation.',
  },
  {
    id: 3,
    question: 'What is the e-Quotation feature?',
    answer:
      'The e-Quotation feature allows traders and businesses to request detailed price quotes online for any of our textile products. Simply fill in your business information, select the product category, and provide specific requirements. Our team will prepare a formal quotation and send it to your registered email.',
  },
  {
    id: 4,
    question: 'How does the e-Auction process work?',
    answer:
      'Our e-Auction platform enables businesses to participate in transparent digital liquidation auctions for select textile stock. You need to register with your business details and GST certificate. Once approved, you will receive notifications for active auctions and can place bids digitally.',
  },
  {
    id: 5,
    question: 'Does TEXMART support export orders?',
    answer:
      'Yes, TEXMART actively supports international export orders with full compliance to global textile standards. We have experience serving clients in the Middle East, Europe, and South-East Asia. Please contact us via the Trade Enquiry form or email us at sales@texmart.com to discuss your export requirements.',
  },
  {
    id: 6,
    question: 'How can I apply for a career at TEXMART?',
    answer:
      'You can browse all current job openings on our Career Page. Each listing includes the job role, location, experience required, and a description. Click "Apply Now" on the relevant listing and send your resume to careers@texmart.com. We look forward to welcoming talented individuals to the TEXMART family.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="pb-12 sm:pb-16 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">FAQ</h1>
        <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed px-4">
          Everything you need to know about TEXMART's products, services, and processes.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className={`rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-[#d8a5ad] shadow-md'
                  : 'border-gray-100 bg-white shadow-sm hover:border-[#d8a5ad]/50 hover:shadow-md'
              }`}
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(faq.id)}
                className={`w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left transition-colors duration-200 ${
                  isOpen ? 'bg-[#2d0a4e] text-white' : 'bg-white text-[#2d0a4e] hover:bg-pearl-50'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    isOpen ? 'bg-white/15 text-white' : 'bg-[#d8a5ad]/15 text-[#d8a5ad]'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <span className="font-playfair font-bold text-sm sm:text-base leading-snug pr-2">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <ChevronDown size={18} className={isOpen ? 'text-white/80' : 'text-[#d8a5ad]'} />
                </motion.div>
              </button>

              {/* Answer Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-7 py-4 sm:py-5 bg-white border-t border-[#d8a5ad]/20">
                      <div className="flex gap-3 sm:gap-4">
                        <HelpCircle size={16} className="text-[#d8a5ad] shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 sm:mt-14 bg-[#2d0a4e] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center text-white shadow-xl">
        <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Still have questions?</h3>
        <p className="text-white/70 text-sm mb-5 sm:mb-6">Our team is ready to help you with anything.</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#d8a5ad] text-[#2d0a4e] px-6 sm:px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-md"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
