import React, { useState } from 'react';
import { MessageSquareText, X, Send } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-[#f8fafc] w-[calc(100vw-32px)] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-maroon px-5 py-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold tracking-wide font-sans text-sm sm:text-base">AuraWeave Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 sm:p-5 h-[280px] sm:h-[320px] overflow-y-auto bg-[#f8fafc] flex flex-col space-y-4">
            <div className="bg-white text-gray-700 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 max-w-[85%] self-start">
              <p className="text-sm leading-relaxed font-sans">
                Namaste! 🙏 Welcome to AuraWeave. How can I help you today?
              </p>
            </div>
            <div className="bg-white text-gray-700 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 max-w-[85%] self-start">
              <p className="text-sm leading-relaxed font-sans">
                Are you looking for Sarees, Dress Suits, or Trade Enquiries?
              </p>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-3">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon transition-all placeholder-gray-400 text-gray-700"
            />
            <button className="bg-brand-maroon text-white p-2.5 rounded-full hover:bg-red-900 transition-colors shrink-0 shadow-sm flex items-center justify-center group cursor-pointer">
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-brand-maroon text-white p-3.5 rounded-full shadow-lg hover:bg-red-900 hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer border border-white/10"
          aria-label="Open Chatbot"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquareText className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      )}
    </div>
  );
};

export default FloatingChatbot;
