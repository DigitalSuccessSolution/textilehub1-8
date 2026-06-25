import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';

const faqs = [
  {
    id: 1,
    question: 'What types of fabrics and textiles do you offer?',
    answer:
      'We offer a wide range of premium textiles including silk sarees, cotton fabrics, dress materials, suiting & shirting fabrics, ethnic wear collections, and modern blended fabrics. Our curated catalogue is updated seasonally to bring you the finest in both traditional and contemporary styles.',
  },
  {
    id: 2,
    question: 'How can I place a Trade Enquiry or bulk order?',
    answer:
      'You can submit a Trade Enquiry directly through our Trade Enquiry page. Simply fill in your requirements — fabric type, quantity, and preferred delivery timeline — and our B2B team will get back to you within 24 business hours with a custom quote.',
  },
  {
    id: 3,
    question: 'What is the e-Auction feature and how does it work?',
    answer:
      'Our e-Auction platform allows registered trade partners to bid on exclusive fabric lots in real time. Auctions are announced in advance via Trade Circulars and Notice Board. You can register your interest through the e-Quotation page, and our team will provide access credentials before each auction event.',
  },
  {
    id: 4,
    question: 'Do you offer customised or private-label fabric sourcing?',
    answer:
      'Yes! We work closely with manufacturers and weavers across India to source custom fabric blends, colours, and weaves based on your specific business needs. Reach out to us via the Trade Enquiry form with your specifications, and our sourcing team will propose suitable options.',
  },
  {
    id: 5,
    question: 'What is your minimum order quantity for wholesale purchases?',
    answer:
      'Minimum order quantities (MOQs) vary by fabric type and category. Generally, bulk fabric orders start from 50 metres per SKU. For specific MOQ details on a particular fabric, please submit a Trade Enquiry or contact us directly — our team will provide complete pricing and MOQ information.',
  },
  {
    id: 6,
    question: 'How can I stay updated on new collections and trade offers?',
    answer:
      'You can follow our latest updates through the Trade Circular and Notice Board sections on our website. Additionally, subscribing to our newsletter and following us on social media ensures you never miss new arrivals, seasonal offers, or upcoming auction events.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div>
      <PageHeader title="Frequently Asked Questions" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Find quick answers to the most common questions about our services, ordering process, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: isOpen
                    ? '1.5px solid rgba(128,0,0,0.22)'
                    : '1.5px solid rgba(74,55,40,0.1)',
                  boxShadow: isOpen
                    ? '0 8px 30px rgba(128,0,0,0.08)'
                    : '0 2px 8px rgba(74,55,40,0.05)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  background: '#fff',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 16,
                  }}
                >
                  {/* Number + Question */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      minWidth: 30, height: 30,
                      borderRadius: '50%',
                      background: isOpen
                        ? 'linear-gradient(135deg, #6B2737, #800000)'
                        : 'rgba(74,55,40,0.08)',
                      color: isOpen ? '#F5F5DC' : '#4A3728',
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: '"Inter", sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.3s, color 0.3s',
                      flexShrink: 0,
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: '"Inter", sans-serif',
                      color: isOpen ? '#800000' : '#2d2d2d',
                      transition: 'color 0.3s',
                      lineHeight: 1.4,
                    }}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    borderRadius: '50%',
                    border: '1.5px solid',
                    borderColor: isOpen ? '#800000' : 'rgba(74,55,40,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.35s ease, border-color 0.3s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4L6 8L10 4"
                        stroke={isOpen ? '#800000' : '#4A3728'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{
                    padding: '0 22px 20px 66px',
                    fontSize: 14,
                    color: '#555',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: 1.75,
                    borderTop: '1px solid rgba(74,55,40,0.07)',
                    paddingTop: 14,
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 52,
          textAlign: 'center',
          padding: '32px 28px',
          borderRadius: 16,
          background: 'linear-gradient(135deg, #4A3728 0%, #6B2737 55%, #800000 100%)',
          boxShadow: '0 10px 40px rgba(128,0,0,0.2)',
        }}>
          <h3 style={{
            margin: '0 0 8px',
            fontSize: 18,
            fontWeight: 700,
            fontFamily: '"Merriweather", serif',
            color: '#F5F5DC',
          }}>
            Still have questions?
          </h3>
          <p style={{
            margin: '0 0 20px',
            fontSize: 13,
            color: 'rgba(245,245,220,0.65)',
            fontFamily: '"Inter", sans-serif',
          }}>
            Our team is happy to help. Reach out to us directly.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              padding: '11px 28px',
              background: '#F5F5DC',
              color: '#800000',
              borderRadius: 9,
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: 13,
              textDecoration: 'none',
              letterSpacing: 0.3,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Contact Us →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
