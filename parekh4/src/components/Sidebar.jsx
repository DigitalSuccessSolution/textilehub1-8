import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Users, Phone, ShoppingBag, Image as ImageIcon, 
  MessageSquare, FileText, Briefcase, Star, Clipboard, X, HelpCircle
} from 'lucide-react';

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();

  const navLinks = [
    { name: 'Home Page', path: '/', icon: Globe },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Product', path: '/products', icon: ShoppingBag },
    { name: 'Our Retail Management', path: '/retail-management', icon: Users },
    { name: 'Trade Enquiry', path: '/trade-enquiry', icon: MessageSquare },
    { name: 'e-Quotation', path: '/e-quotation', icon: FileText },
    { name: 'e-Auction', path: '/e-auction', icon: FileText },
    { name: 'Trade Circular', path: '/trade-circular', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Notice Board', path: '/notice-board', icon: Clipboard },
    { name: 'Career', path: '/career', icon: Briefcase },
    { name: 'Customer Review', path: '/reviews', icon: Star },
    { name: 'Business Media Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  return (
    <div className="flex flex-col h-full bg-pearl-50 border-r border-pearl-100 overflow-y-auto custom-scrollbar">
      {/* Logo Area - Desktop only */}
      <div className="px-8 pt-6 pb-3.5 border-b border-pearl-100 hidden lg:block">
        <h1 className="font-playfair text-3xl tracking-widest text-[#2D0A4E] font-bold">TEXMART</h1>
        <p className="text-xs tracking-widest uppercase mt-1 text-[#C88A93] font-outfit">Textile retail mall</p>
      </div>

      {/* Mobile logo area inside sidebar */}
      <div className="px-6 pt-4 pb-2.5 border-b border-pearl-100 lg:hidden flex items-center justify-between">
        <div>
          <h1 className="font-playfair text-2xl tracking-widest text-[#2D0A4E] font-bold">TEXMART</h1>
          <p className="text-[10px] tracking-widest uppercase mt-0.5 text-[#C88A93] font-outfit">Textile retail mall</p>
        </div>
        <button 
          onClick={closeSidebar}
          className="p-1.5 rounded-lg hover:bg-pearl-100 transition-colors text-gray-500"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-3 px-4 sm:py-4 sm:px-6">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
               <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActive ? 'text-sapphire-900 bg-pearl-100 shadow-sm' : 'text-gray-600 hover:text-sapphire-900 hover:bg-pearl-100/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-sapphire-900 rounded-l-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={17} className={isActive ? "text-rosegold-500" : "text-gray-400 group-hover:text-rosegold-400 transition-colors"} />
                  <span className="truncate">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer - Social Media Icons */}
      <div className="p-5 sm:p-6 border-t border-pearl-100">
        <div className="flex items-center justify-between px-2 text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d0a4e] transition-colors" aria-label="Facebook">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d0a4e] transition-colors" aria-label="Instagram">
            <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d0a4e] transition-colors" aria-label="Twitter">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d0a4e] transition-colors" aria-label="LinkedIn">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d0a4e] transition-colors" aria-label="YouTube">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
