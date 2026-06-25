import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import { Mail } from 'lucide-react';

const RetailManagement = () => {
  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'MANAGING DIRECTOR',
      desc: 'Business Strategy & Operations',
      email: 'info@auraweave.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Ananya Sharma',
      role: 'HEAD OF RETAIL OPERATIONS',
      desc: 'Retail Management & Customer Experience',
      email: 'sales@auraweave.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Vikram Mehta',
      role: 'SUPPLY CHAIN DIRECTOR',
      desc: 'Logistics & Trade Relations',
      email: 'info@auraweave.com',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <PageHeader title="Our Retail Management" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle 
          title="Excellence in Operations" 
          subtitle="Discover how we manage a vast network of retail supply chains to deliver unparalleled quality."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-[#EBE7DF] shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Avatar Image with a subtle thick grey border */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-slate-100 shadow-inner mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Details */}
              <h3 className="text-2xl font-serif font-bold text-brand-darkbrown mb-1.5">
                {member.name}
              </h3>
              
              <span className="text-[11px] font-sans font-bold tracking-widest text-[#B25E3E] uppercase mb-3">
                {member.role}
              </span>
              
              <p className="text-gray-500 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-[240px]">
                {member.desc}
              </p>

              {/* Contact Button */}
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F0F4F4] hover:bg-[#E2EBEB] text-[#1E3E4A] font-sans font-bold text-xs tracking-wider rounded-full border border-[#D5DFDF] transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                CONTACT
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
