import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of fabrics does SutraTex specialize in?",
      answer: "SutraTex specializes in high-quality premium textiles, including luxurious Banarasi silk sarees, premium suiting and shirting materials, comfortable leggings, designer cotton kurtis, and a premium collection of home linen and upholstery."
    },
    {
      question: "How can we submit a trade enquiry or request samples?",
      answer: "You can easily submit a trade enquiry through our dedicated Trade Enquiry portal or request custom quotations via the e-Quotation page. Our trade relations team will review your requirements and reach out to you within 24-48 business hours."
    },
    {
      question: "What is the SutraTex Advantage?",
      answer: "The SutraTex Advantage lies in our commitment to outstanding craftsmanship, sourcing only premium-grade fibers, maintaining strict quality controls, and offering eco-friendly, sustainable fabrics tailored to modern global standards."
    },
    {
      question: "Do you support bulk custom manufacturing?",
      answer: "Yes, we specialize in high-volume, bulk custom manufacturing for corporate clients, boutiques, and retail networks worldwide. Feel free to contact our sales team to discuss specific weaves, patterns, and custom material specifications."
    },
    {
      question: "How does the e-Auction and e-Quotation process work?",
      answer: "Registered trade partners can participate in our transparent e-Auctions for premium surplus lots, or request tailored pricing bids through our digital e-Quotation portal. This helps streamline procurement and ensures highly competitive trade rates."
    },
    {
      question: "Where are your products distributed?",
      answer: "SutraTex products are supplied to leading retail chains, fashion brands, boutique houses, and textile distributors across the country, as well as selected international global markets."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <PageHeader title="Frequently Asked Questions" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm">Find quick answers to common enquiries about our products, trade services, and processes.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors"
                >
                  <span className={`font-serif font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-brand-maroon' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-maroon' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-gray-50' : 'max-h-0'}`}
                >
                  <div className="px-6 py-5 text-gray-600 text-sm md:text-base leading-relaxed bg-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm">
          <h3 className="font-serif font-bold text-lg md:text-xl text-brand-maroon">Still have questions?</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Our dedicated support team is here to assist you with any custom requirements.</p>
          <Link 
            to="/contact" 
            className="btn-premium inline-block"
          >
            Contact Support Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
