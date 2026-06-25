import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Bell, ChevronRight } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    { 
      id: 1, 
      title: 'Annual General Meeting 2023', 
      date: 'Nov 01, 2023', 
      desc: 'The annual general meeting of AuraWeave Textiles is scheduled for November 25, 2026. All board members and stakeholders are requested to attend.', 
      isNew: true 
    },
    { 
      id: 2, 
      title: 'Warehouse Closure Notice for Maintenance (Mumbai Depot)', 
      date: 'Oct 20, 2023', 
      desc: 'Our Mumbai distribution depot will remain closed from October 28 to October 30, 2023, for scheduled electrical maintenance. Please plan your dispatch schedules accordingly.', 
      isNew: true 
    },
    { 
      id: 3, 
      title: 'Introduction of e-Way Bill Integration in Partner Portal', 
      date: 'Sep 15, 2023', 
      desc: 'We are integrating automatic e-way bill generation into the dealer portal. A detailed webinar tutorial will be conducted on September 20, 2023.', 
      isNew: false 
    },
    { 
      id: 4, 
      title: 'Recruitment Drive for Zonal Sales Managers', 
      date: 'Aug 22, 2023', 
      desc: 'AuraWeave Textiles is seeking experienced Zonal Sales Managers for North and West regions. Interested candidates can apply on our careers portal.', 
      isNew: false 
    },
  ];

  return (
    <div>
      <PageHeader title="Notice Board" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-maroon hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between group">
              <div className="flex items-start w-full">
                <Bell className={`w-6 h-6 mr-4 shrink-0 mt-1 ${notice.isNew ? 'text-brand-maroon' : 'text-gray-400'}`} />
                <div className="flex-grow">
                  <div className="flex items-center mb-1">
                    <span className="text-sm text-gray-500 font-medium">{notice.date}</span>
                    {notice.isNew && (
                      <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-maroon transition-colors mb-1.5">{notice.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{notice.desc}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-brand-maroon transition-colors w-6 h-6 shrink-0 ml-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
