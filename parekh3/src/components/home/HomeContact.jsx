import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const HomeContact = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left: Navy block */}
          <div className="bg-[#0B1C3E] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-3">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight mb-4">
                Let's Start a<br />
                <em className="not-italic italic text-[#D4A853]">Conversation</em>
              </h2>
              <div className="w-10 h-0.5 bg-[#D4A853] mb-5" />
              <p className="text-white/50 text-sm leading-relaxed font-light mb-6">
                Whether you have a question about our collections, pricing, or need assistance with your order — our team is ready to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#D4A853]" />
                </div>
                <span className="text-sm text-white/55 font-light">123 Textile Hub, Fashion Street, Mumbai 400001</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#D4A853]" />
                </div>
                <span className="text-sm text-white/55 font-light">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#D4A853]" />
                </div>
                <span className="text-sm text-white/55 font-light">info@luminatextiles.com</span>
              </div>
            </div>
          </div>

          {/* Right: Amber CTA block */}
          <div className="bg-[#D4A853] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-[#0B1C3E]/60 text-xs uppercase tracking-[0.4em] font-medium mb-3">Ready to Connect?</p>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-[#0B1C3E] leading-tight mb-4">
              Visit Our Full Contact Page
            </h3>
            <p className="text-[#0B1C3E]/70 text-sm leading-relaxed mb-6 font-light">
              Find us on the map, explore all our contact options, and reach out for bulk inquiries, partnerships, or general queries.
            </p>
            <Link
              to="/contact"
              className="group self-start inline-flex items-center gap-3 bg-[#0B1C3E] text-white px-6 py-3.5 text-xs font-medium tracking-widest uppercase hover:bg-[#132452] transition-all duration-300"
            >
              Contact Us Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
