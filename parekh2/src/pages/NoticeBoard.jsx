import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2026', 
      date: 'Nov 01, 2026', 
      description: 'The Annual General Meeting of Sutra Textiles will be held to discuss Q4 results, next fiscal year distribution strategies, and upcoming fashion collections.' 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      date: 'Oct 20, 2026', 
      description: 'Our main Mumbai distribution center will remain temporarily closed for bi-annual inventory checks and logistics maintenance. Dispatch schedules will resume shortly.' 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      date: 'Sep 15, 2026', 
      description: 'Registered trade circular partners can now generate automated e-Way bills directly from the merchant dashboard for seamless shipping approvals.' 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      date: 'Aug 22, 2026', 
      description: 'We are expanding our retail business relations team! Applications are now open for experienced Sales Managers across Western and Southern zones.' 
    },
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <PageHeader title="Notice Board" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow duration-300 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C48B5D] uppercase tracking-widest">
                  {notice.date}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-darkbrown">
                {notice.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-1">
                {notice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
