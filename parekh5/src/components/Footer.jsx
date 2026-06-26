import React from 'react';

// Custom inline SVG brand icons (since Lucide v1.0+ has removed brand icons)
const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 18, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1B484E] text-pearl-100 pt-10 pb-3 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-playfair text-2xl text-pearl-50 font-bold mb-4 sm:mb-6 tracking-wide">TEXTILE MALL</h2>
          <p className="text-sm text-pearl-100/80 leading-relaxed max-w-sm">
            Quality Textiles | Industrial Strength | Traditional Aesthetics. Experience elegance in every thread.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-pearl-50 mb-4 sm:mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-pearl-100/80">
            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="/products" className="hover:text-gray-300 transition-colors">Products</a></li>
            <li><a href="/trade-enquiry" className="hover:text-gray-300 transition-colors">Trade Enquiry</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-playfair text-lg text-pearl-50 mb-4 sm:mb-6">Resources</h3>
          <ul className="space-y-3 text-sm text-pearl-100/80">
            <li><a href="/career" className="hover:text-gray-300 transition-colors">Career</a></li>
            <li><a href="/blog" className="hover:text-gray-300 transition-colors">Blog</a></li>
            <li><a href="/reviews" className="hover:text-gray-300 transition-colors">Customer Review</a></li>
            <li><a href="/gallery" className="hover:text-gray-300 transition-colors">Media Gallery</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-playfair text-lg text-pearl-50 mb-4 sm:mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm text-pearl-100/80">
            <li>123 Premium Textile Avenue</li>
            <li>CHENNAI, TN, INDIA</li>
            <li>Email: info@textilemall.com</li>
            <li>Phone: +91 6353778329</li>
          </ul>
        </div>
      </div>
      
      {/* Reduced bottom margin and padding for copyright line */}
      <div className="max-w-7xl mx-auto mt-6 pt-3 border-t border-[#29747E] text-xs text-pearl-100/60 flex justify-between items-center">
        <p>© 2026 | ALL RIGHTS RESERVED | TEXTILE MALL</p>
      </div>
    </footer>
  );
}
