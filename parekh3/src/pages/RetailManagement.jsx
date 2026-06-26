import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Mail } from 'lucide-react';
import dummyLeader from '../assets/dummy_leader.png';

const RetailManagement = () => {
  // Dummy data for the team
  const teamMembers = [
    {
      id: 1,
      name: 'Rajiv Lumina',
      role: 'Managing Director',
      image: dummyLeader,
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Head of Retail Operations',
      image: dummyLeader,
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Supply Chain Director',
      image: dummyLeader,
    }
  ];

  return (
    <div>
      <PageHeader title="Our Retail Management" />

      <div className="bg-[#FAF7F0] py-24 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
          
          {/* Section Description */}
          <p className="text-[#6B7A99] font-light text-sm md:text-base max-w-2xl mx-auto mb-12 -mt-4">
            Lumina Textiles is administered and governed by highly skilled, experienced and qualified Management.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm max-w-[180px] sm:max-w-[220px] mx-auto w-full">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover Overlay with Social Icons */}
                  <div className="absolute inset-0 bg-[#0B1C3E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4A853] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4A853] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-3 md:p-4 text-center border-t border-[#D4A853]/20 relative">
                  <h3 className="text-sm sm:text-base font-serif font-medium text-[#0B1C3E] mb-0.5">{member.name}</h3>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#D4A853] font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
