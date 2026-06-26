import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { HelpCircle, ChevronDown } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the minimum order quantity (MOQ) for bulk wholesale purchases?',
      answer: 'Our standard Minimum Order Quantity (MOQ) varies by product category. For premium silk sarees, the MOQ is 50 pieces. For cotton and blended suiting/shirting fabrics, the MOQ is 500 meters per color/design. Custom woven fabric design requests generally have higher MOQ constraints depending on loom setup requirements.'
    },
    {
      question: 'How can I request fabric sample swatches before placing a bulk order?',
      answer: 'We provide sample swatch cards for most of our standard running fabric lines to registered traders. You can submit a sample request through the Trade Enquiry form or by contacting our distribution desk. Swatch cards are sent out free of charge, with domestic shipping taking approximately 3-5 business days.'
    },
    {
      question: 'How do I register to participate in your live e-Auctions?',
      answer: 'To participate in live auctions, businesses must complete the e-Auction Registration form on our portal. This requires uploading a copy of your valid GST Certificate and submitting your business details. Once verified by our administration team, you will receive login credentials and instruction details on submitting the Earnest Money Deposit (EMD).'
    },
    {
      question: 'Can I get custom designs woven or manufacture fabrics to specific requirements?',
      answer: 'Yes, we specialize in bespoke weaving and custom fabric manufacturing. Our design studio collaborates with clients to develop exclusive weave patterns, custom color combinations, and institutional prints. Minimum quantities and technical specifications will be detailed by our design coordinators upon inquiry.'
    },
    {
      question: 'What are the payment terms and shipping timelines for domestic and international orders?',
      answer: 'For standard trade orders, we accept Letter of Credit (L/C), bank transfers, and standard trade terms upon credit evaluation. Domestic dispatches are completed within 7-10 days for standard stock. International shipping timelines range from 21 to 45 days depending on the shipping lane, customs clearances, and delivery destination.'
    },
    {
      question: 'How is the e-Quotation request processed, and how long does it take?',
      answer: 'Once you submit the e-Quotation form with your Trader Name, GST No, Product Particulars, and quantity requirements, our estimation desk evaluates current yarn market prices and design complexity. A formal, detailed e-Quotation PDF sheet is generated and emailed to you within 24 to 48 business hours.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader title="Frequently Asked Questions" />

      <div className="bg-[#FAF7F0] py-24 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 bg-[#D4A853]/15 text-[#D4A853] rounded-full flex items-center justify-center mx-auto">
              <HelpCircle size={22} />
            </div>
            <h2 className="text-3xl font-serif font-light text-[#0B1C3E]">How can we help you?</h2>
            <p className="text-[#6B7A99] text-sm font-light leading-relaxed">
              Find quick answers to common questions about our heritage textiles, bulk ordering, e-Auctions, and distributor portals.
            </p>
          </div>

          <div className="bg-white border border-[#0B1C3E]/8 p-8 md:p-12 space-y-4">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-[#0B1C3E]/5 pb-4 last:border-0 last:pb-0 transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left py-4 group"
                  >
                    <span className={`font-serif text-base md:text-lg font-light transition-colors duration-200 ${
                      isOpen ? 'text-[#D4A853]' : 'text-[#0B1C3E] group-hover:text-[#D4A853]'
                    }`}>
                      {item.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#D4A853] shrink-0 ml-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-[#6B7A99] font-light leading-relaxed pr-8 pb-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#0B1C3E] p-8 text-center space-y-4">
            <h4 className="text-white font-serif text-lg font-light">Have more questions?</h4>
            <p className="text-white/60 text-xs font-light max-w-md mx-auto leading-relaxed">
              If you couldn't find the answers you were looking for, please submit a trade enquiry or get in touch with our support desk.
            </p>
            <div className="pt-2">
              <a 
                href="/contact" 
                className="inline-block bg-[#D4A853] text-[#0B1C3E] px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#0B1C3E] transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;
