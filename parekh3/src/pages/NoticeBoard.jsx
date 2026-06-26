import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Megaphone } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Annual General Meeting 2023',
      description: 'The Annual General Meeting of Lumina Textiles will be held on November 25th to discuss the yearly performance, audits, and future retail expansion plans.',
      date: 'Nov 01, 2023'
    },
    {
      id: 2,
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)',
      description: 'Our main Mumbai Depot depot will remain closed for biannual structural audit and equipment maintenance. Please plan supply logistics accordingly.',
      date: 'Oct 20, 2023'
    },
    {
      id: 3,
      title: 'Introduction of e-Way Bill Integration in Partner Portal',
      description: 'We are launching direct API integration for e-Way bills inside our partner distributor portal to speed up transport dispatch and logistics generation.',
      date: 'Sep 15, 2023'
    },
    {
      id: 4,
      title: 'Recruitment Drive for Zonal Sales Managers',
      description: 'Applications are open for Zonal Sales Managers across South and West zones. Eligible candidates with over 5 years of textile retail experience can apply.',
      date: 'Aug 22, 2023'
    },
  ];

  return (
    <div>
      <PageHeader title="Notice Board" />

      <div className="bg-[#FAF7F0] py-24 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white border border-[#0B1C3E]/6 p-6 rounded-lg hover:shadow-[0_8px_30px_rgba(11,28,62,0.08)] hover:border-[#D4A853]/40 transition-all duration-300 flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-[#D4A853]/10 flex items-center justify-center shrink-0 rounded-full mt-1">
                  <Megaphone size={16} className="text-[#D4A853]" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-[#D4A853] font-medium tracking-wider">
                    {notice.date}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-[#0B1C3E] leading-snug">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-[#6B7A99] font-light leading-relaxed mt-1">
                    {notice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
