import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function FloatingWidgets() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Namaste! Welcome to TEXMART Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    { text: 'Explore Products', reply: 'We offer a wide range of premium textiles including Sarees, Leggings, Kurtis, Dress Suits, Bedsheets, Hosiery, Suiting, and Shirting. You can view our collection on the Product Page.' },
    { text: 'Bulk Trade Order', reply: 'For bulk wholesale orders, please visit our Trade Enquiry or e-Quotation page and submit your requirements. Our sales team will get back to you within 24 hours.' },
    { text: 'Active Auctions', reply: 'We host transparent online auctions for surplus fabrics and liquidation lots. Register on our e-Auction page with your GST certificate to participate.' },
    { text: 'Contact & Location', reply: 'Our headquarters is located at 123 Premium Textile Avenue, Fashion District. You can reach us at info@texmart.com or via the Contact Us page.' }
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Generate bot reply after short delay
    setTimeout(() => {
      let botReplyText = "Thank you for reaching out! Our support agent will connect with you shortly. For immediate official queries, please submit a Trade Enquiry form.";
      
      const lower = text.toLowerCase();
      if (lower.includes('saree') || lower.includes('kurti') || lower.includes('product') || lower.includes('fabric')) {
        botReplyText = "We manufacture premium silk sarees, cotton kurtis, leggings, suiting, and shirting fabrics. Check out our Product Page for the full catalogue!";
      } else if (lower.includes('bulk') || lower.includes('wholesale') || lower.includes('order') || lower.includes('price')) {
        botReplyText = "For commercial pricing, custom weaves, or bulk volumes, please fill out the B2B form on our e-Quotation or Trade Enquiry page.";
      } else if (lower.includes('auction') || lower.includes('bid')) {
        botReplyText = "Our e-Auction platform lists active bidding lots. Upload your GST certificate on the e-Auction page to sign up.";
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('contact') || lower.includes('phone')) {
        botReplyText = "You can view our location and contact details on the Contact Us page, or email us directly at info@texmart.com.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReplyText }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[400px] sm:h-[440px] mb-2"
          >
            {/* Chat Header */}
            <div className="bg-[#2d0a4e] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                  <MessageSquare size={18} className="text-[#d8a5ad]" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2d0a4e] rounded-full" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-sm">TEXMART Assistant</h3>
                  <p className="text-[10px] text-green-300 font-bold uppercase tracking-wider">Online Support</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#fcfbf9] custom-scrollbar">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#2d0a4e] text-white rounded-tr-none'
                        : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Quick Suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((qr) => (
                      <button
                        key={qr.text}
                        type="button"
                        onClick={() => handleSend(qr.text)}
                        className="bg-white border border-[#d8a5ad]/30 text-[#2d0a4e] hover:border-[#2d0a4e] hover:bg-[#2d0a4e]/5 text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors shadow-sm cursor-pointer"
                      >
                        {qr.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 bg-white border-t border-gray-100 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about products, orders, auctions..."
                className="flex-grow px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#d8a5ad] focus:bg-white transition-colors"
              />
              <button
                type="submit"
                className="bg-[#2d0a4e] text-white p-2.5 rounded-xl hover:bg-[#d8a5ad] transition-colors shadow-md cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pointer-events-auto">
        {/* Chatbot Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform active:scale-95 duration-300 cursor-pointer ${
            isChatOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#2d0a4e] hover:bg-[#d8a5ad]'
          }`}
          aria-label="Toggle Assistant"
        >
          {isChatOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </button>

        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA56] flex items-center justify-center text-white shadow-2xl transition-transform active:scale-95 duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
