import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Contact Us</h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed px-4">
          Experience the finest craftsmanship. Our headquarters brings you premium quality and timeless traditions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          {/* White Office Address Card */}
          <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-[#2d0a4e] shadow-lg border border-gray-100 flex flex-col h-full justify-between relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Office Address</h3>
            
            <div className="space-y-5 sm:space-y-6 my-auto">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#2d0a4e] p-2.5 rounded-lg shrink-0 mt-0.5 text-white shadow-md">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#d8a5ad] mb-0.5">Headquarters</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Premium Textile Avenue<br />
                    Fashion District, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="h-px w-full bg-gray-100"></div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#2d0a4e] p-2.5 rounded-lg shrink-0 mt-0.5 text-white shadow-md">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#d8a5ad] mb-0.5">Call Us</p>
                  <p className="text-gray-600 text-sm font-semibold">+1 234 567 8900</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col h-full"
        >
          {/* Dark Contact Details Card */}
          <div className="bg-[#2d0a4e] p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-white shadow-lg flex flex-col h-full justify-between relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Details</h3>
            
            <div className="space-y-5 sm:space-y-6 my-auto">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-[#d8a5ad] bg-white/10 p-2.5 rounded-lg shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-0.5">Email Enquiries</p>
                  <p className="text-pearl-50 text-sm">info@texmart.com</p>
                  <p className="text-pearl-50 text-sm">sales@texmart.com</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10"></div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-[#d8a5ad] bg-white/10 p-2.5 rounded-lg shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-0.5">Business Hours</p>
                  <p className="text-pearl-50 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-pearl-50 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg h-[250px] sm:h-[380px] w-full mt-8 sm:mt-12 border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <iframe 
          src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </motion.div>
    </div>
  );
}
