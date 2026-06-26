import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail } from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: 'Retail Operations Manager',
      location: 'Mumbai, India',
      salary: '₹65,000 - ₹84,000 / Month',
      description: 'Oversee daily store operations, manage staff, and ensure a premium customer experience across our flagship retail outlets.',
    },
    {
      id: 2,
      title: 'Senior Fabric Technologist',
      location: 'Surat, India',
      salary: '₹80,000 - ₹1,10,000 / Month',
      description: 'Lead quality control for incoming fabrics, develop new textile blends, and maintain our high standards of material excellence.',
    },
    {
      id: 3,
      title: 'B2B Sales Executive',
      location: 'Delhi, India',
      salary: '₹40,000 - ₹55,000 / Month',
      description: 'Expand our wholesale network, acquire new B2B accounts, and maintain strong relationships with our key clients.',
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      salary: '₹50,000 - ₹70,000 / Month',
      description: 'Drive our online presence, manage social media campaigns, and optimize e-commerce conversion rates.',
    },
  ];

  return (
    <div className="pb-12 sm:pb-16 max-w-7xl mx-auto">
      <div className="text-center py-8 sm:py-10 mb-6 sm:mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#2d0a4e] font-bold">Career</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {jobs.map((job, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.1 }}
            key={job.id} 
            className="bg-white rounded-2xl sm:rounded-[2rem] border border-gray-100 hover:border-[#d8a5ad] hover:shadow-xl transition-all duration-400 flex flex-col overflow-hidden"
          >
            <div className="p-5 sm:p-8 md:p-10 flex-grow">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-[#2d0a4e] mb-4 sm:mb-6 leading-snug">{job.title}</h3>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-8 p-4 sm:p-5 bg-pearl-50 rounded-xl sm:rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-gray-500">
                  <MapPin size={14} className="text-[#d8a5ad] shrink-0" /> {job.location}
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-gray-500">
                  <Briefcase size={14} className="text-[#d8a5ad] shrink-0" /> {job.salary}
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-gray-500">
                  <Mail size={14} className="text-[#d8a5ad] shrink-0 mt-0.5" />
                  <a href="mailto:careers@texmart.com" className="hover:text-[#d8a5ad] transition-colors break-all">careers@texmart.com</a>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
            </div>

            <div className="px-5 pb-5 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
              <button className="w-full border-2 border-[#2d0a4e] text-[#2d0a4e] py-3 sm:py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#2d0a4e] hover:text-white transition-all duration-300">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Career;
